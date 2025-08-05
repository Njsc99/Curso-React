import React from 'react'
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { TiSortAlphabetically } from 'react-icons/ti';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        phone: ''
    });
    const { cart } = useContext(CartContext);

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
    }
  return (
    <div>
        <form onSubmit={sendOrder}>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
            <button type="submit">Enviar Orden</button>
        </form>
    </div>
  )
}

export default Checkout