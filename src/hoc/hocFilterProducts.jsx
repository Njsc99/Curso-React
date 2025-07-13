import { useState } from 'react';
import usePorducts from '../hooks/useProducts';

const hocFilterProducts = (Component) => {

    return function () {
        const [query, setQuery] = useState("");
        const { products, loading } = usePorducts();

        const changeInput = (event) => {
            setQuery( event.target.value.toLowerCase() );
        }

        const search = (productList) => {
            const filterProducts = productList.filter((product) => {
                return product.name.toLowerCase().includes(query);
        });

        return filterProducts;
    }
        return (
            <>
                <div>
                    <input type="text" placeholder="buscar producto.." onChange={changeInput}/>
                </div>
                <Component products={search(products)}/>
            </>
        )
    }
}

export default hocFilterProducts;