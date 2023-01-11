import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import styles from "./CategoryPage.module.css";

export const CategoryPage = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);

    return (
        <Card>
            <main>
                <h1>Category page</h1>

                <ul>
                    {category.map((category) => (
                        <li className={styles.item} key={category}>
                            <Link to={`/category/${category}/products`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </Card>
    );
};