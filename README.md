# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Nicolas Saez

Mi proyecto es un ecommerce de productos y accesorios para mascotas.  
Permite a los usuarios navegar por distintas categorías, ver detalles de productos, agregarlos al carrito y finalizar la compra completando sus datos.  
El sitio está desarrollado con React y utiliza Firebase para la gestión de órdenes.

## Características principales

- Catálogo de productos por categorías (alimentos, accesorios, higiene, etc.)
- Detalle de cada producto con información y stock disponible
- Carrito de compras con resumen y total
- Checkout con formulario para completar datos del comprador
- Confirmación de compra con número de orden

## Tecnologías utilizadas

- React
- Vite
- Firebase (Firestore)
- CSS Modules

## Instalación 

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Njsc99/ProyectoFinalSaez.git
   ```

2. Ingresa a la carpeta del proyecto:
   ```bash
   cd curso-react
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver el proyecto.

> **Nota:**  
> Para conectar con Firebase, debes configurar tus credenciales en el archivo correspondiente (`src/db/db.js`).

¡Listo! Ahora puedes explorar y probar el ecommerce.


¡Gracias por visitar mi proyecto!
