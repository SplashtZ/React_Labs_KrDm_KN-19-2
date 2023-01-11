import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CityRoute from "./NewPostComp/CityRoute";
import Cargo from "./NewPostComp/Cargo";
import Pallets from "./NewPostComp/Pallets";
import Packing from "./NewPostComp/Packing";
import ReturnDelivery from "./NewPostComp/ReturnDelivery";

function NewPostForm(props) {
    const [deliveryType, setDeliveryType] = useState();

    const schema = yup.object().shape({
        sendingCity: yup.string().required(),
        recipientCity: yup.string().required(),
        typeDelivery: yup.string().required(),
        typePacking: yup.string().optional(),
        floorNums: yup.string().optional(),
        isElevator: yup.boolean().optional(),
        returnDelivery: yup.string().optional(),
    });

    const {
        register,
        handleSubmit,
        control,
        reset,
        getValues,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: {
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
        },
        pallet: [
            {
                palletType: "",
                declaredPrice: 100,
                amount: 1,
            },
        ],
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "characteristics",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    const deliveryTypeHandler = (event) => {
        setDeliveryType(event.target.value);
    };

    let countOfDeparture = getValues("characteristics").length;

    return (
        <div>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <h3>Маршрут</h3>
                <CityRoute
                    label="Місто-відправник"
                    register={register}
                    cities={props.cities}
                    selectName="sendingCity"
                />
                {/* <div>{errors.sendingCity && <p className="error-text">Error!</p>}</div> */}
                <CityRoute
                    label="Місто-одержувач"
                    register={register}
                    cities={props.cities}
                    selectName="recipientCity"
                />
                <hr />
                <h3>Вид відправлення</h3>
                <select {...register("typeDelivery")} onChange={deliveryTypeHandler}>
                    {props.deliveryTypeList.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                <hr />
                {deliveryType === "Вантажі" ? (
                    <Cargo
                        register={register}
                        control={control}
                        reset={reset}
                        fields={fields}
                        append={append}
                        remove={remove}
                    />
                ) : (
                    <Pallets
                        register={register}
                        reset={reset}
                        fields={fields}
                        append={append}
                        remove={remove}
                        palletType={props.palletTypeList}
                    />
                )}
                <hr />
                {/* {console.log(countOfDeparture)} */}
                <Packing
                    packing={props.packingList}
                    register={register}
                    count={countOfDeparture}
                />
                <p>
                    <label>
                        Послуга "Підйом на поверх" (кількість поверхів)
                        <input type="text" {...register("floorNums")} />
                        Ліфт
                        <input type="checkbox" {...register("isElevator")} />
                    </label>
                </p>

                <ReturnDelivery
                    rDeliveryList={props.rDeliveryList}
                    register={register}
                />

                <br />
                <br />
                <button className="form-actions" type="submit">
                    Submit
                </button>

                <button type="button" onClick={() => reset()}>
                    Reset
                </button>
            </form>
        </div>
    );
}

export default NewPostForm;