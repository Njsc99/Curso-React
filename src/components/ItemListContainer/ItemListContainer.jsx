import { useEffect, useState } from "react";
import getProducts from "../../data/products.js";
import Item from "../Item/Item.jsx";
const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then((data)=> {
        setProducts(data);
      })

  }, []);

  return (
    <div>
        <h2> {props.saludo} </h2>
        {
          products.map((product)=> (
            <Item product = {product} key ={product.id} />  
          ))
        }
    </div>
  )
}

export default ItemListContainer