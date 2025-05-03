// CLASE 3
// ejercicio 7
// // Escribe una función que tome un número como argumento y retorne su factorial. 
//Utiliza una estructura if para manejar el caso base.
// function factorial(a){
//     if (a===0){
//       return(1)
//     }
//     return a* factorial(a-1)  
//   }
//   console.log(factorial(4))
//   console.log(factorial(1))
// Ejericio 8:
// Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".
// let nombre = prompt("ingrese su nombre");
// function saludar(nombre){
//     if (nombre== "")
//         return ("Hola invitado")
//     return("Hola " + nombre)
// }
// console.log(saludar(nombre))
// EJERCICIO 9
// Escribe una función que tome un número y retorne true si es par o false si es impar. 
// Utiliza el operador módulo (%) y un operador ternario.
// function parimpar(a){
//     if ((a%2)==1){
//         return false
//     }
//     if ((a%2)==0){
//         return true
//     }
// }
// console.log(parimpar(15))
// EJERCICIO 9
// Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. 
// Usa una estructura switch.
// listo
// Ejercicio 11
// Crea una función recursiva que calcule la suma de los números de 1 hasta n.
// function sumar(a){
//     if (a==0){
//         return a
//     }
//     return a + sumar(a-1)
// }
// console.log(sumar(10
// ))
// EJERCICIO 12
// Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres, 
// contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones
// function comprobar(a){
//     if ((a.length)<8){
//         return "incorrecto";
//     }
//     if(!(/[A-Z]/.test(a))){
//         return "incorrecto";
//     }  
//     if (!(/[0-9]/.test(a))){
//         return "incorrecto";
//     }
//     else{
//         return "contraseña guardada";
//     }
// }
// console.log(comprobar("holaq=03AQd"))
// 2 tipos de ejercicio 11
// function comprobar(a){
//     if((a.length <8)) return "No es larga"
//     if (!(/[A-Z]/.test(a))) return "no hay mayusuculas"
//     if(!(/[0-9]/ .test(a))) return "Necesita numero"
//     return "contrseañ guardada"
// }
// console.log(comprobar("hoaelad22"))