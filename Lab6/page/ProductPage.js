import { useState, useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

import Card from "../UI/Card";
import styles from "./ProductPage.module.css";

export const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const { id } = useParams();

    function useQuery() {
        const { search } = useLocation();

        return useMemo(() => new URLSearchParams(search), [search]);
    }

    let query = useQuery();
    console.log(query.get("q"));

    useEffect(() => {
        if (id === "search") {
            console.log("SEARCH");
            setIsSearch(true);
            fetch(`https://dummyjson.com/products/search?q=${query.get("q")}`)
                .then((response) => response.json())
                .then((data) => setProduct(data));
        } else {
            fetch(`https://dummyjson.com/products/${id}`)
                .then((response) => response.json())
                .then((data) => setProduct(data));
        }
    }, []);

    console.log(product);
    if (isSearch) {
        return (
            <Card>
                <main>
                    <h1>Search page</h1>
                    <div>
                        {product.products?.map((item, index) => (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <img src={item.thumbnail} alt="" />
                            </div>
                        ))}
                    </div>
                </main>
            </Card>
        );
    } else {
        return (
            <Card>
                <main>
                    <h1>Product page</h1>
                    <div className={styles.wrapper}>
                        <div className={styles.pic}>
                            <img src={product.thumbnail} alt="" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.header}>{product.title}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </main>
            </Card>
        );
    }
};