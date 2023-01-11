import React, { useState } from "react";

const DeliveryType = ({ rDeliveryList, register }) => {
    return (
        <div>
            <label>Вид зворотної доставки</label>
            <select {...register("returnDelivery")}>
                {rDeliveryList.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

function ReturnDelivery(props) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                Послуга "Зворотна доставка"
            </label>

            {checked && (
                <DeliveryType
                    rDeliveryList={props.rDeliveryList}
                    register={props.register}
                />
            )}
        </div>
    );
}

export default ReturnDelivery;