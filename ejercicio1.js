/*
Definir las variables lowerLimitEven, upperLimitEven, lowerLimitOdd y upperLimitOdd. 
Se deben mostrar en consola todos los números pares existentes entre el lowerLimitEven y 
upperLimitEven con el mensaje “El número <num> es par”. 
Y mostrar todos los valores impares que existen entre lowerLimitOdd y upperLimitOdd mostrando 
el mensaje “El número <num> es impar”

*/ 

let lowerLimitEven=2;
let upperLimitEven=10;

let lowerLimitOdd=1;
let upperLimitOdd=9;

for (let index = lowerLimitEven; index 
    < upperLimitEven; index++) {
    if (index%2==0) {
        console.log('El numero ${index} es par');
    }
}

for (let index = lowerLimitOdd; index < upperLimitOdd; index++) {
    if (index%2!=0) {
        console.log('El numero ${index} es imppar');
    }
}