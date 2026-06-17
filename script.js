const productos = [
{
nombre:"Camiseta Premium",
precio:45000,
categoria:"ropa",
agotado:false,
imagen:"https://picsum.photos/300/300?1"
},
{
nombre:"Gorra Urbana",
precio:30000,
categoria:"accesorios",
agotado:false,
imagen:"https://picsum.photos/300/300?2"
},
{
nombre:"Reloj Elegante",
precio:120000,
categoria:"accesorios",
agotado:true,
imagen:"https://picsum.photos/300/300?3"
}
];

let carrito=[];

function mostrar(lista){

let html='';

lista.forEach((p,i)=>{

html+=`
<div class="card">

<img src="${p.imagen}">

<div class="info">

${p.agotado ? '<div class="agotado">AGOTADO</div>' : ''}

<h3>${p.nombre}</h3>

<p class="precio">
$${p.precio.toLocaleString()}
</p>

${!p.agotado
? `<button class="btn" onclick="agregar(${i})">
Agregar al carrito
</button>`
: ''}

</div>

</div>
`;
});

document.getElementById("productos").innerHTML=html;
}

mostrar(productos);

function agregar(i){

carrito.push(productos[i]);

actualizar();
}

function actualizar(){

let total=0;
let html='';

carrito.forEach(p=>{

total+=p.precio;

html+=`
<p>${p.nombre}
- $${p.precio.toLocaleString()}</p>
`;
});

document.getElementById("listaCarrito").innerHTML=html;
document.getElementById("total").innerText=
total.toLocaleString();

document.getElementById("contador").innerText=
carrito.length;
}

function toggleCarrito(){

document
.getElementById("carrito")
.classList.toggle("activo");
}

function buscarProductos(){

let texto=
document
.getElementById("buscador")
.value
.toLowerCase();

let resultado=
productos.filter(p =>
p.nombre.toLowerCase().includes(texto)
);

mostrar(resultado);
}

function filtrar(cat){

if(cat==="todos"){
mostrar(productos);
return;
}

mostrar(
productos.filter(
p => p.categoria===cat
)
);
}

function comprarWhatsapp(){

let mensaje =
"Hola, deseo comprar:%0A%0A";

carrito.forEach(p=>{

mensaje +=
`${p.nombre} - $${p.precio}%0A`;

});

window.open(
`https://wa.me/573012245428?text=${mensaje}`
);
}
