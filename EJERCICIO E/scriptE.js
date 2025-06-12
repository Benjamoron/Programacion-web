// ✅ Ejercicio E: Lista de Tareas Pendientes
// Instrucciones:

// Crear una aplicación sencilla para gestionar tareas pendientes.

// Permitir agregar tareas con una descripción (campo de texto).

// Al agregarlas, deben aparecer en una lista en pantalla.

// Cada tarea debe tener un botón para marcarla como completada (solo cambiar el estilo de texto, por ejemplo, tacharlo).

// Opcional: incluir un botón para eliminar tareas individuales.

// La información puede almacenarse en un array.
const lista = []
const btnAgregar = document.getElementById("AgregarTarea")
btnAgregar.addEventListener("click", agregaritem)
function agregaritem(){
    let inputTarea = document.getElementById("tarea")
    let tarea = inputTarea.value
    if (tarea === ""){
        alert("No puede estar Vacio")
        return
    }
    lista.push(tarea)
    inputTarea.value = ""
    mostrarlista()
}
function mostrarlista(){
    const ul = document.getElementById("ListaTareas")
    ul.innerHTML = ""
    lista.forEach(function(item,index){
        let li = document.createElement("li")
        let btnCompletar = document.createElement("button")
        let btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar"
        btnCompletar.textContent = "Marcar completada"
        li.textContent = item + " "
        btnCompletar.addEventListener("click",function(){
            li.classList.toggle("completada")
        })
        btnEliminar.addEventListener("click",function(){
            lista.splice(index,1)
            mostrarlista()
        })
        li.appendChild(btnCompletar)
        li.appendChild(btnEliminar)
        ul.appendChild(li)
    
    })

}