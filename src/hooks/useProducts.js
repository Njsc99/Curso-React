import { useEffect, useState } from "react";
import getProducts from "../data/products.js";
const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { products, loading };
}

export default useProducts;