const sources = [
    "coal",
    "copper-ore",
    "crude-oil",
    "depleted-uranium-fuel-cell",
    "iron-ore",
    "raw-fish",
    "steam",
    "stone",
    "uranium-ore",
    "water",
    "wood"
];

const recipes = [
    {
        "name": "speed-module",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "speed-module-2",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "speed-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "speed-module-3",
        "output": 1,
        "crafting_time": 60,
        "ingredients": {
            "speed-module-2": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "productivity-module",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "productivity-module-2",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "productivity-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "productivity-module-3",
        "output": 1,
        "crafting_time": 60,
        "ingredients": {
            "productivity-module-2": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "efficiency-module",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "efficiency-module-2",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "efficiency-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "efficiency-module-3",
        "output": 1,
        "crafting_time": 60,
        "ingredients": {
            "efficiency-module-2": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "bulk-inserter",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-gear-wheel": 15,
            "electronic-circuit": 15,
            "advanced-circuit": 1,
            "fast-inserter": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "petroleum-gas",
        "output": 45,
        "crafting_time": 5,
        "ingredients": {
            "crude-oil": 100
        },
        "machine": "oil-refinery",
        "base": true
    },
    {
        "name": "petroleum-gas",
        "output": 85,
        "crafting_time": 5,
        "ingredients": {
            "crude-oil": 100,
            "water": 95
        },
        "machine": "oil-refinery",
        "extra_outputs": [
            { "name": "heavy-oil", "amount": 25 }
        ],
        "_split": [
            {
                "name": "heavy-oil",
                "output": 25,
                "crafting_time": 5,
                "ingredients": { "crude-oil": 100, "water": 50 },
                "machine": "oil-refinery",
                "extra_outputs": [
                    { "name": "light-oil", "amount": 45 },
                    { "name": "petroleum-gas", "amount": 55 }
                ]
            },
            {
                "name": "petroleum-gas",
                "output": 30,
                "crafting_time": 3,
                "ingredients": { "light-oil": 45, "water": 45 },
                "machine": "chemical-plant"
            }
        ]
    },
    {
        "name": "heavy-oil",
        "output": 25,
        "crafting_time": 5,
        "ingredients": {
            "water": 50,
            "crude-oil": 100
        },
        "machine": "oil-refinery",
        "extra_outputs": [
            { "name": "light-oil", "amount": 45 },
            { "name": "petroleum-gas", "amount": 55 }
        ],
        "base": true
    },
    {
        "name": "heavy-oil",
        "output": 90,
        "crafting_time": 5,
        "ingredients": {
            "coal": 10,
            "heavy-oil": 25,
            "steam": 50
        },
        "machine": "oil-refinery",
        "extra_outputs": [
            { "name": "light-oil", "amount": 20 }
        ]
    },
    {
        "name": "light-oil",
        "output": 30,
        "crafting_time": 2,
        "ingredients": {
            "water": 30,
            "heavy-oil": 40
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "petroleum-gas",
        "output": 20,
        "crafting_time": 2,
        "ingredients": {
            "water": 30,
            "light-oil": 30
        },
        "machine": "chemical-plant"
    },
    {
        "name": "sulfuric-acid",
        "output": 50,
        "crafting_time": 1,
        "ingredients": {
            "sulfur": 5,
            "iron-plate": 1,
            "water": 100
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "plastic-bar",
        "output": 2,
        "crafting_time": 1,
        "ingredients": {
            "petroleum-gas": 20,
            "coal": 1
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "solid-fuel",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "light-oil": 10
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "solid-fuel",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "petroleum-gas": 20
        },
        "machine": "chemical-plant"
    },
    {
        "name": "solid-fuel",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "heavy-oil": 20
        },
        "machine": "chemical-plant"
    },
    {
        "name": "sulfur",
        "output": 2,
        "crafting_time": 1,
        "ingredients": {
            "water": 30,
            "petroleum-gas": 30
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "lubricant",
        "output": 10,
        "crafting_time": 1,
        "ingredients": {
            "heavy-oil": 10
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "barrel",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "steel-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "night-vision-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "belt-immunity-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "energy-shield-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "energy-shield-mk2-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "energy-shield-equipment": 10,
            "processing-unit": 5,
            "low-density-structure": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "battery-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "battery": 5,
            "steel-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "battery-mk2-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "battery-equipment": 10,
            "processing-unit": 15,
            "low-density-structure": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "solar-panel-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "solar-panel": 1,
            "advanced-circuit": 2,
            "steel-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fission-reactor-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "processing-unit": 200,
            "low-density-structure": 50,
            "uranium-fuel-cell": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "personal-laser-defense-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "processing-unit": 20,
            "low-density-structure": 5,
            "laser-turret": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "discharge-defense-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "processing-unit": 5,
            "steel-plate": 20,
            "laser-turret": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "exoskeleton-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "processing-unit": 10,
            "electric-engine-unit": 30,
            "steel-plate": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "personal-roboport-equipment",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "advanced-circuit": 10,
            "iron-gear-wheel": 40,
            "steel-plate": 20,
            "battery": 45
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "personal-roboport-mk2-equipment",
        "output": 1,
        "crafting_time": 20,
        "ingredients": {
            "personal-roboport-equipment": 5,
            "processing-unit": 100,
            "low-density-structure": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "laser-turret",
        "output": 1,
        "crafting_time": 20,
        "ingredients": {
            "steel-plate": 20,
            "electronic-circuit": 20,
            "battery": 12
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "flamethrower-turret",
        "output": 1,
        "crafting_time": 20,
        "ingredients": {
            "steel-plate": 30,
            "iron-gear-wheel": 15,
            "pipe": 10,
            "engine-unit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "artillery-turret",
        "output": 1,
        "crafting_time": 40,
        "ingredients": {
            "steel-plate": 60,
            "concrete": 60,
            "iron-gear-wheel": 40,
            "advanced-circuit": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "gun-turret",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "iron-gear-wheel": 10,
            "copper-plate": 10,
            "iron-plate": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "wooden-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "wood": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "display-panel",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1,
            "electronic-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "iron-stick",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "stone-furnace",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "stone": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "boiler",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "stone-furnace": 1,
            "pipe": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "steam-engine",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-gear-wheel": 8,
            "pipe": 5,
            "iron-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "iron-gear-wheel",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "electronic-circuit",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1,
            "copper-cable": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "transport-belt",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1,
            "iron-gear-wheel": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "electric-mining-drill",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "iron-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "burner-mining-drill",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "iron-gear-wheel": 3,
            "stone-furnace": 1,
            "iron-plate": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "inserter",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 1,
            "iron-gear-wheel": 1,
            "iron-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fast-inserter",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 2,
            "iron-plate": 2,
            "inserter": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "long-handed-inserter",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-gear-wheel": 1,
            "iron-plate": 1,
            "inserter": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "burner-inserter",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1,
            "iron-gear-wheel": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "pipe",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "offshore-pump",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "pipe": 3,
            "iron-gear-wheel": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "copper-cable",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "copper-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "small-electric-pole",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "wood": 1,
            "copper-cable": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "submachine-gun",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "iron-gear-wheel": 10,
            "copper-plate": 5,
            "iron-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "firearm-magazine",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "iron-plate": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "light-armor",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "iron-plate": 40
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "radar",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 5,
            "iron-gear-wheel": 5,
            "iron-plate": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "small-lamp",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 1,
            "copper-cable": 3,
            "iron-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "pipe-to-ground",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "pipe": 10,
            "iron-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "assembling-machine-1",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "iron-plate": 9
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "repair-pack",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 2,
            "iron-gear-wheel": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "automation-science-pack",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "copper-plate": 1,
            "iron-gear-wheel": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "logistic-science-pack",
        "output": 1,
        "crafting_time": 6,
        "ingredients": {
            "inserter": 1,
            "transport-belt": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "lab",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "electronic-circuit": 10,
            "iron-gear-wheel": 10,
            "transport-belt": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "stone-wall",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "stone-brick": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "assembling-machine-2",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-plate": 2,
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "assembling-machine-1": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "splitter",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "electronic-circuit": 5,
            "iron-plate": 5,
            "transport-belt": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "underground-belt",
        "output": 2,
        "crafting_time": 1,
        "ingredients": {
            "iron-plate": 10,
            "transport-belt": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "car",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "engine-unit": 8,
            "iron-plate": 20,
            "steel-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "engine-unit",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "steel-plate": 1,
            "iron-gear-wheel": 1,
            "pipe": 2
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "iron-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-plate": 8
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "big-electric-pole",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-stick": 8,
            "steel-plate": 5,
            "copper-cable": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "medium-electric-pole",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-stick": 4,
            "steel-plate": 2,
            "copper-cable": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "shotgun",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "iron-plate": 15,
            "iron-gear-wheel": 5,
            "copper-plate": 10,
            "wood": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "shotgun-shell",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "copper-plate": 2,
            "iron-plate": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "piercing-rounds-magazine",
        "output": 2,
        "crafting_time": 6,
        "ingredients": {
            "firearm-magazine": 2,
            "steel-plate": 1,
            "copper-plate": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "grenade",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "iron-plate": 5,
            "coal": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "steel-furnace",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "steel-plate": 6,
            "stone-brick": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "gate",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "stone-wall": 1,
            "steel-plate": 2,
            "electronic-circuit": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "heavy-armor",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "copper-plate": 100,
            "steel-plate": 50
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "steel-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-plate": 8
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fast-underground-belt",
        "output": 2,
        "crafting_time": 2,
        "ingredients": {
            "iron-gear-wheel": 40,
            "underground-belt": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fast-splitter",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "splitter": 1,
            "iron-gear-wheel": 10,
            "electronic-circuit": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "concrete",
        "output": 10,
        "crafting_time": 10,
        "ingredients": {
            "stone-brick": 5,
            "iron-ore": 1,
            "water": 100
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "hazard-concrete",
        "output": 10,
        "crafting_time": 0.25,
        "ingredients": {
            "concrete": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "refined-concrete",
        "output": 10,
        "crafting_time": 15,
        "ingredients": {
            "concrete": 20,
            "iron-stick": 8,
            "steel-plate": 1,
            "water": 100
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "refined-hazard-concrete",
        "output": 10,
        "crafting_time": 0.25,
        "ingredients": {
            "refined-concrete": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "landfill",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "stone": 50
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fast-transport-belt",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-gear-wheel": 5,
            "transport-belt": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "solar-panel",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "steel-plate": 5,
            "electronic-circuit": 15,
            "copper-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rail",
        "output": 2,
        "crafting_time": 0.5,
        "ingredients": {
            "stone": 1,
            "iron-stick": 1,
            "steel-plate": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "locomotive",
        "output": 1,
        "crafting_time": 4,
        "ingredients": {
            "engine-unit": 20,
            "electronic-circuit": 10,
            "steel-plate": 30
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "cargo-wagon",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "iron-gear-wheel": 10,
            "iron-plate": 20,
            "steel-plate": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rail-signal",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 1,
            "iron-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rail-chain-signal",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 1,
            "iron-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "train-stop",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "electronic-circuit": 5,
            "iron-plate": 6,
            "iron-stick": 6,
            "steel-plate": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "copper-plate",
        "output": 1,
        "crafting_time": 3.2,
        "ingredients": {
            "copper-ore": 1
        },
        "machine": "stone-furnace",
        "base": true
    },
    {
        "name": "iron-plate",
        "output": 1,
        "crafting_time": 3.2,
        "ingredients": {
            "iron-ore": 1
        },
        "machine": "stone-furnace",
        "base": true
    },
    {
        "name": "stone-brick",
        "output": 1,
        "crafting_time": 3.2,
        "ingredients": {
            "stone": 2
        },
        "machine": "stone-furnace",
        "base": true
    },
    {
        "name": "steel-plate",
        "output": 1,
        "crafting_time": 16,
        "ingredients": {
            "iron-plate": 5
        },
        "machine": "stone-furnace",
        "base": true
    },
    {
        "name": "arithmetic-combinator",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "decider-combinator",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "constant-combinator",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "selector-combinator",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "advanced-circuit": 2,
            "decider-combinator": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "power-switch",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "iron-plate": 5,
            "copper-cable": 5,
            "electronic-circuit": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "programmable-speaker",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "iron-plate": 3,
            "iron-stick": 4,
            "copper-cable": 5,
            "electronic-circuit": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "poison-capsule",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "steel-plate": 3,
            "electronic-circuit": 3,
            "coal": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "slowdown-capsule",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "steel-plate": 2,
            "electronic-circuit": 2,
            "coal": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "cluster-grenade",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "grenade": 7,
            "explosives": 5,
            "steel-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "defender-capsule",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "piercing-rounds-magazine": 3,
            "electronic-circuit": 3,
            "iron-gear-wheel": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "distractor-capsule",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "defender-capsule": 4,
            "advanced-circuit": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "destroyer-capsule",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "distractor-capsule": 4,
            "speed-module": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "cliff-explosives",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "explosives": 10,
            "grenade": 1,
            "barrel": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "uranium-rounds-magazine",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "piercing-rounds-magazine": 1,
            "uranium-238": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rocket",
        "output": 1,
        "crafting_time": 4,
        "ingredients": {
            "explosives": 1,
            "iron-plate": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "explosive-rocket",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "rocket": 1,
            "explosives": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "atomic-bomb",
        "output": 1,
        "crafting_time": 50,
        "ingredients": {
            "processing-unit": 10,
            "explosives": 10,
            "uranium-235": 30
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "piercing-shotgun-shell",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "shotgun-shell": 2,
            "copper-plate": 5,
            "steel-plate": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "cannon-shell",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "steel-plate": 2,
            "plastic-bar": 2,
            "explosives": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "explosive-cannon-shell",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "steel-plate": 2,
            "plastic-bar": 2,
            "explosives": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "uranium-cannon-shell",
        "output": 1,
        "crafting_time": 12,
        "ingredients": {
            "cannon-shell": 1,
            "uranium-238": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "explosive-uranium-cannon-shell",
        "output": 1,
        "crafting_time": 12,
        "ingredients": {
            "explosive-cannon-shell": 1,
            "uranium-238": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "artillery-shell",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "explosive-cannon-shell": 4,
            "radar": 1,
            "explosives": 8
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "flamethrower-ammo",
        "output": 1,
        "crafting_time": 6,
        "ingredients": {
            "steel-plate": 5,
            "crude-oil": 100
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "express-transport-belt",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "iron-gear-wheel": 10,
            "fast-transport-belt": 1,
            "lubricant": 20
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "assembling-machine-3",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "speed-module": 4,
            "assembling-machine-2": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "tank",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "engine-unit": 32,
            "steel-plate": 50,
            "iron-gear-wheel": 15,
            "advanced-circuit": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "spidertron",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "exoskeleton-equipment": 4,
            "fission-reactor-equipment": 2,
            "rocket-launcher": 4,
            "processing-unit": 16,
            "low-density-structure": 150,
            "radar": 2,
            "efficiency-module-3": 2,
            "raw-fish": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "fluid-wagon",
        "output": 1,
        "crafting_time": 1.5,
        "ingredients": {
            "iron-gear-wheel": 10,
            "steel-plate": 16,
            "pipe": 8,
            "storage-tank": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "artillery-wagon",
        "output": 1,
        "crafting_time": 4,
        "ingredients": {
            "engine-unit": 64,
            "iron-gear-wheel": 10,
            "steel-plate": 40,
            "pipe": 16,
            "advanced-circuit": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "modular-armor",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "advanced-circuit": 30,
            "steel-plate": 50
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "power-armor",
        "output": 1,
        "crafting_time": 20,
        "ingredients": {
            "processing-unit": 40,
            "electric-engine-unit": 20,
            "steel-plate": 40
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "power-armor-mk2",
        "output": 1,
        "crafting_time": 25,
        "ingredients": {
            "efficiency-module-2": 25,
            "speed-module-2": 25,
            "processing-unit": 60,
            "electric-engine-unit": 40,
            "low-density-structure": 30
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "flamethrower",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "land-mine",
        "output": 4,
        "crafting_time": 5,
        "ingredients": {
            "steel-plate": 1,
            "explosives": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rocket-launcher",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "iron-plate": 5,
            "iron-gear-wheel": 5,
            "electronic-circuit": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "combat-shotgun",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "steel-plate": 15,
            "iron-gear-wheel": 5,
            "copper-plate": 10,
            "wood": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "chemical-science-pack",
        "output": 2,
        "crafting_time": 24,
        "ingredients": {
            "engine-unit": 2,
            "advanced-circuit": 3,
            "sulfur": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "military-science-pack",
        "output": 2,
        "crafting_time": 10,
        "ingredients": {
            "piercing-rounds-magazine": 1,
            "grenade": 1,
            "stone-wall": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "production-science-pack",
        "output": 3,
        "crafting_time": 21,
        "ingredients": {
            "electric-furnace": 1,
            "productivity-module": 1,
            "rail": 30
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "utility-science-pack",
        "output": 3,
        "crafting_time": 21,
        "ingredients": {
            "low-density-structure": 3,
            "processing-unit": 2,
            "flying-robot-frame": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "express-underground-belt",
        "output": 2,
        "crafting_time": 2,
        "ingredients": {
            "iron-gear-wheel": 80,
            "fast-underground-belt": 2,
            "lubricant": 40
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "express-splitter",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "fast-splitter": 1,
            "iron-gear-wheel": 10,
            "advanced-circuit": 10,
            "lubricant": 80
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "advanced-circuit",
        "output": 1,
        "crafting_time": 6,
        "ingredients": {
            "electronic-circuit": 2,
            "plastic-bar": 2,
            "copper-cable": 4
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "processing-unit",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "electronic-circuit": 20,
            "advanced-circuit": 2,
            "sulfuric-acid": 5
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "logistic-robot",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "flying-robot-frame": 1,
            "advanced-circuit": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "construction-robot",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "flying-robot-frame": 1,
            "electronic-circuit": 2
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "passive-provider-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "active-provider-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "storage-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "buffer-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "requester-chest",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rocket-silo",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "steel-plate": 1000,
            "concrete": 1000,
            "pipe": 100,
            "processing-unit": 200,
            "electric-engine-unit": 200
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "cargo-landing-pad",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "concrete": 200,
            "steel-plate": 25,
            "processing-unit": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "roboport",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "steel-plate": 45,
            "iron-gear-wheel": 45,
            "advanced-circuit": 45
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "substation",
        "output": 1,
        "crafting_time": 0.5,
        "ingredients": {
            "steel-plate": 10,
            "advanced-circuit": 5,
            "copper-cable": 6
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "accumulator",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "iron-plate": 2,
            "battery": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "electric-furnace",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "steel-plate": 10,
            "advanced-circuit": 5,
            "stone-brick": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "beacon",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "electronic-circuit": 20,
            "advanced-circuit": 20,
            "steel-plate": 10,
            "copper-cable": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "pumpjack",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 10,
            "electronic-circuit": 5,
            "pipe": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "oil-refinery",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "steel-plate": 15,
            "iron-gear-wheel": 10,
            "stone-brick": 10,
            "electronic-circuit": 10,
            "pipe": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "electric-engine-unit",
        "output": 1,
        "crafting_time": 10,
        "ingredients": {
            "engine-unit": 1,
            "lubricant": 15,
            "electronic-circuit": 2
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "flying-robot-frame",
        "output": 1,
        "crafting_time": 20,
        "ingredients": {
            "electric-engine-unit": 1,
            "battery": 2,
            "steel-plate": 1,
            "electronic-circuit": 3
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "explosives",
        "output": 2,
        "crafting_time": 4,
        "ingredients": {
            "sulfur": 1,
            "coal": 1,
            "water": 10
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "battery",
        "output": 1,
        "crafting_time": 4,
        "ingredients": {
            "sulfuric-acid": 20,
            "iron-plate": 1,
            "copper-plate": 1
        },
        "machine": "chemical-plant",
        "base": true
    },
    {
        "name": "storage-tank",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "iron-plate": 20,
            "steel-plate": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "pump",
        "output": 1,
        "crafting_time": 2,
        "ingredients": {
            "engine-unit": 1,
            "steel-plate": 1,
            "pipe": 1
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "chemical-plant",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 5,
            "electronic-circuit": 5,
            "pipe": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "low-density-structure",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "steel-plate": 2,
            "copper-plate": 20,
            "plastic-bar": 5
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "rocket-fuel",
        "output": 1,
        "crafting_time": 15,
        "ingredients": {
            "solid-fuel": 10,
            "light-oil": 10
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "rocket-part",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "processing-unit": 10,
            "low-density-structure": 10,
            "rocket-fuel": 10
        },
        "machine": "rocket-silo",
        "base": true
    },
    {
        "name": "satellite",
        "output": 1,
        "crafting_time": 5,
        "ingredients": {
            "low-density-structure": 100,
            "solar-panel": 100,
            "accumulator": 100,
            "radar": 5,
            "processing-unit": 100,
            "rocket-fuel": 50
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "nuclear-reactor",
        "output": 1,
        "crafting_time": 8,
        "ingredients": {
            "concrete": 500,
            "steel-plate": 500,
            "advanced-circuit": 500,
            "copper-plate": 500
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "centrifuge",
        "output": 1,
        "crafting_time": 4,
        "ingredients": {
            "concrete": 100,
            "steel-plate": 50,
            "advanced-circuit": 100,
            "iron-gear-wheel": 100
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "uranium-235",
        "output": 1,
        "crafting_time": 12,
        "ingredients": {
            "uranium-ore": 10
        },
        "machine": "centrifuge",
        "extra_outputs": [
            { "name": "uranium-238", "amount": 1 }
        ],
        "base": true
    },
    {
        "name": "uranium-235",
        "output": 41,
        "crafting_time": 60,
        "ingredients": {
            "uranium-235": 40,
            "uranium-238": 5
        },
        "machine": "centrifuge",
        "extra_outputs": [
            { "name": "uranium-238", "amount": 2 }
        ]
    },
    {
        "name": "nuclear-fuel",
        "output": 1,
        "crafting_time": 90,
        "ingredients": {
            "uranium-235": 1,
            "rocket-fuel": 1
        },
        "machine": "centrifuge",
        "base": true
    },
    {
        "name": "uranium-238",
        "output": 3,
        "crafting_time": 60,
        "ingredients": {
            "depleted-uranium-fuel-cell": 5
        },
        "machine": "centrifuge",
        "base": true
    },
    {
        "name": "uranium-fuel-cell",
        "output": 10,
        "crafting_time": 10,
        "ingredients": {
            "iron-plate": 10,
            "uranium-235": 1,
            "uranium-238": 19
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "heat-exchanger",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "steel-plate": 10,
            "copper-plate": 100,
            "pipe": 10
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "heat-pipe",
        "output": 1,
        "crafting_time": 1,
        "ingredients": {
            "steel-plate": 10,
            "copper-plate": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "steam-turbine",
        "output": 1,
        "crafting_time": 3,
        "ingredients": {
            "iron-gear-wheel": 50,
            "copper-plate": 50,
            "pipe": 20
        },
        "machine": "assembling-machine-1",
        "base": true
    },
    {
        "name": "water-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "water": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "sulfuric-acid-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "sulfuric-acid": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "crude-oil-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "crude-oil": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "heavy-oil-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "heavy-oil": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "light-oil-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "light-oil": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "petroleum-gas-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "petroleum-gas": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "lubricant-barrel",
        "output": 1,
        "crafting_time": 0.2,
        "ingredients": {
            "lubricant": 50,
            "barrel": 1
        },
        "machine": "assembling-machine-3",
        "base": true
    },
    {
        "name": "research-1",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1
        },
        "machine": "lab",
        "base": true
    },
    {
        "name": "research-2",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1,
            "logistic-science-pack": 1
        },
        "machine": "lab",
        "base": true
    },
    {
        "name": "research-3",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1,
            "logistic-science-pack": 1,
            "military-science-pack": 1
        },
        "machine": "lab",
        "base": true
    },
    {
        "name": "research-4",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1,
            "logistic-science-pack": 1,
            "military-science-pack": 1,
            "chemical-science-pack": 1
        },
        "machine": "lab",
        "base": true
    },
    {
        "name": "research-5",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1,
            "logistic-science-pack": 1,
            "military-science-pack": 1,
            "chemical-science-pack": 1,
            "production-science-pack": 1
        },
        "machine": "lab",
        "base": true
    },
    {
        "name": "research-6",
        "output": 1,
        "crafting_time": 30,
        "ingredients": {
            "automation-science-pack": 1,
            "logistic-science-pack": 1,
            "military-science-pack": 1,
            "chemical-science-pack": 1,
            "production-science-pack": 1,
            "utility-science-pack": 1
        },
        "machine": "lab",
        "base": true
    }
];

export { sources, recipes };
