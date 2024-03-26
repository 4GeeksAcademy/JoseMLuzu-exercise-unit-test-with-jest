// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = Math.floor(valueInDollar / 1.07 * 156.5);
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPounds = Math.floor(valueInYen / 156.5 * 0.87);
    // Retornamos el valor en libras
    return valueInPounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

