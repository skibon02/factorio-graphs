import machines from './machines_db.js';
import { recipes, sources } from './recipes_db.js'
import resources from './resources_db.js'

/**
 * Build a recipe tree as a plain object for a given resource.
 * Uses the default/base recipe at each step (no alt recipe selection).
 * Pass selectRecipe(rcname, recipes_list) => recipe_index to override.
 * Returns null for basic resources (sources).
 *
 * Example output for chemical-science-pack:
 * {
 *   name: "chemical-science-pack",
 *   output: 2,
 *   crafting_time: 24,
 *   machine: "assembling-machine-1",
 *   ingredients: {
 *     "engine-unit": { name: "engine-unit", output: 1, ..., ingredients: { ... } },
 *     "advanced-circuit": { ... },
 *     "sulfur": { ... }
 *   }
 * }
 */
function buildRecipeTree(rcname, path = new Set(), selectRecipe = null) {
    if (path.has(rcname)) {
        return { _recursion: true, name: rcname };
    }

    let recipes_list = all_recipes(rcname);
    if (recipes_list === "basic_resource") {
        return null;
    }

    if (recipes_list.length === 0) {
        return { _missing: true, name: rcname };
    }

    let recipe_num = 0;
    if (selectRecipe && recipes_list.length > 1) {
        recipe_num = selectRecipe(rcname, recipes_list);
    }
    let recipe = recipes_list[recipe_num];

    let out_rate;
    if (recipe.name === rcname) {
        out_rate = recipe.output;
    } else {
        out_rate = recipe.extra_outputs.find(eo => eo.name === rcname).amount;
    }

    path.add(rcname);

    let ingredients = {};
    for (let ing in recipe.ingredients) {
        let ing_rate = recipe.ingredients[ing] / out_rate;
        let subtree = buildRecipeTree(ing, path, selectRecipe);
        if (subtree) {
            subtree._rate_per_output = ing_rate;
        }
        ingredients[ing] = subtree;
    }

    path.delete(rcname);

    let result = {
        name: recipe.name,
        output: recipe.output,
        crafting_time: recipe.crafting_time,
        machine: recipe.machine,
        ingredients,
    };

    if (recipe.extra_outputs) {
        result.extra_outputs = recipe.extra_outputs;
    }

    // If we're looking at this recipe through an extra output, note the actual output rate
    if (recipe.name !== rcname) {
        result._via_extra_output = rcname;
        result._output_rate = out_rate;
    }

    return result;
}


function get_all_known_resources() {
    let res = {};

    for (let name of sources) {
        res[name] = true;
    }
    for (let recipe of recipes) {
        res[recipe.name] = true;

        if (recipe.extra_outputs) {
            for (let eo of recipe.extra_outputs) {
                res[eo.name] = true;
            }
        }
    }

    return Object.keys(res);
}

const recipes_cache = {};
function all_recipes(rcname) {
    if (sources.includes(rcname)) {
        return "basic_resource";
    }

    if (recipes_cache[rcname]) {
        return recipes_cache[rcname];
    }

    let res = []

    for (let recipe of recipes) {
        if (rcname == recipe.name) {
            res.push(recipe);
        }

        if (recipe.extra_outputs) {
            for (let eo of recipe.extra_outputs) {
                if (rcname == eo.name) {
                    res.push(recipe);
                }
            }
        }
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i].base && res[i].name === rcname) {
            let tmp = res[0];
            res[0] = res[i];
            res[i] = tmp;
            break;
        }
    }

    recipes_cache[rcname] = res;
    return res;
}


function traverseResource(rcname, select_recipe, rate = 0, for_each = (rcname, recipe, rate, cur_path) => {}, path = new Set()) {
    if (path.has(rcname)) {
        return "recursion_detected";
    }
    path.add(rcname);

    let recipes = all_recipes(rcname);
    if (recipes === "basic_resource") {
        path.delete(rcname);
        return;
    }

    let recipe_num;
    if (recipes.length > 1) {
        recipe_num = select_recipe(rcname, recipes);
    } else {
        recipe_num = 0;
    }
    let recipe = recipes[recipe_num];

    for_each(rcname, recipe, rate, path);

    let out_rate;
    if (recipe.name === rcname) {
        out_rate = recipe.output;
    } else {
        out_rate = recipe.extra_outputs.find(eo => eo.name === rcname).amount;
    }

    for (let ing in recipe.ingredients) {
        let ing_rate = rate / out_rate * recipe.ingredients[ing];
        let result = traverseResource(ing, select_recipe, ing_rate, for_each, path);
        if (result === "recursion_detected") {
            return "recursion_detected";
        }
    }

    path.delete(rcname);
}


