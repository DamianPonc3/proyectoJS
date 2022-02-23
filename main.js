//variables

const contenedorProductos = document.querySelector('.contenedor-productos');

let formulario = document.querySelector("#form");
let inputName = document.querySelector("#name");
let inputPrice = document.querySelector("#price");
let inputStock = document.querySelector("#stock")
let valorIngresado = "";


//eventos

document.addEventListener('DOMContentLoaded', () => {
    agregarProductos();
})



//funciones


class Producto {
    constructor(producto1, precio, stock) {
        this.nombre = producto1;
        this.precio = precio;
        this.cantidad = stock;
        this.disponible = true;
    }

    sumarIva() {
        return this.precio * 1.21;
    }

    vender() {
        this.disponible = false;
    }
}

let arrProductos = [];



console.log(arrProductos);

function agregarProductos() {

    for (const producto of arrProductos) {
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');

        const titulo = document.createElement('h2');
        titulo.classList.add('nombre-producto');
        titulo.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.classList.add('precio-producto');
        precio.textContent = (producto.precio + ' Pesos');

        const cantidad = document.createElement('p');
        cantidad.classList.add('stock-producto');
        cantidad.textContent = (producto.cantidad + ' Unidades');

        divProducto.appendChild(titulo);
        divProducto.appendChild(precio);
        divProducto.appendChild(cantidad);

        contenedorProductos.appendChild(divProducto);
        console.log(contenedorProductos)
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    valorIngresado = inputName.value + " " + inputPrice.value + " " + inputStock.value;
    contenedorProductos.innerHTML = `<strong>${valorIngresado}</strong>`;
    inputName.value= "";
    inputPrice.value = "";
    inputStock.value = "";
});