import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { IndexPage } from "./IndexPage";
import { ErrorPage } from "./ErrorPage";
import { CategoryPage } from "./CategoryPage";
import { AllProductsPage } from "./AllProductsPage";
import { ProductPage } from "./ProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <IndexPage />,
                index: true,
            },
            {
                path: "/category",
                element: <CategoryPage />,
            },
            {
                path: "/category/:category/products",
                element: <AllProductsPage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
        ],
    },
]);