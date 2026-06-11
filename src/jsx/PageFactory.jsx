import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    ReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import TargetResource from '../NodeTypes/TargetResource.jsx';
import SourceResource from '../NodeTypes/SourceResource.jsx';
import React from 'react';
import TargetSelector from './TargetSelector.jsx';
import SelectedRecipes from './SelectedRecipes.jsx';
import { calculate, generateAltRecipes } from '../data/calculator.js';
import { Background } from '@xyflow/react';
import { Controls } from '@xyflow/react';
import ResourceRecipe from '../NodeTypes/ResourceRecipe.jsx';
import { sources } from '../data/recipes_db.js';
import { forceManyBody, forceSimulation, forceY } from 'd3-force';
import { edgeDirectionForce } from './collide.js';
import { useNodesState } from '@xyflow/react';
import { useEdgesState } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react';
import { useNodesInitialized } from '@xyflow/react';
import FactoryStats from './FactoryStats.jsx';
import machines from '../data/machines_db.js';
import resources from '../data/resources_db.js';
import SecondaryResource from '../NodeTypes/SecondaryResource.jsx';
import MergeNode from '../NodeTypes/MergeNode.jsx';

const rfStyle = {
    backgroundColor: '#282330',
};

const simulation = forceSimulation()
    .alphaTarget(0.05)
    .stop();

const useLayoutedElements = () => {
    const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
    const initialized = useNodesInitialized();

    const draggingNodeRef = useRef(null);
    const dragEvents = useMemo(
        () => ({
            start: (_event, node) => (draggingNodeRef.current = node),
            drag: (_event, node) => (draggingNodeRef.current = node),
            stop: () => (draggingNodeRef.current = null),
        }),
        [],
    );

    const [updateId, setUpdateId] = useState(0);
    const triggerUpdate = () => {
        setUpdateId(updateId + 1);
    }

    return useMemo(() => {
        let nodes = getNodes().map((node) => ({
            ...node,
            x: node.position.x,
            y: node.position.y,
        }));
        let edges = getEdges().map((edge) => edge);

        let running = false;

        if (!initialized || nodes.length === 0) return [false, { toggle: () => { }, isRunning: () => false }, dragEvents];


        simulation.nodes(nodes)
            .force('charge', forceManyBody().strength(-500))
            .force('Y', forceY(0).strength(0.007))
            .force('edges', edgeDirectionForce().strength(0.8).edges(edges))
            ;

        const tick = () => {
            getNodes().forEach((node, i) => {
                const dragging = draggingNodeRef.current?.id === node.id;

                if (dragging) {
                    nodes[i].fx = draggingNodeRef.current.position.x;
                    nodes[i].fy = draggingNodeRef.current.position.y;
                } else {
                    delete nodes[i].fx;
                    delete nodes[i].fy;
                }
            });

            simulation.tick();
            setNodes(
                nodes.map((node) => ({
                    ...node,
                    position: { x: node.fx ?? node.x, y: node.fy ?? node.y },
                })),
            );

            window.requestAnimationFrame(() => {
                fitView();

                if (running) tick();
            });
        };

        const toggle = () => {
            if (!running) {
                getNodes().forEach((node, index) => {
                    let simNode = nodes[index];
                    Object.assign(simNode, node);
                    simNode.x = node.position.x;
                    simNode.y = node.position.y;
                });
            }
            running = !running;
            running && window.requestAnimationFrame(tick);

            if (!running) {
                triggerUpdate();
            }
        };

        const isRunning = () => running;

        return [true, { toggle, isRunning }, dragEvents];
    }, [initialized, dragEvents, getNodes, getEdges, setNodes, fitView, updateId]);
};

const nodeTypes = { TargetResource, SourceResource, ResourceRecipe, SecondaryResource, MergeNode };

let shouldUpdateURI = false;

