import Item from '../Item/Item';
import './ItemList.css';
import hocFilterProducts from '../../hoc/hocFilterProducts';

const ItemList = ( {products} ) => {
    return (
        <div className="item-list-container">
        {
            products.map((product)=> (
                <Item product = {product} key ={product.id} />  
            ))
        }
    </div>
  )
}

const ItemListWithSearch = hocFilterProducts(ItemList);
export { ItemList, ItemListWithSearch };

//export default ItemList