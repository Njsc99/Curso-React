import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import EjemploContador from './components/ejemplos/EjemploContador.jsx';
import { ItemListWithSearch } from './components/ItemList/ItemList';

function App() {
  
  const saludo = 'Hola, mundo!';

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer saludo = { "Bienvenido a mi ecomerce "}/>
      <ItemListWithSearch />      
    </div>
  ) 
}

export default App
