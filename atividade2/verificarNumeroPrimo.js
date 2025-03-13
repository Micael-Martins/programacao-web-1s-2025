function verificarNumeroPrimo(n) {
    if (n <= 1) {
        console.log(false); 
        return false;
    }
    if (n <= 3) {
        console.log(true); 
        return true; 
    }
    if (n % 2 == 0 || n % 3 == 0) {
        console.log(false); 
        return false;
    }
    //Precisei usar o chat para entender o que fazer abaixo.
    for (let i = 5; i <= Math.sqrt(n); i += 6) { 
        if (n % i == 0 || n % (i + 2) == 0) {
            console.log(false); 
            return false;
        }
    }
    console.log(true); 
    return true;
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false