const missing_recipes_checked = {};
function find_missing_recipes(rcname, callStack = new Set()) {
    if (callStack.has(rcname)) {
        return {};
    }

    if (missing_recipes_checked[rcname]) {
        return {};
    }

    let res = {};
    let recipes = all_recipes(rcname);

    if (recipes === "basic_resource") {
        missing_recipes_checked[rcname] = true;
        return res;
    }

    if (recipes.length == 0) {
        res[rcname] = true;
        missing_recipes_checked[rcname] = true;
        return res;
    }

    callStack.add(rcname);
    for (let recipe of recipes) {
        for (let rc in recipe.ingredients) {
            let missing = find_missing_recipes(rc, new Set(callStack));
            res = Object.assign(res, missing);
        }
    }
    callStack.delete(rcname);

    missing_recipes_checked[rcname] = true;
    return res;
}

function check_all_recipes() {
    let res = {};

    let resources = get_all_known_resources();
    for (let rc of resources) {
        res = Object.assign(res, find_missing_recipes(rc));
    }

    return Object.keys(res);
}

function get_all_recipes() {
    let nodes = [];
    let edges = [];

    let resources = get_all_known_resources();
    let cnt = 0;
    let ingcnt = 0;
    for (let rc of resources) {
        let recipes = all_recipes(rc);
        if (recipes == "basic_resource") {
            continue;
        }

        let max_ing_length = 1;
        let recipe_i = 0;
        for (let recipe of recipes) {
            let ingredients_cnt = Object.keys(recipe.ingredients).length;
            let vertical_offset = (ingredients_cnt - 1) * 50;
            if (ingredients_cnt > max_ing_length) {
                max_ing_length = ingredients_cnt;
            }
            nodes.push({
                id: 'out' + cnt,
                type: 'TargetResource',
                position: { x: 300 + recipe_i * 600, y: ingcnt * 100 + vertical_offset },
                data: { rcname: recipe.name, rate: recipe.output }
            })
            if (recipe.extra_outputs) {
                for (let eo of recipe.extra_outputs) {
                    nodes.push({
                        id: 'extra_' + eo.name + '_' + cnt,
                        type: 'TargetResource',
                        position: { x: 300 + recipe_i * 600, y: ingcnt * 100 + vertical_offset + 100 },
                        data: { rcname: eo.name, rate: eo.amount }
                    })
                }
            }

            for (let ing in recipe.ingredients) {
                nodes.push({
                    id: 'in' + ing + cnt,
                    type: 'SourceResource',
                    position: { x: recipe_i * 600, y: ingcnt * 100 },
                    data: { rcname: ing, rate: recipe.ingredients[ing] }
                });

                edges.push({
                    id: 'e' + ing + cnt,
                    source: 'in' + ing + cnt,
                    target: 'out' + cnt,
                })

                ingcnt++;
            }

            cnt++;
            recipe_i++;

            ingcnt -= ingredients_cnt;
        }

        ingcnt += max_ing_length + 1;
    }

    return [nodes, edges];
}


function generateAltRecipes(targetResources, cur_alt_recipes) {
    let res = {};

    for (let rc in targetResources) {
        let traverse_res = traverseResource(rc, (rcname, recipes) => {
            if (cur_alt_recipes[rcname]) {
                res[rcname] = cur_alt_recipes[rcname];
                return cur_alt_recipes[rcname];
            }
            else {
                res[rcname] = 0;
                return 0;
            }
        });
        if (traverse_res == "recursion_detected") {
            return "recursion_detected";
        }
    }

    return res;
}

function getMachineFamily(name) {
    if (!name) return null;
    if (name.startsWith('assembling')) return 'assembling';
    if (name.includes('furnace')) return 'furnace';
    if (name.includes('mining')) return 'mining';
    if (name === 'pumpjack' || name === 'offshore-pump') return 'pumping';
    return null;
}

