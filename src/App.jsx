import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  
  const saludo = 'Hola, mundo!';

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo = { "Bienvenido a mi ecomerce "}/> } />
          <Route path="/category/:category" element={ <ItemListContainer /> } /> 
          <Route path="/category/Buscar" element={ <ItemListWithSearch /> } /> 
          <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      </CartProvider>
    </BrowserRouter>

  ) 
}

export default App
