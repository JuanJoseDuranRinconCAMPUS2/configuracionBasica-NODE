
// muestra la url
// console.log(import.meta.url);

// detiene el programa y envia solo el primer log
// console.log("mensaje 1");
// process.exit();
// console.log("mensaje 2");

// process.stdin.setEncoding('utf8');
// console.log("ingrese un dato\n");
// // input por consola
// process.stdin.on("data", (input)=>{
//     console.clear();
//     console.log(input);
//     process.exit();
// });

// import func from "./cliente.js";
// console.log(func());

// let json = require("./data.json")
// console.log(json);

// let config = require("./cliente");
// console.log(config.func());

// console.log("wenas :$");

// import fs from 'fs';

// fs.writeFile("files/info.txt", "Fred", "utf-8", (err)=>{
//     console.log(err);
// });

/* ejercicio del trainer*/
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su edad: ', (edad) => {
        rl.question('Ingrese su correo electrónico: ', (email) => {
            const myData = {
                nombre: nombre,
                edad: edad,
                email: email
            };

            const jsonData = JSON.stringify(myData);
            fs.writeFile('informacion/data.json', jsonData, (err) => {
                if (err) {
                console.error('Error al crear el archivo JSON:');
                } else {
                console.log('Archivo JSON creado exitosamente.');
                }
            rl.close();
            });
        });
    });
});