function handleSplitRecipe({ recipe, rcname, rate, multiplier, new_nodes, new_edges, nodes, secondaryOutputs, sourceResources, x_recipe, y_recipe, selectedMachines, setSelectedMachines, machines, resources, sources }) {
    let split_nodes = [];
    let prev_recipe_id = null;

    let producers_of_target = 0;
    for (let sub of recipe._split) {
        if (sub.name === rcname) producers_of_target++;
        if (sub.extra_outputs) {
            for (let eo of sub.extra_outputs) {
                if (eo.name === rcname) producers_of_target++;
            }
        }
    }
    let needs_merge = producers_of_target > 1;

    for (let si = 0; si < recipe._split.length; si++) {
        let sub = recipe._split[si];
        let sub_id = 'recipe-' + rcname + '-split-' + si;
        let prev_node = nodes.find(v => v.id == sub_id);

        let sub_multiplier = multiplier;
        let sub_rate = sub.output * sub_multiplier;

        // Wire sub-recipes together
        if (si > 0) {
            let prev_sub = recipe._split[si - 1];
            for (let ing_name in sub.ingredients) {
                let prev_handle;
                if (prev_sub.name === ing_name) {
                    prev_handle = 'out-' + ing_name;
                } else if (prev_sub.extra_outputs && prev_sub.extra_outputs.some(eo => eo.name === ing_name)) {
                    prev_handle = 'secondary-out-' + ing_name;
                }
                if (prev_handle) {
                    new_edges.push({
                        id: sub_id + '-from-' + prev_recipe_id + '-' + ing_name,
                        source: prev_recipe_id,
                        sourceHandle: prev_handle,
                        target: sub_id,
                        targetHandle: 'in-' + sub.name + '-' + ing_name,
                    });
                }
            }
        }

        // External inputs
        for (let ing in sub.ingredients) {
            if (si > 0) {
                let prev_sub = recipe._split[si - 1];
                let prev_has_output = prev_sub.name === ing;
                if (!prev_has_output && prev_sub.extra_outputs) {
                    prev_has_output = prev_sub.extra_outputs.some(eo => eo.name === ing);
                }
                if (prev_has_output) continue;
            }

            if (sources.includes(ing)) {
                let input_rate = sub_multiplier * sub.ingredients[ing];
                if (sourceResources[ing]) {
                    sourceResources[ing] += input_rate;
                } else {
                    sourceResources[ing] = input_rate;
                }
                let source_id = resources[ing] ? 'recipe-' + ing : 'source-' + ing;
                let source_handle = resources[ing] ? 'out-' + ing : undefined;
                new_edges.push({
                    id: 'source-' + ing + '-split-' + si + '-' + rcname + '-' + ing,
                    source: source_id,
                    sourceHandle: source_handle,
                    target: sub_id,
                    targetHandle: 'in-' + sub.name + '-' + ing,
                });
            } else {
                new_edges.push({
                    id: 'out-' + ing + '-split-' + si + '-' + rcname + '-' + ing,
                    source: 'recipe-' + ing,
                    sourceHandle: 'out-' + ing,
                    target: sub_id,
                    targetHandle: 'in-' + sub.name + '-' + ing,
                });
            }
        }

        // Build rcinfo for sub-node
        let sub_machine = machines[sub.machine];
        let sub_crafting_speed = sub_machine ? sub_machine.crafting_speed : 1;
        let sub_base_time = sub.crafting_time;
        let sub_machines_cnt = sub_multiplier * sub_base_time / sub_crafting_speed;
        let sub_machines_cnt_ceil = Math.ceil(sub_machines_cnt);
        let sub_energy = sub_machines_cnt_ceil * (sub_machine ? sub_machine.energy_usage : 0);

        split_nodes.push({
            id: sub_id,
            position: {
                x: prev_node ? prev_node.position.x : x_recipe,
                y: prev_node ? prev_node.position.y : y_recipe.value,
            },
            type: 'ResourceRecipe',
            data: {
                recipe: sub,
                name: sub.name,
                rcinfo: {
                    rate: sub_rate,
                    recipe: sub,
                    machines_cnt: sub_machines_cnt_ceil,
                    machines_cnt_exact: sub_machines_cnt,
                    machine_name: sub.machine,
                    crafting_speed: sub_crafting_speed,
                    energy_usage: sub_energy,
                },
                set_machine: (machine_name) => {
                    let modified = {};
                    Object.assign(modified, selectedMachines);
                    modified[rcname] = machine_name;
                    shouldUpdateURI = true;
                    setSelectedMachines(modified);
                },
            }
        });
        if (!prev_node) {
            y_recipe.value += 200;
        }

        prev_recipe_id = sub_id;
    }

    // Merge node if multiple sub-recipes produce the target
    let merge_id = 'recipe-' + rcname;
    if (needs_merge) {
        let prev_node = nodes.find(v => v.id == merge_id);
        new_nodes.push({
            id: merge_id,
            position: {
                x: prev_node ? prev_node.position.x : x_recipe,
                y: prev_node ? prev_node.position.y : y_recipe.value,
            },
            type: 'MergeNode',
            data: { rcname, rate }
        });
        if (!prev_node) {
            y_recipe.value += 200;
        }
    }

    // Secondary outputs + target connections
    for (let si = 0; si < recipe._split.length; si++) {
        let sub = recipe._split[si];
        let sub_id = 'recipe-' + rcname + '-split-' + si;

        // Primary output as secondary (if not rcname and not consumed later)
        if (sub.name !== rcname) {
            let consumed = false;
            for (let sj = si + 1; sj < recipe._split.length; sj++) {
                if (recipe._split[sj].ingredients[sub.name]) { consumed = true; break; }
            }
            if (!consumed) {
                if (!secondaryOutputs[sub.name]) secondaryOutputs[sub.name] = 0;
                secondaryOutputs[sub.name] += sub.output * multiplier;
                new_edges.push({
                    id: 'out-' + rcname + '-split-' + si + '-secondary-' + sub.name,
                    source: sub_id,
                    sourceHandle: 'out-' + sub.name,
                    target: 'secondary-' + sub.name,
                });
            }
        }

        // Extra outputs as secondary
        if (sub.extra_outputs) {
            for (let eo of sub.extra_outputs) {
                if (eo.name === rcname) continue;
                let consumed = false;
                for (let sj = si + 1; sj < recipe._split.length; sj++) {
                    if (recipe._split[sj].ingredients[eo.name]) { consumed = true; break; }
                }
                if (consumed) continue;
                if (!secondaryOutputs[eo.name]) secondaryOutputs[eo.name] = 0;
                secondaryOutputs[eo.name] += eo.amount * multiplier;
                new_edges.push({
                    id: 'secondary-out-' + rcname + '-split-' + si + '-' + eo.name,
                    source: sub_id,
                    sourceHandle: 'secondary-out-' + eo.name,
                    target: 'secondary-' + eo.name,
                });
            }
        }

        // Connect target outputs to merge node or target
        let target_id = needs_merge ? merge_id : 'target-' + rcname;
        let target_handle = needs_merge ? 'in-merge-' + rcname : undefined;

        if (sub.name === rcname) {
            new_edges.push({
                id: 'out-' + rcname + '-split-' + si + '-to-target',
                source: sub_id,
                sourceHandle: 'out-' + rcname,
                target: target_id,
                targetHandle: target_handle,
            });
        }
        if (sub.extra_outputs) {
            for (let eo of sub.extra_outputs) {
                if (eo.name === rcname) {
                    new_edges.push({
                        id: 'secondary-out-' + rcname + '-split-' + si + '-to-target',
                        source: sub_id,
                        sourceHandle: 'secondary-out-' + eo.name,
                        target: target_id,
                        targetHandle: target_handle,
                    });
                }
            }
        }
    }

    new_nodes.push(...split_nodes);
}

