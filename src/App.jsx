import './App.css'
import NavBar from './components/NavBar.jsx'

function App() {
  
  const saludo = 'Hola, mundo!';

  return (
    <div className="app-container">
      <NavBar />
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>{saludo}</p>
      </header>
    </div>
  ) 
}

export default App
