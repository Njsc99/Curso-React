import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import EjemploContador from './components/ejemplos/EjemploContador.jsx';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const saludo = 'Hola, mundo!';

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo = { "Bienvenido a mi ecomerce "}/> } />
          <Route path="/category/:category" element={ <ItemListContainer /> } /> 
          <Route path="/category/Buscar" element={ <ItemListWithSearch /> } /> 
          <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>

  ) 
}

export default App