function PageFactory() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [initialized, { toggle, isRunning }, dragEvents] =
        useLayoutedElements();

    const [targetResources, setTargetResources] = useState({});

    // key: rcname, value: recipeIndex
    const [selectedRecipes, setSelectedRecipes] = useState({});

    // key: rcname, value: machine_name
    const [selectedMachines, setSelectedMachines] = useState({});
    const [stats, setStats] = useState({ secondaryOutputs: {} });
    const [machineDefaults, setMachineDefaults] = useState({
        assembling: 'assembling-machine-1',
        furnace: 'stone-furnace',
        mining: 'electric-mining-drill',
    });
    const [applyAll, setApplyAll] = useState(true);
    const [researchTime, setResearchTime] = useState(30);

    // When applyAll is on and defaults change, clear per-node overrides
    useEffect(() => {
        if (applyAll) {
            setSelectedMachines({});
        }
    }, [machineDefaults, applyAll]);

    // When applyAll is toggled on, clear per-node overrides
    useEffect(() => {
        if (applyAll) {
            setSelectedMachines({});
        }
    }, [applyAll]);


    useEffect(() => {
        let res = generateAltRecipes(targetResources, selectedRecipes);
        if (res == "recursion_detected") {
            alert("Recursion detected!");
            return
        }

        setSelectedRecipes(res)
    }, [targetResources])

    useEffect(() => {
        let res = calculate(targetResources, selectedRecipes, selectedMachines, machineDefaults, researchTime);
        if (res == "recursion_detected") {
            alert("Recursion detected!");
            return;
        }

        let total_consumption = 0;
        let new_nodes = [];
        let new_edges = [];

        let y_start = nodes.reduce((prev, cur) => Math.max(prev, cur.position.y), 0) + 500;
        let x_source = -800;
        let y_source = y_start;
        let x_recipe = 0;
        let yRef = { value: y_start };
        let x_target = 800;
        let y_target = y_start;

        let sourceResources = {};
        let secondaryOutputs = {};


        for (let [rcname, rcinfo] of Object.entries(res)) {
            total_consumption += rcinfo.energy_usage;

            let set_machine = (machine_name) => {
                let modified = {};
                Object.assign(modified, selectedMachines);
                modified[rcname] = machine_name;
                shouldUpdateURI = true;
                setSelectedMachines(modified);
            };

            if (rcinfo.is_miner) {
                let prev_node = nodes.find(v => v.id == 'recipe-' + rcname);
                new_nodes.push({
                    id: 'recipe-' + rcname,
                    position: {
                        x: prev_node ? prev_node.position.x : x_recipe,
                        y: prev_node ? prev_node.position.y : yRef.value,
                    },
                    type: 'ResourceRecipe',
                    data: {
                        recipe: null,
                        name: rcname,
                        rcinfo,
                        set_machine,
                    }
                });
                if (!prev_node) {
                    yRef.value += 200;
                }
                continue;
            }

            let rate = rcinfo.rate;
            let recipe = rcinfo.recipe;
            let recipe_output;
            if (rcname === recipe.name) {
                recipe_output = recipe.output;
            } else {
                recipe_output = recipe.extra_outputs.find(eo => eo.name === rcname).amount;
            }
            let multiplier = rate / recipe_output;

            // Handle _split recipes: generate multiple nodes wired internally
            if (recipe._split) {
                handleSplitRecipe({
                    recipe, rcname, rate, multiplier,
                    new_nodes, new_edges, nodes,
                    secondaryOutputs, sourceResources,
                    x_recipe, y_recipe: yRef,
                    selectedMachines, setSelectedMachines,
                    machines, resources, sources,
                });
                continue;
            }

            // secondary output check
            // When viewing through an extra output, the primary output is also a secondary
            if (rcname !== recipe.name) {
                if (!secondaryOutputs[recipe.name]) {
                    secondaryOutputs[recipe.name] = 0;
                }
                secondaryOutputs[recipe.name] += recipe.output * multiplier;

                new_edges.push({
                    id: 'secondary-out-' + rcname + 'secondary-' + recipe.name,
                    source: 'recipe-' + rcname,
                    sourceHandle: 'secondary-out-' + recipe.name,
                    target: 'secondary-' + recipe.name,
                })
            }
            if (recipe.extra_outputs) {
                for (let eo of recipe.extra_outputs) {
                    if (eo.name === rcname) continue;
                    if (!secondaryOutputs[eo.name]) {
                        secondaryOutputs[eo.name] = 0;
                    }
                    secondaryOutputs[eo.name] += eo.amount * multiplier;

                    new_edges.push({
                        id: 'secondary-out-' + rcname + 'secondary-' + eo.name,
                        source: 'recipe-' + rcname,
                        sourceHandle: 'secondary-out-' + eo.name,
                        target: 'secondary-' + eo.name,
                    })
                }
            }

            for (let ing in recipe.ingredients) {
                if (sources.includes(ing)) {
                    let input_rate = multiplier * recipe.ingredients[ing];
                    if (sourceResources[ing]) {
                        sourceResources[ing] += input_rate;
                    }
                    else {
                        sourceResources[ing] = input_rate;
                    }

                    // If this source has a miner, connect to the miner node; otherwise plain source
                    let source_id = resources[ing] ? 'recipe-' + ing : 'source-' + ing;
                    let source_handle = resources[ing] ? 'out-' + ing : undefined;
                    new_edges.push({
                        id: 'source-' + ing + 'in-' + rcname + '-' + ing,
                        source: source_id,
                        sourceHandle: source_handle,
                        target: 'recipe-' + rcname,
                        targetHandle: 'in-' + rcname + '-' + ing
                    })
                }
                else {
                    new_edges.push({
                        id: 'out-' + ing + 'in-' + rcname + '-' + ing,

                        source: 'recipe-' + ing,
                        sourceHandle: 'out-' + ing,

                        target: 'recipe-' + rcname,
                        targetHandle: 'in-' + rcname + '-' + ing
                    })
                }
            }

            let prev_node = nodes.find(v => v.id == 'recipe-' + rcname);
            new_nodes.push({
                id: 'recipe-' + rcname,
                position: {
                    x: prev_node ? prev_node.position.x : x_recipe,
                    y: prev_node ? prev_node.position.y : yRef.value,
                },
                type: 'ResourceRecipe',
                data: {
                    recipe,
                    name: rcname,
                    rcinfo,
                    set_machine,
                }
            });
            if (!prev_node) {
                yRef.value += 200;
            }
        }

        for (let rcname in sourceResources) {
            // Skip sources that have miner nodes (they're already created as ResourceRecipe)
            if (resources[rcname]) continue;

            let prev_node = nodes.find(v => v.id == 'source-' + rcname);
            new_nodes.push({
                id: 'source-' + rcname,
                position: {
                    x: prev_node ? prev_node.position.x : x_source,
                    y: prev_node ? prev_node.position.y : y_source,
                },
                type: 'SourceResource',
                data: {
                    rcname,
                    rate: sourceResources[rcname]
                }
            });
            if (!prev_node) {
                y_source += 200;
            }
        }

        for (let rcname in targetResources) {
            let prev_node = nodes.find(v => v.id == 'target-' + rcname);
            new_nodes.push({
                id: 'target-' + rcname,
                position: {
                    x: prev_node ? prev_node.position.x : x_target,
                    y: prev_node ? prev_node.position.y : y_target,
                },
                type: 'TargetResource',
                data: {
                    rcname,
                    rate: targetResources[rcname]
                }
            });
            new_edges.push({
                id: 'out-' + rcname + 'target-' + rcname,
                source: 'recipe-' + rcname,
                sourceHandle: 'out-' + rcname,
                target: 'target-' + rcname,
            })
            if (!prev_node) {
                y_target += 200;
            }
        }

        // add secondary outputs nodes
        for (let [rcname, rate] of Object.entries(secondaryOutputs)) {
            let prev_node = nodes.find(v => v.id == 'secondary-' + rcname);
            new_nodes.push({
                id: 'secondary-' + rcname,
                position: {
                    x: prev_node ? prev_node.position.x : x_target,
                    y: prev_node ? prev_node.position.y : y_target,
                },
                type: 'SecondaryResource',
                data: {
                    rcname,
                    rate
                }
            });
            if (!prev_node) {
                y_target += 200;
            }
        }

        let params = encodeURIComponent(JSON.stringify({
            targetResources,
            selectedRecipes,
            selectedMachines,
            machineDefaults,
            applyAll,
            researchTime,
        }));
        if (shouldUpdateURI) {
            history.pushState({}, '', '/factorio-graphs/?state=' + params);
            shouldUpdateURI = false
        }

        setEdges(new_edges);
        setNodes(new_nodes);
        setStats({ energy: total_consumption, secondaryOutputs });
    }, [selectedRecipes, selectedMachines, machineDefaults, researchTime])


    const restoreStateFromURL = () => {
        if (window.location.search.startsWith("?state=")) {
            let state = JSON.parse(decodeURIComponent(window.location.search.slice(7)));

            console.dir(state);

            setSelectedRecipes(state.selectedRecipes);
            setTargetResources(state.targetResources);
            setSelectedMachines(state.selectedMachines || {});
            if (state.machineDefaults) {
                setMachineDefaults(state.machineDefaults);
            }
            if (state.applyAll !== undefined) {
                setApplyAll(state.applyAll);
            }
            if (state.researchTime) {
                setResearchTime(state.researchTime);
            }
        }
    }
    useEffect(() => {
        restoreStateFromURL();
    }, [])
    useEffect(() => {
        window.addEventListener('popstate', (event) => {
            restoreStateFromURL();
        });
    }, [])

    const onSelectRecipe = useCallback((recipe) => {
        selectedRecipes[recipe.name] = recipe.recipe_num;

        let res = generateAltRecipes(targetResources, selectedRecipes);
        if (res == "recursion_detected") {
            alert("Recursion detected!");
            return
        }

        shouldUpdateURI = true;
        setSelectedRecipes(res);
    }, [targetResources, selectedRecipes]);

    const onSelectTargetResources = useCallback((r) => {
        setTargetResources(r);
        shouldUpdateURI = true;
    }, [setTargetResources])
    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}

                fitView
                style={rfStyle}
                maxZoom={5}
                minZoom={0.1}
                nodesConnectable={false}
                elementsSelectable={false}

                onNodeDragStart={dragEvents.start}
                onNodeDrag={dragEvents.drag}
                onNodeDragStop={dragEvents.stop}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
            >
                <Background />
                <Controls />
            </ReactFlow>
            <TargetSelector targetResources={targetResources} setTargetResources={onSelectTargetResources} />
            <SelectedRecipes selectedRecipes={selectedRecipes} selectRecipe={onSelectRecipe} />
            <div className={isRunning() ? "unmangle active" : "unmangle"} onClick={toggle}>
                Unmangle
            </div>
            <FactoryStats
                stats={stats}
                defaults={machineDefaults}
                setDefaults={setMachineDefaults}
                applyAll={applyAll}
                setApplyAll={setApplyAll}
                researchTime={researchTime}
                setResearchTime={setResearchTime}
            />
        </>
    );
}

export default PageFactory;
