const Products = [
    {id:"1",productName:"Seca platos",price:9500,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/seca-plato-tn-011-042114696ad798b71516382210641310-480-0.jpg",description:"Seca platos con bandeja color blanco con manijas color madera.",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/seca-plato-tn-011-042114696ad798b71516382210641310-640-0.jpg",category:"Cocina"},
    {id:"2",productName:"Utensillos silicona",price:1900,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/a9c94a9b-df01-46ba-a84a-785622ea2d0e1-d7b494b686212f008f16379610760673-480-0.jpeg",description:"Utensilios de silicona con mango de madera.",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/a9c94a9b-df01-46ba-a84a-785622ea2d0e1-d7b494b686212f008f16379610760673-640-0.jpeg",category:"Cocina"},
    {id:"3",productName:"Individual Praia Set x 4",price:7200,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/individual-praia11-62c3e22bb6f99d342e16400293915426-480-0.jpeg",description:"INDIVIDUAL FIBRAS NATURALES. MEDIDAS: 40 X H1 CM. VIENEN EN SET DE 4 INDIVIDUALES.",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/individual-praia11-62c3e22bb6f99d342e16400293915426-640-0.jpeg",category:"Deco"},
    {id:"4",productName:"Tabla Marmol Rayada",price:8500,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/tabla-marmol-rayada1-e1a80dfb0df36d562d16400312720130-480-0.jpeg",description:"Tabla marmol y madera. Medidas 43 x 22",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/tabla-marmol-rayada1-e1a80dfb0df36d562d16400312720130-1024-1024.jpeg",category:"Cocina"},
    {id:"5",productName:"Bandeja Mau Negra",price:6250,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/df169aa5-f187-4c8b-b765-dba1f649d06f-16bf7ae9c43da1b5e916403103926803-480-0.jpeg",description:"Bandeja de bambu",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/df169aa5-f187-4c8b-b765-dba1f649d06f-16bf7ae9c43da1b5e916403103926803-1024-1024.jpeg",category:"Deco"},
    {id:"6",productName:"Almohadon rayado",price:5500,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/3136b25d-4b7a-49f9-ae5e-5e3bf94300d0-75c73b603f971ae70316402255158066-480-0.jpeg",description:"Almohadon 100% algodon. Panama. Prewashed. Medidas 50x70",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/3136b25d-4b7a-49f9-ae5e-5e3bf94300d0-75c73b603f971ae70316402255158066-1024-1024.jpeg",category:"Textil"},
    {id:"7",productName:"Pillow rayado",price:12900,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/whatsapp-image-2021-05-20-at-17-10-52-31-6f83e1b763c78ad08816215431015458-240-0.jpeg",description:"Pillow relleno de guata color crudo con rayado alternado gris.",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/whatsapp-image-2021-05-20-at-17-10-52-31-6f83e1b763c78ad08816215431015458-640-0.jpeg",category:"Textil"},
    {id:"8",productName:"Florero carrara dorado",price:3400,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/whatsapp-image-2021-06-03-at-17-41-071-682dd3995fbc2adb5a16227548574829-480-0.jpeg",description:"Florero carrara con detalles en dorado",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/211/products/whatsapp-image-2021-06-03-at-17-41-071-682dd3995fbc2adb5a16227548574829-640-0.jpeg",category:"Deco"},
    {id:"9",productName:"Dispenser Piedra Tramado",price:2700,stock:10,pictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/388750/388750_1.jpg?v=1.2&w=340",description:"Dispenser Piedra Tramado",bigPictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/388750/388750_2.jpg?v=1.3",category:"Baño"},
    {id:"10",productName:"Alfombra Simil Piedra",price:2600,stock:10,pictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/381336/381336_1.jpg?v=1.2&w=340",description:"ALFOMBRA SIMIL PIEDRA (varios colores)",bigPictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/381336/381336_1.jpg?v=1.3",category:"Baño"},
    {id:"11",productName:"Dispenser Liso Plastico",price:1190,stock:10,pictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/347137/347137_1.jpg?v=1.2&w=340",description:"DISPENSER LISO PLASTICO. Medidas: 33cm de altura, 22cm de ancho, 18,5cm de profundidad.",bigPictureUrl:"https://imagenes.krimaxsoft.com/simply/SUC_100/IMG/PRD/347137/347137_4.jpg?v=1.3",category:"Baño"},
    {id:"12",productName:"Maceta gota small",price:5000,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/674cf39d-fa52-4fa0-884b-3d202c59b436_nube-6ece17c7c054ce7f3915740214232807-320-0.jpg",description:"Maceta de fibra de vidrio apta para uso interior y exterior.",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/674cf39d-fa52-4fa0-884b-3d202c59b436_nube-6ece17c7c054ce7f3915740214232807-1024-1024.jpg",category:"Naturaleza"},
    {id:"13",productName:"Maceta tradicional medium",price:5000,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/pic_20200301_215547-fa70dc7d2ea9e9099115831105589207-320-0.jpg",description:"Maceta de plastico rotomoldeado . Es super liviana",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/pic_20200301_215547-fa70dc7d2ea9e9099115831105589207-1024-1024.jpg",category:"Naturaleza"},
    {id:"14",productName:"Combo Areca",price:6900,stock:10,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/pic_20200301_215759-4b8c0ee71c9877fb9b15831106938055-320-0.jpg",description:"Incluye: 2 pies de hierro + 2 macetas de PVC (elegir el color de la maceta y el color de los hierros, blanco o negro ambas cosas)",bigPictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/320/373/products/pic_20200301_215759-4b8c0ee71c9877fb9b15831106938055-1024-1024.jpg",category:"Naturaleza"}
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
