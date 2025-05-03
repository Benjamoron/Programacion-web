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
function parimpar(a){
    if ((a%2)==1){
        return "impar"
    }
    if ((a%2)==0){
        return "par"
    }
}
const numeros = [8,10,23,12,15,17,18]
numeros.forEach(function(a) {
    console.log(`${a} es ${parimpar(a)}`)
})
numeros.find(function(a){
    co
})
