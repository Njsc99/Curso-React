import { useEffect } from "react";

const EjemploHolaMundo = () => {

    useEffect(() => {

        const mostrarTamañoVentana = () => {
            console.log("Ancho: " + window.innerWidth);
        }

        window.addEventListener("resize", mostrarTamañoVentana);

        return () => {
            window.removeEventListener("resize", mostrarTamañoVentana);
        };
        
    }, []);

    return (
        <div>
        <h1>Hola Mundo</h1>
        <p>Este es un ejemplo de un componente funcional en React.</p>
        </div>
    );
    }

    export default EjemploHolaMundo;