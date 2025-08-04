import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, totalPrice, deleteProductById } = useContext(CartContext);
  return (
    <div>
        {
            cart.map((productCart, index) => (
                <div key={index} className="cart-item">
                    <img src={productCart.image} alt="" />
                    <h3>{productCart.name}</h3>
                    <p>${productCart.price}</p>
                    <p>Quantity: {productCart.quantity}</p>
                    <p>precio parcial: {productCart.quantity * productCart.price}</p>
                    <button onClick={ () => deleteProductById(productCart.id) }>Eliminar</button>
                </div>
            ))
        }

        <p>Precio Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart