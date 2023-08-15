/**
 * Ejercicio 2: Conversión a minúsculas
Solicita al usuario que ingrese una palabra o frase utilizando prompt(). Luego, muestra la entrada del usuario en minúsculas utilizando toLowerCase().
 */

let nom=prompt("Ingresa una palabra");

if(nom === null || nom === ""){
    alert("Opción invalida")
}else{
    nom=nom.toLowerCase();
    document.write("El nombre que ingresaste es: " + nom)
}
    

