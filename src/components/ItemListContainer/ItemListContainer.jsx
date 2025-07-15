import useProducts from "../../hooks/useProducts.js";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { category } = useParams();
  const { products, loading } = useProducts(category);

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