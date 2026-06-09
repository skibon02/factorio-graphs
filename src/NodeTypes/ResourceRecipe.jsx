import { Handle, Position } from '@xyflow/react';
import ResourceRate from '../jsx/ResourceRate.jsx'
import { resourceIconUrl } from '../jsx/util.jsx'
import React from 'react';
import './style.css'
import machines from '../data/machines_db.js';
import resources from '../data/resources_db.js';

const machine_families = {
    'assembling-machine-1': ['assembling-machine-1', 'assembling-machine-2', 'assembling-machine-3'],
    'assembling-machine-2': ['assembling-machine-1', 'assembling-machine-2', 'assembling-machine-3'],
    'assembling-machine-3': ['assembling-machine-1', 'assembling-machine-2', 'assembling-machine-3'],
    'stone-furnace': ['stone-furnace', 'steel-furnace', 'electric-furnace'],
    'steel-furnace': ['stone-furnace', 'steel-furnace', 'electric-furnace'],
    'electric-furnace': ['stone-furnace', 'steel-furnace', 'electric-furnace'],
    'electric-mining-drill': ['burner-mining-drill', 'electric-mining-drill'],
    'burner-mining-drill': ['burner-mining-drill', 'electric-mining-drill'],
    'lab': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-2': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-3': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-4': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-5': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-6': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
    'lab-speed-7': ['lab', 'lab-speed-2', 'lab-speed-3', 'lab-speed-4', 'lab-speed-5', 'lab-speed-6', 'lab-speed-7'],
};

function ResourceRecipe({ data, isConnectable }) {
    let rcinfo = data.rcinfo;
    let recipe = rcinfo.recipe;
    let output_name = data.name;

    let machine_name = rcinfo.machine_name;
    let machine = machines[machine_name];
    let crafting_speed = machine.crafting_speed;

    let inputs = [];
    let secondary_output_rate = null;

    if (recipe) {
        let output_rate = recipe.name == data.name ? recipe.output : recipe.output2;
        inputs = Object.entries(recipe.ingredients).map(([ing, inp_rate]) => {
            return <div key={ing} className='cont'>
                <Handle
                    style={{ left: -30 }}
                    id={'in-' + output_name + '-' + ing}
                    isConnectable={isConnectable}
                    position={Position.Left}
                    type='target' />
                <ResourceRate rcname={ing} rate={inp_rate * rcinfo.rate / output_rate} />
            </div>
        });

        let sec_name = recipe.name == data.name ? recipe.name2 : recipe.name;
        if (sec_name) {
            let sec_output = recipe.name == data.name ? recipe.output2 : recipe.output;
            secondary_output_rate = sec_output * rcinfo.rate / output_rate;
        }
    }

    let machine_options = machine_families[machine_name] || [machine_name];

    // For miners, show resource info
    let resource_info = resources[output_name];
    let is_miner = rcinfo.is_miner;

    return (
        <div className="recipe-node">
            <div className="top-modifiers">
                <div>
                    <img className="machine-icon" src={resourceIconUrl(machine_name)} />
                    {machine_name} ({crafting_speed}x)
                </div>
            </div>
            <p>{Math.round(rcinfo.machines_cnt_exact * 1000) / 1000} ({rcinfo.machines_cnt})</p>
            <div className="recipe-node-cont">
                <div className='inputs'>
                    {inputs}
                </div>
                <div className='outputs'>
                    <div className='cont'>
                        <Handle
                            style={{ right: -30 }}
                            id={'out-' + output_name}
                            isConnectable={isConnectable}
                            position={Position.Right}
                            type='source' />
                        <ResourceRate rcname={output_name} rate={rcinfo.rate} />
                    </div>
                    {secondary_output_rate &&
                        <div className='cont'>
                            <Handle
                                style={{ right: -30 }}
                                id={'secondary-out-' + output_name}
                                isConnectable={isConnectable}
                                position={Position.Right}
                                type='source' />
                            <ResourceRate rcname={recipe.name == data.name ? recipe.name2 : recipe.name} rate={secondary_output_rate} />
                        </div>}
                </div>
            </div>
            {machine_options.length > 1 && (
                <div className="modifiers">
                    <div className="modifier">
                        <div className='cont'>
                            <span>Machine:</span>
                            <select
                                className="node-machine-select"
                                value={machine_name}
                                onChange={ev => data.set_machine(ev.target.value)}
                            >
                                {machine_options.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResourceRecipe;
