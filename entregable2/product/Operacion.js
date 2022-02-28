export const operacion = (num1, num2, nombre) => {
    if (nombre === 'suma')
        return num1 + num2;
    else if (nombre === 'resta')
        return num1 - num2;
    else
        return console.log('operacion no registrada, solo se pude sumar y restar');
};
