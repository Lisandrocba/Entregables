const operaciones = async(num1: number, num2: number, nombre: string) => {
    let oper = await import('./Operacion.js')
    let resultado = oper.operacion(num1,num2, nombre);
    return console.log(resultado);
}

operaciones(2,3,'suma');