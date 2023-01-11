import React, { useState } from "react";

const PackingSelect = ({ packing, register, count }) => {
    return (
        <div>
            <label>Вид пакування</label>
            <select {...register("typePacking")}>
                {packing.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            <label>Кількість: {count}</label>
        </div>
    );
};

function Packing(props) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                Послуга "Пакування"
            </label>

            {checked && (
                <PackingSelect
                    packing={props.packing}
                    register={props.register}
                    count={props.count}
                />
            )}
        </div>
    );
}

export default Packing;