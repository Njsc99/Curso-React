import React from 'react'
import "./Item.css"
const Item = ({ product }) => {
  return (
        <div className='item-container'>
            <img className='item-image' src={product.image} alt="" />
            <p className='item-title'>{product.name}</p>
            <p className='item-description'>{product.description}</p>
            <p className='item-price'>Precio: ${product.price}</p>
            <p className='item-stock'>Stock: {product.stock}</p>
            <button className='item-button'> Comprar</button>
        </div>
  )
}

export default Item