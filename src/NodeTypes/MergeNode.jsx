import { Handle, Position } from '@xyflow/react';
import ResourceRate from '../jsx/ResourceRate.jsx'
import { resourceIconUrl } from '../jsx/util.jsx'
import React from 'react';
import './style.css'

function MergeNode({ data, isConnectable }) {
    return (
        <div className="recipe-node">
            <div className="top-modifiers">
                <div>
                    <img className="machine-icon" src={resourceIconUrl(data.rcname)} />
                    {data.rcname} (merge)
                </div>
            </div>
            <p>{Math.round(data.rate * 1000) / 1000}</p>
            <div className="recipe-node-cont">
                <div className='inputs'>
                    <div className='cont'>
                        <Handle
                            style={{ left: -30 }}
                            id={'in-merge-' + data.rcname}
                            isConnectable={isConnectable}
                            position={Position.Left}
                            type='target' />
                        <ResourceRate rcname={data.rcname} rate={data.rate} />
                    </div>
                </div>
                <div className='outputs'>
                    <div className='cont'>
                        <Handle
                            style={{ right: -30 }}
                            id={'out-' + data.rcname}
                            isConnectable={isConnectable}
                            position={Position.Right}
                            type='source' />
                        <ResourceRate rcname={data.rcname} rate={data.rate} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MergeNode;
