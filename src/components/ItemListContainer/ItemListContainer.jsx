import useProducts from "../../hooks/useProducts.js";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

const ItemListContainer = (props) => {

  const { products, loading } = useProducts();

  return (
      <div className="item-list-header">
        <h1>{props.saludo}</h1>
        {
          loading ? <Loading /> : <ItemList products={products} />         
        }
      </div>
  )
}

export default ItemListContainer