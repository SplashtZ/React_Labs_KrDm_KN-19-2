import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Card from "../UI/Card";

export const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState();

    const navigate = useNavigate();

    const urlParams = useParams();
    const productCategory = urlParams.category;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${productCategory}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [productCategory]);

    const changeInputHandler = (event) => {
        setSearchText(event.target.value);
    };

    const searchHandle = () => {
        navigate(`/products/search?q=${searchText}`);
    };

    return (
        <Card>
            <main>
                <input type="text" onChange={changeInputHandler} />
                <button onClick={searchHandle}>Search</button>

                <h1>{productCategory} page</h1>
                {products.products?.map((item, index) => (
                    <div key={index}>
                        {/* <h3>{item.id}</h3> */}
                        <h3>
                            <Link to={`/products/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <img src={item.thumbnail} alt="" />
                    </div>
                ))}
            </main>
        </Card>
    );
};