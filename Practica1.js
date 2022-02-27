class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = '',
        this.apellido = '',
        this.libros = [],
        this.mascotas = []
    }

    getFullName(){
        return console.log(`mi nombre es ${this.nombre}, ${this.apellido}`);
    }

    addMascora(arregloMascotas){
        this.mascotas =  [...this.mascotas ,{arregloMascotas}]
        console.log(this.mascotas)
    }

    getMascotas(){
        const mascota = this.mascotas
        return console.log(mascota.length)
    }

    addBook(autor,book){
        if(this.libros.length === 0) 
        this.libros = [{autor: autor, book: book}]    
        else
        this.libros = [...this.libros, {autor: autor, book: book}]
    }

    getBook(){
        this.libros.map(libro => console.log(`nombre del autos: ${libro.autor}, nombre del libro: ${libro.book}`))
    }
}

const usuario1 = new Usuario('lisandro', 'cordoba');

const mascota1={
    nombre: 'pochi',
    edad: 7,
    color: 'negro'
}

const mascota2={
    nombre: 'uma',
    edad: 10,
    color: 'dorada'
}

usuario1.getFullName();

usuario1.addMascora(mascota1);
usuario1.addMascora(mascota2);

usuario1.getMascotas();
usuario1.addBook('lisandro', 'libro')
usuario1.addBook('jose', 'cuento')

usuario1.getBook();