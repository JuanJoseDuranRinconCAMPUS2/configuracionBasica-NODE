
let config = require("./conversor");

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad de Dolares: $', (Dolares) => {
  rl.question('Ingrese a que moneda desea hacer la conversion (1)Euros (2)Libras (3)Ambas: ', (operacion) => {
        let total, totalE, totalL;
        switch (operacion){
            case '1':
                total = config.convertirDolaresAEuros(Dolares);
                console.log(`Conversion de $${Dolares} dolares a euros es igual a ${total}`);
                break;
            case '2':
                total = config.convertirDolaresALibras(Dolares);
                console.log(`Conversion de $${Dolares} dolares a libras esterlinas es igual a ${total}`);
                break;
            case '3':
                totalE = config.convertirDolaresAEuros(Dolares);
                totalL = config.convertirDolaresALibras(Dolares);
                console.log(`Conversion de $${Dolares} dolares a libras esterlinas es igual a ${totalL}`);
                console.log(`Y a euros es igual a ${totalE}`);
                break;
            default:
                console.log("Opción no válida");
                break;
        }   
    });
});