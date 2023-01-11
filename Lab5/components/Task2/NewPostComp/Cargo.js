import React from "react";

function Cargo({ register, control, reset, fields, append, remove }) {
    return (
        <div>
            <h3>Характеристика місць</h3>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <li>
                            <label>Кількість</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.amount`, {
                                    required: true,
                                })}
                            />

                            <label>Оголошена вартість</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.declaredPrice`, {
                                    required: true,
                                })}
                            />

                            <label>Вага</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.weight`, {
                                    required: true,
                                })}
                            />

                            <label>Довжина</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.length`, {
                                    required: true,
                                })}
                            />

                            <label>Ширина</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.width`, {
                                    required: true,
                                })}
                            />

                            <label>Висота</label>
                            <input
                                type="number"
                                {...register(`characteristics.${index}.height`, {
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
                        amount: 1,
                        declaredPrice: 100,
                        weight: 10,
                        length: 10,
                        width: 10,
                        height: 10,
                    });
                }}
            >
                Додати місце
            </button>
            <button
                type="button"
                onClick={() =>
                    reset({
                        characteristics: [
                            {
                                amount: 1,
                                declaredPrice: 100,
                                weight: 10,
                                length: 10,
                                width: 10,
                                height: 10,
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

export default Cargo;