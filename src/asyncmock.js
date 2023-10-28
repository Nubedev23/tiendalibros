const misProductos = [
    {
        id: "1",
        titulo: "Diez negritos",
        precio: 12990,
        img: "../Diez-negritos-Agatha-Christie.jpg",
        idCat: "5",
        cantidad: 8
    },
    {
        id: "2",
        titulo: "Estudio en escarlata",
        precio: 6500,
        img: "../estudioenescarlata.jpg",
        idCat: "5",
        cantidad: 5
    },
    {
        id: "3",
        titulo: "Orgullo y Prejuicio",
        precio: 9990,
        img: "../orgullo-y-prejuicio-edicion-conmemorativa-penguin-768x1164.jpg",
        idCat: "2",
        cantidad: 20
    },
    {
        id: "4",
        titulo: "Harry Potter y la Cámara secreta",
        precio: 8990,
        img: "../Harry-Potter-y-la-camara-secreta.jpg",
        idCat: "6",
        cantidad:10
    },
    {
        id: "5",
        titulo: "Dune",
        precio: 10000,
        img: "../dune.png",
        idCat: "4",
        cantidad: 5
    },
    {
        id: "6",
        titulo: "La comunidad del anillo",
        precio: 7000,
        img: "../comunidadanillo.jpg",
        idCat: "3",
        cantidad: 5
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