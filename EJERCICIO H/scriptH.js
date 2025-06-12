// ✅ Ejercicio H: Comparador de Números
// Instrucciones:

// Crear un formulario con dos campos numéricos.

// Al presionar un botón, mostrar:

// Cuál número es mayor.

// Si son iguales, indicar que lo son.

// Si algún campo está vacío, mostrar mensaje de advertencia.

// Mostrar el resultado debajo del formulario, sin alertas.
let inputnumero1 = document.getElementById("num1")

let inputnumero2 = document.getElementById("num2")


let conclusion = document.getElementById("Conclusiones")


const btnCalcular = document.getElementById("calcular")
btnCalcular.addEventListener("click",function(){
    let numero1 = parseInt(inputnumero1.value)

let numero2 = parseInt(inputnumero2.value)

  if (  isNaN(numero1) ||  isNaN(numero2)){
    alert("los campos no pueden estar vacios")
    return
  }
  if (numero1==numero2){
    conclusion.textContent = `Los dos Numeros son iguales`
  }
  if (numero1>numero2){
    conclusion.textContent = `${numero1} es mayor que ${numero2}`
  }
  if (numero2>numero1){
    conclusion.textContent = `${numero2} es mayor que ${numero1}`
  }
})