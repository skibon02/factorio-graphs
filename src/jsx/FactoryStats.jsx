import React from "react";
import { resourceIconUrl } from "./util";
import ResourceRate from "./ResourceRate";
import recycling from "../assets/recycling.png"
import machines from '../data/machines_db.js';
import technologies from '../data/technologies_db.js';

const family_labels = {
    'assembling': 'Assembler',
    'furnace': 'Furnace',
    'mining': 'Miner',
};

function getFamily(name) {
    if (name.startsWith('assembling')) return 'assembling';
    if (name.includes('furnace')) return 'furnace';
    if (name.includes('mining')) return 'mining';
    if (name === 'pumpjack' || name === 'offshore-pump') return 'pumping';
    return null;
}

const FactoryStats = ({ stats, defaults, setDefaults, applyAll, setApplyAll, researchTime, setResearchTime }) => {
    let secondary_outputs = Object.entries(stats.secondaryOutputs).map(([rcname, rate]) => {
        return <ResourceRate key={rcname} rcname={rcname} rate={rate} />
    });

    let default_selectors = [];
    for (let [family, label] of Object.entries(family_labels)) {
        let options = [];
        for (let [name, m] of Object.entries(machines)) {
            if (getFamily(name) === family) {
                options.push(name);
            }
        }
        if (options.length <= 1) continue;

        default_selectors.push(
            <div key={family} className="default-selector">
                <span>{label}:</span>
                <select
                    value={defaults[family] || options[0]}
                    onChange={ev => setDefaults({ ...defaults, [family]: ev.target.value })}
                >
                    {options.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </div>
        );
    }

    let tech_options = technologies.map(t => ({
        value: t.name,
        label: t.name.replace(/-/g, ' ') + ' (' + t.time + 's)',
        time: t.time,
    }));

    return (
        <div className="factory-stats">
            <p className="factory-stats-title">Factory stats</p>
            <div className="energy flex-row">
                <img className="icon" src={resourceIconUrl("energy")} />
                <p>Energy: </p>
                <p className="value">{Math.round(stats.energy * 1000) / 1000} kW</p>
            </div>
            <div className="secondary-outputs">
                <p className="flex-row"><img className="icon" src={recycling} />Secondary outputs:</p>
                {secondary_outputs}
            </div>
            <div className="machine-defaults">
                <p className="defaults-title">Machine defaults</p>
                <label className="apply-all-toggle">
                    <input
                        type="checkbox"
                        checked={applyAll}
                        onChange={ev => setApplyAll(ev.target.checked)}
                    />
                    <span>Apply to all</span>
                </label>
                {default_selectors}
            </div>
            <div className="research-time">
                <p className="defaults-title">Research time</p>
                <div className="default-selector">
                    <span>Tech:</span>
                    <select
                        className="tech-select"
                        value=""
                        onChange={ev => {
                            const tech = technologies.find(t => t.name === ev.target.value);
                            if (tech) setResearchTime(tech.time);
                        }}
                    >
                        <option value="">Custom...</option>
                        {tech_options.map(t => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                    </select>
                </div>
                <div className="default-selector">
                    <span>Cycle:</span>
                    <input
                        type="number"
                        className="research-time-input"
                        value={researchTime}
                        min={1}
                        onChange={ev => setResearchTime(Number(ev.target.value) || 30)}
                    />
                    <span>s</span>
                </div>
            </div>
        </div>
    );
}

export default FactoryStats;
