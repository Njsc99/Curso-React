import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, totalPrice, deleteProductById } = useContext(CartContext);
  return (
    <div className='cart-container'>
        <h1>Productos en el Carrito</h1>
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

        <div className="info-cart">
            <p>Precio Total: ${totalPrice()}</p>
            <Link to="/checkout">Continuar con mi compra</Link>
        </div>

    </div>
  )
}

export default Cart