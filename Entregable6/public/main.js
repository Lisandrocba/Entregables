let socket = io.connect('http://localhost:3000', {'forceNew' : true});


socket.on('productos', (data)=>{
    render(data)
})

socket.on('listaChat', data=>{
    renderChat(data)
})

const render =(productos)=>{
    const html = productos.map(prod=>{
        return(`
                <tr>
                    <td>${prod.nombreProducto}</td>
                    <td>${prod.precioProducto}</td>
                    <td>${prod.stockProducto}</td>
                </tr>
        `)
    }).join(' ')
    document.getElementById('listaProductos').innerHTML = html
}

const renderChat =(chat)=>{
    const html = chat.map(item=>{
        return(`
                <tr>
                    <td>${item.email}</td>
                    <td>${item.msj}</td>
                    <td>${item.hora}</td>
                </tr>
        `)
    }).join(' ')
    document.getElementById('chat').innerHTML = html
}

const addProd =(e)=>{
    e.preventDefault()
    let payload = {
        nombreProducto : document.getElementById('nombreProducto').value,
        precioProducto : document.getElementById('precioProducto').value,
        stockProducto : document.getElementById('stockProducto').value
    }

    socket.emit('nuevoProducto', payload)
}

const addMsj =(e)=>{
    e.preventDefault()
    let payload = {
        email : document.getElementById('email').value,
        msj: document.getElementById('msj').value,
        hora: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    }
    socket.emit('chat', payload)
}