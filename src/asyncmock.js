const misProductos = [
    {id:"1", nombre:"Velador",precio: 11499,stock: 20,img:"../public/img/Velador Originals 4 Mejorado.jpg", idCat: "1"},
    {id:"2", nombre:"Lampara de Pared",precio: 12499,stock: 10,img:"../public/img/Velador Pared Mejorada.png", idCat: "2"},
    {id:"3", nombre:"Lampara de exterior",precio: 14999,stock: 25,img:"../public/img/Velador Solar Exterior Mejorado.png", idCat: "3"},
    {id:"4", nombre:"Lampara Nordica",precio: 21500,stock: 15,img:"../public/img/Lampara Nordica OFI Mejorada.png", idCat: "4"},
    {id:"5", nombre:"Lampara de Pared Madera",precio: 11500,stock: 5,img:"../public/img/Velador de Pared 2 Mejorada.png", idCat: "2"},
    {id:"6", nombre:"Velador de Metal",precio: 25500,stock: 20,img:"../public/img/Velador Metal 1 Bis Mejorado.jpg", idCat: "1"},
    {id:"7", nombre:"Velador de Madera",precio: 14000,stock: 10,img:"../public/img/Velador de madera 1 Bis Mejorado.jpg.png", idCat: "1"},
    {id:"8", nombre:"Velador Vintage",precio: 23000,stock: 8,img:"../public/img/Velador Vintage 3 Mejorado.png", idCat: "1"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(misProductos);
        }, 100)

    })
} 

export const getUnProducto = (id) => {
    return new Promise(resolve =>{
        setTimeout (() => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);

        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const productosCategoria = misProductos.filter(prod=> prod.idCat === idCategoria);
            resolve(productosCategoria);

        },100)
    })
}

