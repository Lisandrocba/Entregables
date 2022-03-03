const mostrarPalabras = (texto, cb, time = 1000) =>{
    let i = 0;
    let j = texto.split(" ");


    const recorrerTexto =()=>{
        if(i < j.length){
            console.log(j[i]);
            i++;
        }
        else{
            clearInterval(timer);
            cb();
            console.log('Cantidad de palabras: '+i)
        }
    }

    const timer = setInterval(recorrerTexto, time)
}

const funcionFinalizado =()=> console.log('Proceso Completo')

setTimeout(()=>{
    mostrarPalabras('hola soy lisandro', funcionFinalizado)
},0)

setTimeout(()=>{
    mostrarPalabras('vivo en la ciudad de cosquin', funcionFinalizado)
},0)

setTimeout(()=>{
    mostrarPalabras('hincha perro de river', funcionFinalizado)
},0)