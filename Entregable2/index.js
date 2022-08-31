import fs from 'fs';

// Sync

export class Archivo {
    productos=[];
    contenido;
    contador = 0;
    
    constructor(nombre){
        this.nombre = nombre
    }

    leer(){
        if(fs.existsSync(this.nombre)){
            const respuesta = fs.readFileSync(this.nombre, 'utf-8')
            return JSON.parse(respuesta)
        }else{
            console.log(this.productos)
        }
    }

    borrar(){
        fs.unlinkSync(this.nombre)
    }

    guardar(product){
        this.contador ++;
        this.productos.push(Object.assign(product, {id: this.contador}));
        try{
            if(fs.existsSync(this.nombre)){
                    this.contenido = fs.readFileSync(this.nombre, 'utf-8')
                    this.contenido = JSON.parse(this.contenido)
                    fs.unlinkSync(this.nombre)
                    fs.writeFileSync(this.nombre, `${JSON.stringify(this.productos)}`)
                    return console.log('Archivo actualizado') 
                }else{
                    fs.writeFileSync(this.nombre, `${JSON.stringify(this.productos)}`)
                    return console.log('Archivo Creado')
                }
            }catch(e){
                console.log(e)
            }  
    }
} 

// async

/* export class Archivo {
    productos=[];
    contenido;
    contador = 0;
    
    constructor(nombre){
        this.nombre = nombre
    }

    leer(){
        if(fs.existsSync(this.nombre)){
            this.contenido =(fs.readFileSync(this.nombre, 'utf-8'))
            return this.contenido
        }else{
            console.log(this.productos)
        }
    }

    async borrar (){
        await fs.promises.unlink(this.nombre)
    }

    async guardar (product){
        
            this.contador ++;
            this.productos.push(...this.productos, product, {id: this.contador});
            try{
                if(fs.existsSync(this.nombre)){
                        this.contenido = fs.readFile(this.nombre, 'utf-8')
                        this.contenido = JSON.parse(this.contenido)
                        await fs.promises.unlink(this.nombre)
                        await fs.promises.writeFile(this.nombre, `${JSON.stringify(this.productos)}`)
                        return console.log('Archivo actualizado') 
                    }else{
                        await fs.promises.writeFile(this.nombre, `${JSON.stringify(this.productos)}`)
                        return console.log('Archivo Creado')
                    }
                }catch(e){
                    console.log(e)
                }  
        

    }
}
 */

//archivo1.guardar(producto2)
/*
archivo1.leer() */


