import React from "react";
import { resourceIconUrl } from "./util";

function ResourceRateInput({ rcname, rate, setRate }) {
    const rounded_rate = Math.round(rate * 1000) / 1000;

    return (
        <div className="resource-rate-cont">
            <img src={resourceIconUrl(rcname)} />
            <p onClick={() => {
                let new_amount = +prompt("Enter new amount", rate);
                if (new_amount > 0) {
                    setRate(new_amount);
                }
            }}>{rounded_rate} / s</p>
        </div>
    );
}

export default ResourceRateInput;
