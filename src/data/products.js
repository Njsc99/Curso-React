const products = [
    {
        id: 1,
        name: "Alimento para Perro Adulto",
        category: "Alimentos",
        description: "Bolsa de 15kg de alimento balanceado para perros adultos.",
        price: 25000,
        stock: 20,
        image: "alimento-perro.jpg"
    },
    {
        id: 2,
        name: "Rascador para Gatos",
        category: "Accesorios",
        description: "Rascador de sisal para gatos, tamaño mediano.",
        price: 12000,
        stock: 15,
        image: "rascador-gato.jpg"
    },
    {
        id: 3,
        name: "Collar Antipulgas",
        category: "Cuidados",
        description: "Collar antipulgas para perros y gatos, duración 8 meses.",
        price: 8000,
        stock: 30,
        image: "collar-antipulgas.jpg"
    },
    {
        id: 4,
        name: "Juguete Mordedor",
        category: "Juguetes",
        description: "Juguete de goma resistente para perros medianos.",
        price: 3500,
        stock: 25,
        image: "juguete-mordedor.jpg"
    },
    {
        id: 5,
        name: "Arena Sanitaria para Gatos",
        category: "Higiene",
        description: "Bolsa de 10kg de arena sanitaria aglutinante.",
        price: 7000,
        stock: 18,
        image: "arena-gato.jpg"
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}

export default getProducts;