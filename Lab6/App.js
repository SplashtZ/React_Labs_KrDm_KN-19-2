import { RouterProvider } from "react-router-dom";
import { router } from "./page/routing";

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;