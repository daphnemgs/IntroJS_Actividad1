// Ejercicio 1
var numero = Number (prompt("Ingresa un número"));
if((numero%2)==0){
    console.log(numero + " es divisible entre 2");
} else {
     console.log(numero + " no es divisible entre 2" );
}

// Ejercicio 2
var numero = Number (prompt("Ingresa un número"));
if((numero%2)==0){
    alert(numero + " es número par");
} else {
     alert(numero + " es número impar" );
}


// Ejercicio 3
var numero = Number (prompt("Ingresa un número"));
if(numero===1000){
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos, sigue intentando");
}


// Ejercicio 4
var numero1 = Number (prompt("Ingresa un número 1"))
var numero2 = Number (prompt("Ingresa un número 2"))

if(numero1>numero2){
    console.log(numero2 + " es menor");
} else {
    console.log(numero1 + " es menor");
}



// Ejercicio 5
var numero1 = Number (prompt("Ingresa un número 1"))
var numero2 = Number (prompt("Ingresa un número 2"))
var numero3 = Number (prompt("Ingresa un número 3"))


if(numero1>numero2 && numero1>numero3){
    console.log(numero1 + " es mayor");
}  else if (numero2>numero1 && numero2>numero3) {
    console.log(numero2 + " es mayor");
}  else if (numero3>numero1 && numero3>numero2) {
    console.log(numero3 + " es mayor");
} else if (numero1===numero2 && numero1>numero3) {
    console.log(numero1 + " es mayor");
} else if (numero1===numero2 && numero1<numero3) {
    console.log(numero3 + " es mayor");
} else if (numero1===numero3 && numero1>numero2) {
    console.log(numero1 + " es mayor");
} else if (numero1===numero3 && numero1<numero2) {
    console.log(numero2 + " es mayor");
}  else if (numero2===numero1 && numero2>numero3) {
    console.log(numero2 + " es mayor");
} else if (numero2===numero1 && numero2<numero3) {
    console.log(numero3 + " es mayor");
}  else if (numero2===numero3 && numero2>numero1) {
    console.log(numero2 + " es mayor");
} else if (numero2===numero3 && numero2<numero1) {
    console.log(numero1 + " es mayor");
}  else if (numero3===numero1 && numero3>numero2) {
    console.log(numero3+ " es mayor");
} else if (numero3===numero1 && numero3<numero2) {
    console.log(numero2 + " es mayor");
}    else if (numero3===numero2 && numero3>numero1) {
    console.log(numero3+ " es mayor");
} else if (numero3===numero2 && numero3<numero1) {
    console.log(numero1 + " es mayor");
} 