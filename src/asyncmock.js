const Products = [
    {id:"1",stock:10,category:"Cocina",productName:"Seca platos",price:9500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/seca-plato-tn-011-042114696ad798b71516382210641310-480-0.jpg"},
    {id:"2",stock:10,category:"Cocina",productName:"Utensillos silicona",price:1900,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/a9c94a9b-df01-46ba-a84a-785622ea2d0e1-d7b494b686212f008f16379610760673-480-0.jpeg"},
    {id:"3",stock:10,category:"Cocina",productName:"Individual Praia Set x 4",price:7200,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/individual-praia11-62c3e22bb6f99d342e16400293915426-480-0.jpeg"},
    {id:"4",stock:10,category:"Cocina",productName:"Tabla Marmol Rayada",price:8500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/tabla-marmol-rayada1-e1a80dfb0df36d562d16400312720130-480-0.jpeg"},
    {id:"5",stock:10,category:"Deco",productName:"Bandeja Mau Negra",price:6250,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/df169aa5-f187-4c8b-b765-dba1f649d06f-16bf7ae9c43da1b5e916403103926803-480-0.jpeg"}
    ]

const Categories = [
    {id:"1", description:"Cocina"},
    {id:"2", description:"Deco"},
    {id:"3", description:"Textil"},
    {id:"4", description:"Naturaleza"},
    {id:"5", description:"Baño"}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Categories)
        }, 1000)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? Products.filter(prod => prod.category === categoryId) : Products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Products.find(prod => prod.id === id))
        }, 1000)
    })
}
