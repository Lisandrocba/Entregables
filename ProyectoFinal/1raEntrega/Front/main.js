const user = true;
const contenedorPagina = document.getElementById('contenedorPagina');
const contenedorHome = document.getElementById('contenedorHome')
const formAgregar = document.getElementById('formAgregar')
const listProd = document.getElementById('listProd')

window.onload = getData()

function getData(){
    fetch('http://localhost:8080/productos')
    .then(res => res.json())
    .then(data => printData(data.productos))
}

function printData(data){
    const items = document.createElement('div');
    items.className = 'row'

    data.forEach(item=>{
        items.innerHTML += createDomElement(item)
        listProd.append(items)
    })
}

function createDomElement(item){
    const itemHtml = `
    <div class="card m-3" style="width: 18rem;">
        <img src=${item.fotoProducto} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.nombreProducto}</h5>
            <p class="card-text">${item.descripcionProducto}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.precioProducto}</li>
        <li class="list-group-item">${item.stockProducto}</li>
        <li class="list-group-item">${item.codigoProducto}</li>
        </ul>
        <div class="card-body">
        <button type="button" class="btn btn-dark" onClick="return Editar(${item.id})">Editar</button>
        <button type="button" class="btn btn-dark" onClick="return eliminarProducto(${item.id})">Eliminar</button>
        </div>
    </div>
    `
    return itemHtml
}

function eliminarProducto(id){
    fetch(`http://localhost:8080/productos/${id}`, {
        method: 'DELETE'
    } ).then(res =>res.json()).then(data=>console.log(data)).catch(e=>console.log(e))
}

if(!user){
    contenedorPagina.style.display = 'block';
    contenedorHome.style.display = 'none';
}else{
    contenedorPagina.style.display = 'none';
    contenedorHome.style.display = 'block';
}