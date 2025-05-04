// CLASE 4
// EJERCICIO 1
// Escribe un ciclo for que imprima los números pares entre 1 y 20.
// for (let i = 0; i<5 ; i++){
//     console.log(i);
// EJERCICIO 2
// Crea un array con los nombres de tus cinco películas favoritas y 
// usa un ciclo for para imprimirlas con su respectivo número de posición (ej. "1. El Padrino").
// const peliculas = ["El padrino", "Meteoro", "Max Steel", "Benjamin", "god"]
// for (let i = 0; i< peliculas.length; i++){
//     console.log(`${i+1}. ${peliculas[i]}`)
// }
// EJERCICIO 3
// Usa el método forEach para recorrer un array de números y para cada número imprime si es par o impar.
// Utiliza el método find para buscar el primer número mayor que 20 en un array de números.
// Usa el método some para verificar si en un array de edades hay al menos una persona mayor de 18 años.
// function parimpar(a){
//     if ((a%2)==1){
//         return "impar"
//     }
//     if ((a%2)==0){
//         return "par"
//     }
// }
// const numeros = [8,10,23,12,15,17,18,34,21]
// numeros.forEach(function(a) {
//     console.log(`${a} es ${parimpar(a)}`)
// })
// const mayora20 = numeros.find( a=> a>20)
// console.log(mayora20)
// const mayora18 = numeros.some(c=> c >18);
// console.log(mayora18)
// EJERCICIOS 4
// Crea un array con los nombres de 5 países y usa un ciclo for...of para imprimir cada uno.
// const  paises= ["argentina","mexico","usa","brazil","canada"]
// let final = ""
//     for(let pais of paises){
//         final += pais + "\n"
//     }
// console.log(final)
// ]EJERCICOO 5
// Utiliza el método forEach para imprimir cada elemento de un array de números.
// const  numeros =[21,23,12,15,3,9,7,5]
// numeros.forEach(a=> console.log(a))
// EJERCICIO 6
// Usa el método find para encontrar el primer número par en un array de números.
// https://www.w3schools.com/js/js_array_some.asp
// Emplea el método some para verificar si al menos un elemento en un array es mayor que 20.
// https://www.w3schools.com/js/js_array_every.asp
// Utiliza el método every para comprobar si todos los elementos en un array son strings.
// const numeros2 =[17,9,7,6,4,2,1]
// const numeropar = numeros2.find(a=> (a%2 == 0))
// console.log(numeropar)
// const mayor15 = numeros2.some(a => a>15)
// console.log(mayor15)
// const strings = ["gola","sad","sad","sasad"]
// // primera forma
// // let hola = strings.every(a =>  typeof a === "string")
// // console.log(hola)
// // segunda froma
// let chau = strings.every(function(a){
//   return typeof a === "string"
// })
// console.log(chau)
// EJERCICIO 7 
// Crea un array de objetos que representen personas con propiedades como nombre y edad. Usa map para crear un nuevo array que contenga solo los nombres.
// const personas = [
//     {nombre : "Carlos", edad: 20},
//     {nombre: "matias", edad: 14},
//     {nombre: "benja", edad : 10},
//     {nombre: "alejo", edad :30},
// ];
// let nombres = personas.map(a => a.nombre )
// console.log(nombres)
