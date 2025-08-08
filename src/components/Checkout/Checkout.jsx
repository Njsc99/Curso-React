import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Checkout.css';
import FormCheckout from '../FormCheckout/FormCheckout';
import { addDoc, collection } from 'firebase/firestore';
import db from "../../db/db.js";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        phone: ''
    });
    const [ orderId, setOrderId ] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name] : event.target.value } );
    };

    const sendOrder = (event) => {
        event.preventDefault();
        
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }

        uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            
            setOrderId(response.id);
        } catch (error) {
            console.error("Error al subir order: ", error);
        }
    }

  return (
    <div className="checkout">
        {
            orderId ? (
                <div className="order-confirmation">
                    <h2>¡Gracias por tu compra!</h2>
                    <p>el identificador de su orden es: {orderId}</p>
                </div>
            ) : (
                <div className="checkout-form-container">
                    <h2>Completa tus datos para finalizar la compra</h2>
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
                </div>
            )     
        }

    </div>
  )
}

export default Checkout