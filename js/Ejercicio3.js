/**
 * Ejercicio 3: Calculadora de edad
Pide al usuario su edad y el algoritmo debe responder si es mayor de edad o menor de edad;
 */

let nombre=prompt("Ingresa tu nombre");
const age = parseInt(prompt("Digite tu edad"));

if(nombre === null || nombre === ""){
  alert("Opción invalida")
  }else if(age === ""){
    alert("Ingresa el dato de edad")
  }else{
    nombre=nombre.toLowerCase();
      if(age >= 18){
        alert( nombre + " tienes " + age + " eres mayor de edad")
      }else{
          alert( nombre + " tienes " + age + " eres menor de edad")
      }
}

