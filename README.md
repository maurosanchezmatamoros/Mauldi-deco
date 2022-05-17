# <img src="./public/images/logoChico.jpg" width="50" height="50" /> Mauldi Deco
## _Proyecto de e-commerce_

Mauldi es un proyecto de e-commerce realizado íntegramente con React.js, que obtiene los datos ingresados en la plataforma Firebase de Google.

## _Componentes_

- **NavBar:** Compuesto por el Logo de la empresa, las categorías de productos (obtenidas con el hook UseEffect, por medio de una llamada asíncrona a la base de datos de Firebase "categories") y el componente "CartWidget" (Visible solamente cuando haya productos en el carrito).
    - **CartWidget:** Obtiene de CartContext la cantidad de elementos incorporados al carrito con la función "getQuantity".
***
- **ItemListContainer:** Aquí por medio de un useEffect con una llamada asíncrona a la base de datos de Firebase "products", se obtienen todos los productos. En el caso en que se haya seleccionado una categoría, por medio del hook useParams, se obtiene el dato de la barra de navegación.
    - **ItemList:** Obtiene los productos del contenedor anterior, y por medio del método map, despliega un contenedor "Item" por cada producto.
        - **Item:** Recibe los datos del producto a mostrar, y se muestra una especie de "card" del producto con todos estos datos. La imagen posee un link al detalle del producto.
***
- **ItemDetailContainer:** Aquí por medio de un useEffect con una llamada asíncrona a la base de datos de Firebase "products", buscamos el producto cuyo "id" sea igual al "id" de la barra de navegación que obtenemos por useParams.
    - **ItemDetail:** Recibe todos los datos del producto del contenedor anterior y muestra todos los detalles, con la imagen en alta resolución. Además se muestra el componente "ItemCount" que permite elegir la cantidad de unidades para agregarlas al carrito (Al agregar al carrito, se muestran dos botones, uno para ir al carrito y otro para ir a la sección inicial; al agregar cero unidades muestra una alerta). Una función "handleAddToCart" genera un objeto con los detalles del producto, sumándole la cantidad que recibe como "count" del ItemCount, y mediante la función "addItem" (importada de CartContext) envía el objeto al "cart".
        - **ItemCount:** Recibe los datos del stock del producto, muestra un simple contador que envía el dato "count" que luego serán la cantidad de productos a agregar al carrito (que no supere el stock).
***
- **Cart:** Obtiene de CartContext el carrito "cart", si está vacío devuelve el mensaje "No hay productos en el carrito". De lo contrario, muestra mediante el método map, el "ItemCart" por cada producto. También, muestra un botón de "vaciar el carrito" con la función "clearCart" (importada de CartContext), y abajo, el precio total que obtiene con la función "getTotal" (importada de CartContext). Finalmente dos botones, "Finalizar compra" con un link al form con la orden de compra y "Seguir comprando" con un link a la página principal.
    - **ItemCart:** Recibe los datos del producto y los muestra en una "card" donde se ve una foto y dos botones para aumentar la cantidad o disminuirla, mediante las funciones "addQuantity" y "subtractQuantity" (ambas importadas de CartContext), el nombre y la descripcion del producto, y finalmente muestra el precio unitario y el precio total. Un boton tipo "X" para eliminar el producto del carrito, con la función "removeItem" (importada de CartContext).
***
- **Order:** Genera un objeto "order", con los datos obtenidos en el form acerca del comprador "buyer", los productos del cart obtenidos de CartContext, la fecha con la funcion newDate, y el total con la función "getTotal" de CartContext.
Se hace una llamada a la base de datos de Firebase y se buscan los productos según id que coinciden con el cart y se verifica que la cantidad de la orden de compra no supera a la del stock, de cumplirse, por medio de "addDoc" se genera (si es que no existe aún) la collection "orders" y se emite un nuevo documento con el objeto "order" creado anteriormente. Finalmente se vacia el carrito con la funcion "clearCart" (importada de CartContext).
***
- **CartContext:** Componente utilizado para abstraer las funciones a utilizar sobre el cart, y para acceder al mismo desde cualquier sección. Contiene las funciones:
    - addItem: agrega un producto al carrito, recibo como parámetro el producto.
    - getQuantity: por medio del método forEach busca las cantidades de los productos agregados al carrito y las suma en un contador.
    - isInCart: recibe como parámetro el id de un producto y con el método some devuelve un valor booleano true si existe en el cart.
    - clearCart: genera un cart vacío.
    - removeItem: recibe como parámetro un id y guarda en una variable todos los productos que no coincidan con ese id, luego setea el carrito con esa variable.
    - getTotal: con el método forEach, multiplica cantidad * precio, y va sumando los totales.
    - addQuantity: recibo un id como parámetro, busca ese producto en el cart y le agrega una unidad a la cantidad y la guarda en la variable "product". Luego guarda en otra variable "products" todos los productos del carrito menos el del id recibido. Finalmente setea el "cart" con la suma de ambas variables.
    - subtractQuantity: Funciona igual que addQuantity pero resta una unidad.
***
- **Loader:** Un simple elemento con una animación que gira demostrando que se está aguardando la carga de otro objeto. Se agrega en la secciones que poseen llamadas asíncronas.
***

## _Datos de Firebase_

### "categories"
description: (Nombre de la categoría tal como se va a mostrar en el NavBar).
order:(Número de referencia de la categoría)
### "products"
productName: (Nombre del producto)
description: (Descripcion del producto, con todos sus detalles, medidas, colores, etc)
category: (Número de la categoría)
price: (Precio del producto, sin el signo pesos)
pictureUrl: (URL externa donde está la foto miniatura)
bigPictureUrl: (URL externa donde está la foto grande)
stock: (Stock del producto)
### "orders"
buyer: (contiene: cel/email/lastname/name, todos los datos ingresados por el cliente)
date: (fecha y hora en que se generó la orden de compra)
items: (un array de objetos con los productos agregados a la orden de compra y todos sus detalles, incluida quantity, que es la cantidad de unidades compradas de ese producto)
total: (importe total de la compra)
***

## _Pendientes_
- Realizar una sección de admin donde gestionar las ordenes de compra, agregar productos nuevos, eliminar otros y manejar el stock.
- Agregar footer a la aplicación.
- Realizar un login a la aplicación.