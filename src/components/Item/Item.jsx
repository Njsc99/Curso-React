import React from 'react'
import "./Item.css"
const Item = ({ product }) => {
  return (
        <div className='item-container'>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
  )
}

export default Item