/**
 * Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
 */

alert("La fundación KeyCode brinda la posibilidad de estudiar Ingenieria de Sistemas a jóvenes mayores de 18 años con la posibiliadad de ganarse una Beca Academica personas que sean de toronto canada.")

alert("Si, tienes estos requisitos ¡Postulate...! Es una gran oportunidad")

let user,age, country, departament;

function registerData(){
     user=prompt("Ingrese su nombre")
     age=prompt("Ingrese su edad")
     country=prompt("Ingrese su País")
     departament=prompt("Ingrese el departamento de su país")   
}

function results(){

    if(user === null || user === "" || country === null || country === ""  || departament === null || departament === ""){
        alert("Opción no valida")
    }else{
        if(age >= 18 &&  departament === "toronto" && country === "canada" || country === "canadá" ){
            alert(user + ", su edad aplica a la beca academica  en la ciudad " + departament + " y el país " + country + "permite que ingrese a unas de nuestras becas de Ingeniería de Sistemas. ¡Felicidades !")
        }else if(age <=18 &&  departament === "toronto" && country === "canada" || country === "canadá"){
            alert( use + " su edad no aplica, pero la cíudad " + departament + " y el país " + country + "aplican a nuestras becas academicas. Intentalo cuando seas mayor de edad " )
        }else if(age >= 18){
            alert( user + " su edad aplica pero la cíudad " + departament + " y el país " + country + " no permite que ingreses a una de nuestras becas academicas. Gracias hacer el intento ")
        }else{
            alert("No cumples con los requisitos requeridos. Gracias por intentarlo")
        }
    }
 
}





