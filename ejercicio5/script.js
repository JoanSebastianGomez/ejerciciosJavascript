function enteros() {
    let enteros = document.getElementById("cadena").value;
    let arrayEnteros = enteros.split(",")
    let resultado = [];
    for (let i = 0; i < arrayEnteros.length; i++) {
        let element = arrayEnteros[i];
        for (let j = 0; j < arrayEnteros.length; j++) {
            if (i != j) {
                let element2 = arrayEnteros[j];
                if (element == element2) { 
                    resultado.push(element)
                    break;
                }
            }
        }
    }
    let mostrar = document.getElementById("resultado");
    mostrar.innerHTML = resultado;
    return;

}