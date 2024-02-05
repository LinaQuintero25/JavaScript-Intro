function calcularMedia(arrayNumeros) {
    let sum = 0;
    for(let i = 0; i < arrayNumeros.length; i++)
    {
    sum += arrayNumeros[i];
    }
    return sum/arrayNumeros.length;
    }
    function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
    }
    function esPalindromo(cadena) {
    let cadenaReversa = invertirCadena(cadena);
    return cadena === cadenaReversa;
    }
    console.log(calcularMedia([1, 2, 3, 4, 5]));
    console.log(invertirCadena("hola"));
    console.log(esPalindromo("radar"));