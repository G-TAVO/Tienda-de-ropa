const productos = [

{
id:1,
nombre:"Ice Blue",
precio:12000,
imagen:"img/ice-blue.jpg"
},

{
id:2,
nombre:"Ice Fresa",
precio:12000,
imagen:"img/ice-fresa.jpg"
},

{
id:3,
nombre:"Ice Mango",
precio:12000,
imagen:"img/ice-mango.jpg"
},

{
id:4,
nombre:"Sundae Brownie",
precio:15000,
imagen:"img/brownie.jpg"
},

{
id:5,
nombre:"Ice Oreo",
precio:13000,
imagen:"img/oreo.jpg"
},

{
id:6,
nombre:"Ice Arcoíris",
precio:14000,
imagen:"img/arcoiris.jpg"
}

];

let carrito = [];

const contenedor =
document.getElementById("productos");

function cargarProductos(){

let html = "";

productos.forEach(producto => {

html += `

<div class="producto-card">

<img src="${producto.imagen}"
alt="${producto.nombre}">

<div class="producto-info">

<h3>${producto.nombre}</h3>

<p class="precio">
$${producto.precio.toLocaleString()}
</p>

<button
onclick="agregarCarrito(${producto.id})">

Agregar

</button>

</div>

</div>

`;

});

contenedor.innerHTML = html;

}

function agregarCarrito(id){

const producto =
productos.find(p => p.id === id);

carrito.push(producto);

actualizarCarrito();

}

function actualizarCarrito(){

const lista =
document.getElementById("listaCarrito");

const contador =
document.getElementById("contador");

const total =
document.getElementById("total");

lista.innerHTML = "";

let suma = 0;

carrito.forEach((producto,index)=>{

suma += producto.precio;

lista.innerHTML += `

<div class="item-carrito">

<img src="${producto.imagen}"
width="50">

<div>

<h4>${producto.nombre}</h4>

<p>
$${producto.precio.toLocaleString()}
</p>

</div>

<button
onclick="eliminarProducto(${index})">

✖

</button>

</div>

`;

});

contador.textContent =
carrito.length;

total.textContent =
suma.toLocaleString();

}

function eliminarProducto(index){

carrito.splice(index,1);

actualizarCarrito();

}

function abrirCarrito(){

document
.getElementById("carritoPanel")
.classList.add("activo");

}

function cerrarCarrito(){

document
.getElementById("carritoPanel")
.classList.remove("activo");

}

document
.querySelector(".btn-whatsapp")
.addEventListener("click",()=>{

if(carrito.length===0){

alert(
"Tu carrito está vacío"
);

return;

}

let mensaje =
"Hola, deseo pedir:%0A%0A";

carrito.forEach(item=>{

mensaje +=
`${item.nombre} - $${item.precio}%0A`;

});

window.open(
`https://wa.me/573012245428?text=${mensaje}`,
"_blank"
);

});

cargarProductos();
