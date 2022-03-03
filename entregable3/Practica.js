const mostrarPalabras = (texto, cb, time = 1000) =>{
    return new Promise((resolve) =>{
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
                resolve(i)
            }
        }
    
        const timer = setInterval(recorrerTexto, time)
    })
   
}

const funcionFinalizado =()=> console.log('Proceso Completo')

const invocarFuncion = async() =>{ 
    let tot = 0; 
    tot += await mostrarPalabras("La tercera guerra mundial", funcionFinalizado, 300); 
    tot += await mostrarPalabras("no puede suceder", funcionFinalizado, 300); 
    tot += await mostrarPalabras("por el bien de la humanidad", funcionFinalizado, 300);

console.log(`proceso completo`) 
console.log(`El total de palabres fue= ${tot}`)
};

invocarFuncion();




