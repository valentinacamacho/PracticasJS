/**
 * Ejercicio 5: Mensajes personalizados
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick)
 /**
* Ejercicio 5: Mensajes personalizados
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick)
*/

let nom=prompt("Ingresa el nombre")

if(nom === null || nom === ""){
    alert("Opción no valida, ingresa el nombre")
}else{
    function showmessage(){
        alert("¡Hola, " + nom + "! Espero que estes disfrutando de JavaScript. " )
    }
}






