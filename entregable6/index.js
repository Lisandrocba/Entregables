import fs from 'fs';

// Sync

/* class Archivo {
    productos=[];
    contenido;
    contador = 0;
    
    constructor(nombre){
        this.nombre = nombre
    }

    leer(){
        if(fs.existsSync(this.nombre)){
            console.log(fs.readFileSync(this.nombre, 'utf-8'))
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
} */

// async

class Archivo {
    productos=[];
    contenido;
    contador = 0;
    
    constructor(nombre){
        this.nombre = nombre
    }

    async leer(){
        if(fs.existsSync(this.nombre)){
            console.log(await fs.promises.readFile(this.nombre, 'utf-8'))
        }else{
            console.log(this.productos)
        }
    }

    async borrar (){
        await fs.promises.unlink(this.nombre)
    }

    async guardar (product){
        
            this.contador ++;
            this.productos.push(Object.assign(product, {id: this.contador}));
            try{
                if(fs.existsSync(this.nombre)){
                        this.contenido = fs.readFileSync(this.nombre, 'utf-8')
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

const producto1 = { title: 'cafe', price: 300, thimbnail: 'url.foto'}
const producto2 = { title: 'fideos', price: 180, thimbnail: 'url.foto2'}

const archivo1 = new Archivo('productos.txt');
//archivo1.guardar(producto1)
//archivo1.guardar(producto2)


