import { useState, useEffect } from 'react';
import EjemploHolaMundo from './EjemploHolaMundo';

const EjemploContador = () => {
  const [contador, setContador] = useState(0);
  const [toggle, setToggle] = useState(true);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const cambiarToggle = () => {
    setToggle(!toggle);
  }

  //Se ejecuta solo en el montaje del componente
  //y no se vuelve a ejecutar a menos que se cambie el array de dependencias
    useEffect(() => {
        console.log("1er User Effect");
    }, []);

    //Se ejecuta en el montaje y cada vez que cambia el contador
    useEffect(() => {
        console.log("2do User Effect");
    }, [contador, toggle]);

    //Se ejecuta en el montaje y cada vez que se renderiza el componente
    useEffect(() => {
        console.log("3er User Effect");
    });

  return (
    <div>
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
        <div>
            <p>Valor Toggle: {toggle.toString()}</p>
            <button onClick={cambiarToggle}>Alternar valro toggle</button>
            { toggle && <EjemploHolaMundo /> }
        </div>
    </div>
  );
}

export default EjemploContador;