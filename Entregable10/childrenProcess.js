function numeroRandom (cantidad){
    const result = []
    for(const i=0; i<cantidad; i++){
        result.push(Math.random() * (1000 - 1) + 1)
    }
    return result
} 


process.on("menssage",cant=>{
    console.log('iniciando proceso')
    //const resultado = numeroRandom(2);
    process.send(2)
    console.log('terminando subprocesso');
    process.exit()
})
