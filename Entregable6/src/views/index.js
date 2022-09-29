const socketClient = io()

const formulario = document.getElementById('formulario')
const input = document.getElementById('info')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('hola mundo')
    if(input.value){
        socketClient.emit('chat',input.value)
    }
})