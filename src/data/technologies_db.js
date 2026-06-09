const technologies = [
    {
        "name": "logistic-science-pack",
        "time": 5,
        "count": 75,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "steel-processing",
        "time": 5,
        "count": 50,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "automation",
        "time": 10,
        "count": 10,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "chemical-science-pack",
        "time": 10,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "electric-mining-drill",
        "time": 10,
        "count": 25,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "gun-turret",
        "time": 10,
        "count": 10,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "radar",
        "time": 10,
        "count": 20,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "repair-pack",
        "time": 10,
        "count": 25,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "stone-wall",
        "time": 10,
        "count": 10,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "advanced-circuit",
        "time": 15,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "automation-2",
        "time": 15,
        "count": 40,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "battery-equipment",
        "time": 15,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "belt-immunity-equipment",
        "time": 15,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "circuit-network",
        "time": 15,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "cliff-explosives",
        "time": 15,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "energy-shield-equipment",
        "time": 15,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "engine",
        "time": 15,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "explosives",
        "time": 15,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "fast-inserter",
        "time": 15,
        "count": 30,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "fluid-handling",
        "time": 15,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "lamp",
        "time": 15,
        "count": 10,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "logistics",
        "time": 15,
        "count": 20,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "logistics-3",
        "time": 15,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "military",
        "time": 15,
        "count": 10,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "military-2",
        "time": 15,
        "count": 20,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "military-science-pack",
        "time": 15,
        "count": 30,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "night-vision-equipment",
        "time": 15,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "rocketry",
        "time": 15,
        "count": 120,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "solar-panel-equipment",
        "time": 15,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "advanced-combinators",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "advanced-material-processing",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "advanced-material-processing-2",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "advanced-oil-processing",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "artillery",
        "time": 30,
        "count": 2000,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "automated-rail-transportation",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "automobilism",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "battery",
        "time": 30,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "battery-mk2-equipment",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "braking-force-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "braking-force-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "braking-force-3",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "braking-force-4",
        "time": 30,
        "count": 350,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "bulk-inserter",
        "time": 30,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "coal-liquefaction",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "concrete",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "construction-robotics",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "defender",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "destroyer",
        "time": 30,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "discharge-defense-equipment",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "distractor",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "effect-transmission",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "efficiency-module",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "efficiency-module-2",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "electric-energy-accumulators",
        "time": 30,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "electric-energy-distribution-1",
        "time": 30,
        "count": 120,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "electric-engine",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "energy-shield-mk2-equipment",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "exoskeleton-equipment",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "explosive-rocketry",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "fission-reactor-equipment",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "flamethrower",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "flammables",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "fluid-wagon",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "follower-robot-count-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "follower-robot-count-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "follower-robot-count-3",
        "time": 30,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "follower-robot-count-4",
        "time": 30,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "follower-robot-count-5",
        "time": 30,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "production-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "gate",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "heavy-armor",
        "time": 30,
        "count": 30,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-1",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-2",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-3",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-4",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-5",
        "time": 30,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-6",
        "time": 30,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "inserter-capacity-bonus-7",
        "time": 30,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "kovarex-enrichment-process",
        "time": 30,
        "count": 1500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "land-mine",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "landfill",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "laser",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-1",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-2",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-turret",
        "time": 30,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "logistic-robotics",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "logistic-system",
        "time": 30,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "logistics-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "lubricant",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "military-3",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "modular-armor",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "modules",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "nuclear-fuel-reprocessing",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "nuclear-power",
        "time": 30,
        "count": 800,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "oil-gathering",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "personal-laser-defense-equipment",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "personal-roboport-equipment",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "personal-roboport-mk2-equipment",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "plastics",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "power-armor",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "power-armor-mk2",
        "time": 30,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "processing-unit",
        "time": 30,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "production-science-pack",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "productivity-module",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "productivity-module-2",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "railway",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "refined-flammables-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "refined-flammables-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "research-speed-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "research-speed-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "research-speed-3",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "research-speed-4",
        "time": 30,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "research-speed-5",
        "time": 30,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "research-speed-6",
        "time": 30,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "robotics",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "solar-energy",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "speed-module",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "speed-module-2",
        "time": 30,
        "count": 75,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "spidertron",
        "time": 30,
        "count": 2500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "sulfur-processing",
        "time": 30,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "tank",
        "time": 30,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "toolbelt",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "uranium-mining",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "utility-science-pack",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-1",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-2",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-1",
        "time": 30,
        "count": 50,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-2",
        "time": 30,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "worker-robots-storage-1",
        "time": 30,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "braking-force-5",
        "time": 35,
        "count": 450,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "atomic-bomb",
        "time": 45,
        "count": 5000,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "braking-force-6",
        "time": 45,
        "count": 550,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "electric-energy-distribution-2",
        "time": 45,
        "count": 100,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "low-density-structure",
        "time": 45,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "military-4",
        "time": 45,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "rocket-fuel",
        "time": 45,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "uranium-ammo",
        "time": 45,
        "count": 1000,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "artillery-shell-range-1",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "artillery-shell-speed-1",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "automation-3",
        "time": 60,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "braking-force-7",
        "time": 60,
        "count": 650,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "efficiency-module-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-3",
        "time": 60,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-4",
        "time": 60,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-5",
        "time": 60,
        "count": 200,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-6",
        "time": 60,
        "count": 350,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "laser-shooting-speed-7",
        "time": 60,
        "count": 450,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-4",
        "time": 60,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-6",
        "time": 60,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "laser-weapons-damage-7",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "mining-productivity-1",
        "time": 60,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack"
        ]
    },
    {
        "name": "mining-productivity-2",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "mining-productivity-3",
        "time": 60,
        "count": 1000,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "mining-productivity-4",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-4",
        "time": 60,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-6",
        "time": 60,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "physical-projectile-damage-7",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "productivity-module-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "refined-flammables-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "refined-flammables-4",
        "time": 60,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "refined-flammables-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "refined-flammables-6",
        "time": 60,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "refined-flammables-7",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "rocket-silo",
        "time": 60,
        "count": 1000,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "speed-module-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-4",
        "time": 60,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-6",
        "time": 60,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "stronger-explosives-7",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-3",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-4",
        "time": 60,
        "count": 400,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack"
        ]
    },
    {
        "name": "weapon-shooting-speed-6",
        "time": 60,
        "count": 600,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "military-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-3",
        "time": 60,
        "count": 150,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-4",
        "time": 60,
        "count": 250,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-5",
        "time": 60,
        "count": 500,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    },
    {
        "name": "worker-robots-speed-6",
        "time": 60,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack",
            "space-science-pack"
        ]
    },
    {
        "name": "worker-robots-storage-2",
        "time": 60,
        "count": 300,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack"
        ]
    },
    {
        "name": "worker-robots-storage-3",
        "time": 60,
        "count": 450,
        "packs": [
            "automation-science-pack",
            "logistic-science-pack",
            "chemical-science-pack",
            "production-science-pack",
            "utility-science-pack"
        ]
    }
];

export default technologies;
