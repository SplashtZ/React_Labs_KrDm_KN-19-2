import FormFeedback from "./components/task1/FormFeedback";
import NewPostForm from "./components/task2/NewPostForm";

const cities = [
    "",
    "Вінниця",
    "Запоріжжя",
    "Київ",
    "Львів",
    "Житомир",
    "Херсон",
    "Бердичів",
];

const palletType = [
    "Палета від 1,5 м2 до 2 м2 (816)",
    "Палета від 1 м2 до 1.49 м2 (612)",
    "Палета від 0,5 м2 до 0.99 м2 (408)",
    "Палета до 0.49 м2 (204)",
];

const deliveryType = ["Палети", "Вантажі"];

const packing = [
    "",
    "Конверт з ПБ плівкою С/13 (150х215) мм",
    "Конверт з ПБ плівкою D/14 (180х265) мм",
    "Конверт з ПБ плівкою E/15 (220х265) мм",
    "Коробка (0.5 кг) пласка",
    "Коробка (1 кг) стандартна",
    "Коробка (15 кг) з наповнювачем",
];

const typeReturnDelivery = ["Документи", "Грошовий переказ"];

function App() {
    return (
        <div className="app">
            {/* <FormFeedback /> */}
            <NewPostForm
                cities={cities}
                deliveryTypeList={deliveryType}
                palletTypeList={palletType}
                packingList={packing}
                rDeliveryList={typeReturnDelivery}
            />
        </div>
    );
}

export default App;