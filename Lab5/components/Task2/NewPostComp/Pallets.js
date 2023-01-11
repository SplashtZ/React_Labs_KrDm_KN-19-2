import React from "react";

function Pallets({ register, reset, fields, append, remove, palletType }) {
    return (
        <div>
            <h3>Палети</h3>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <li className="palletSelect">
                            <label>Тип палети</label>
                            <select
                                {...register(`pallet.${index}.amount`, {
                                    required: true,
                                })}
                            >
                                {palletType.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                            </select>

                            <label>Оголошена вартість</label>
                            <input
                                type="number"
                                {...register(`pallet.${index}.declaredPrice`, {
                                    required: true,
                                })}
                            />

                            <label>Кількість</label>
                            <input
                                type="number"
                                {...register(`pallet.${index}.weight`, {
                                    required: true,
                                })}
                            />

                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                        </li>
                    </div>
                );
            })}

            <button
                type="button"
                onClick={() => {
                    append({
                        palletType: "",
                        declaredPrice: 100,
                        amount: 1,
                    });
                }}
            >
                Додати місце
            </button>
            <button
                type="button"
                onClick={() =>
                    reset({
                        pallet: [
                            {
                                palletType: "",
                                declaredPrice: 100,
                                amount: 1,
                            },
                        ],
                    })
                }
            >
                reset
            </button>
        </div>
    );
}

export default Pallets;