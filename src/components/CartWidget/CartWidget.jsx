import carrito from "../../assets/carrito.png";

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <img src={carrito} alt="" />
        <h2>6</h2>
    </div>
  );
}

export default CartWidget;