import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            const cartUpdated = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + product.quantity };
                }
                return item;
            });
            setCart(cartUpdated);
            return;
        }
        
        setCart( [ ...cart, product ] );
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0);
        return total;
    }

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.quantity * product.price), 0);
        return total;
    }

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((product) => product.id !== id);
        setCart(productsFilter);
    }
    return (
        <CartContext.Provider value={ {cart, addProductInCart, totalQuantity, totalPrice, deleteProductById} }>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };