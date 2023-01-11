import React from "react";

function CityRoute({ register, label, selectName, cities }) {
    return (
        <div>
            <label>{label}</label>
            <select {...register(selectName)}>
                {cities.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default CityRoute;