import React from 'react'

const FormCheckout = ( {dataForm, handleChangeInput, sendOrder} ) => {
  return (
        <form onSubmit={sendOrder} className="checkout-form">
            <h2>Checkout</h2>
            <div>
                <label className="label">Nombre Completo: </label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
            </div>
            <div>
                <label className="content-input">Email: </label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
            </div>
            <div>
                <label className="content-input">Telefono: </label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
            </div>


            <button type="submit" className="Button-send">Enviar Orden</button>
        </form>
  )
}

export default FormCheckout