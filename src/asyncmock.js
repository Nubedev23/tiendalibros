const misProductos = [
    {
        id: "1",
        titulo: "Diez negritos",
        autor: "Agatha Christie",
        precio: 12990,
        img: "../Diez-negritos-Agatha-Christie.jpg",
        idCat: "5",
        stock: 100
    },
    {
        id: "2",
        titulo: "Estudio en escarlata",
        autor: "Arthur Conan Doyle",
        precio: 6500,
        img: "../estudioenescarlata.jpg",
        idCat: "5",
        stock: 100
    },
    {
        id: "3",
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        precio: 9990,
        img: "../orgullo-y-prejuicio-edicion-conmemorativa-penguin-768x1164.jpg",
        idCat: "2",
        stock: 100
    },
    {
        id: "4",
        titulo: "Harry Potter y la Cámara secreta",
        autor: "J.K. Rowling",
        precio: 8990,
        img: "../Harry-Potter-y-la-camara-secreta.jpg",
        idCat: "6",
        stock:100
    },
    {
        id: "5",
        titulo: "Dune",
        autor: "Frank Herbert",
        precio: 10000,
        img: "../dune.png",
        idCat: "4",
        stock: 100  
    },
    {
        id: "6",
        titulo: "La comunidad del anillo",
        autor: "J.R.R. Tolkien",
        precio: 7000,
        img: "../comunidadanillo.jpg",
        idCat: "3",
        stock: 100
    }

]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);

        }, 500)
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}