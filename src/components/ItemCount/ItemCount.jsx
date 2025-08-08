import { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);
  
  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleClickIncrement = () => {
    if (count < stock) {
        setCount(count + 1);
    }
  }

  return (
    <div className="item-count-container">
        <button className="item-count-btn" onClick={ handleClickDecrement }>-</button>
        <span className="item-count-value">{count}</span>
        <button className="item-count-btn" onClick={ handleClickIncrement }>+</button>

        <button className="item-count-add-btn" onClick={ () => addProduct(count) }>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount