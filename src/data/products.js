const products = [
    {
        id: 1,
        name: "MasterDog",
        category: "Alimentos",
        description: "Bolsa de 15kg de alimento balanceado para perros adultos.",
        price: 25000,
        stock: 20,
        image: "/img/alimento-perro.jpg"
    },
    {
        id: 2,
        name: "MasterCat",
        category: "Accesorios",
        description: "Rascador de sisal para gatos, tamaño mediano.",
        price: 12000,
        stock: 15,
        image: "/img/rascador-gato.jpg"
    },
    {
        id: 3,
        name: "Bayer",
        category: "Cuidados",
        description: "Collar antipulgas para perros y gatos, duración 8 meses.",
        price: 8000,
        stock: 30,
        image: "/img/collar-antipulgas.jpg"
    },
    {
        id: 4,
        name: "Kong",
        category: "Juguetes",
        description: "Juguete de goma resistente para perros medianos.",
        price: 3500,
        stock: 25,
        image: "/img/juguete-mordedor.jpg"
    },
    {
        id: 5,
        name: "Sanicat",
        category: "Higiene",
        description: "Bolsa de 10kg de arena sanitaria aglutinante.",
        price: 7000,
        stock: 18,
        image: "/img/arena-gato.jpg"
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === Number(productId) );
            resolve(product);
        }, 3000);
    });
}
export { getProducts, getProductById };