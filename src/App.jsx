import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  
  const saludo = 'Hola, mundo!';

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer saludo = { "Bienvenido a mi ecomerce "}/>
    </div>
  ) 
}

export default App