function calculate(targetResources, cur_alt_recipes, selectedMachines, machineDefaults = {}, researchTime = 30) {
    // 1) generate initial ingredient sets for topological ordering
    const ing_set = {};
    for (let rc in targetResources) {
        let traverse_res = traverseResource(
            rc,
            (rcname, recipes) => {
                if (cur_alt_recipes[rcname]) {
                    return cur_alt_recipes[rcname];
                }
                else {
                    return 0;
                }
            },
            targetResources[rc],
            (rcname, recipe, rate, path) => {
                for (let parent of path) {
                    if (!ing_set[parent]) {
                        ing_set[parent] = new Set();
                    }
                    for (let ing in recipe.ingredients) {
                        ing_set[parent].add(ing);
                    }
                }
            }
        );
        if (traverse_res == "recursion_detected") {
            console.error(`Recursion detected at ${rc} during phase 1 (ingredient sets)`);
            return "recursion_detected";
        }
    }

    // 2) Go through each resource and calculate
    let workingSet = Object.assign({}, targetResources);
    let res = {};

    const ing_set_count = (rc) => {
        let res = 0
        for (let working_rc in workingSet) {
            if (ing_set[working_rc] && ing_set[working_rc].has(rc)) {
                res++;
            }
        }
        return res;
    };

    while (Object.keys(workingSet).length > 0) {
        let handled = false
        for (let [rc, rate] of Object.entries(workingSet)) {
            if (ing_set_count(rc) == 0) {
                let recipes = all_recipes(rc);
                if (recipes === "basic_resource") {
                    // Source resource - calculate miners
                    let resource_info = resources[rc];
                    if (resource_info) {
                        let family = getMachineFamily(resource_info.default_miner);
                        let machine_name = selectedMachines[rc] || (family && machineDefaults[family]) || resource_info.default_miner;
                        let machine = machines[machine_name];
                        let mining_speed = machine.crafting_speed;
                        let mining_time = resource_info.mining_time;

                        let miners_cnt = rate * mining_time / mining_speed;
                        let miners_cnt_ceil = Math.ceil(miners_cnt);
                        let total_energy = miners_cnt_ceil * machine.energy_usage;

                        res[rc] = {
                            rate,
                            recipe: null,
                            machines_cnt: miners_cnt_ceil,
                            machines_cnt_exact: miners_cnt,
                            machine_name,
                            crafting_speed: mining_speed,
                            energy_usage: total_energy,
                            is_miner: true,
                        };
                    }
                    delete workingSet[rc];
                    handled = true;
                    break;
                }

                let recipe_num = 0;
                if (cur_alt_recipes[rc]) {
                    recipe_num = cur_alt_recipes[rc];
                }
                let recipe = recipes[recipe_num];

                delete workingSet[rc];

                let default_machine = recipe.machine;
                let family = getMachineFamily(default_machine);
                if (family && machineDefaults[family]) {
                    default_machine = machineDefaults[family];
                }
                let machine_name = selectedMachines[rc] || default_machine;
                let machine = machines[machine_name];
                let crafting_speed = machine.crafting_speed;

                // Items per second for this recipe at base speed
                let primary_output;
                if (recipe.name === rc) {
                    primary_output = recipe.output;
                } else {
                    primary_output = recipe.extra_outputs.find(eo => eo.name === rc).amount;
                }
                let crafts_per_second = rate / primary_output;
                // Research recipes use the global research time instead of their own crafting_time
                let base_craft_time = recipe.machine === 'lab' ? researchTime : recipe.crafting_time;
                let machines_cnt = crafts_per_second * base_craft_time / crafting_speed;
                let machines_cnt_ceil = Math.ceil(machines_cnt);

                let energy_per_machine = machine.energy_usage;
                let total_energy = machines_cnt_ceil * energy_per_machine;

                res[rc] = {
                    rate,
                    recipe,
                    machines_cnt: machines_cnt_ceil,
                    machines_cnt_exact: machines_cnt,
                    machine_name,
                    crafting_speed,
                    energy_usage: total_energy,
                }

                for (let ing in recipe.ingredients) {
                    let ing_rate = machines_cnt * recipe.ingredients[ing] * crafting_speed / base_craft_time;
                    if (!(ing in workingSet)) {
                        workingSet[ing] = 0;
                    }
                    workingSet[ing] += ing_rate;
                }

                handled = true;
                break;
            }
        }

        if (!handled) {
            console.error(`Recursion detected during phase 2 (calculation)`);
            console.dir(workingSet);
            return "recursion_detected";
        }
    }

    return res;
}

const [initial_nodes, initial_edges] = get_all_recipes();

export {
    check_all_recipes, get_all_recipes,
    initial_nodes, initial_edges, all_recipes,
    generateAltRecipes, calculate, get_all_known_resources,
    buildRecipeTree,
};
