function pangrama() {
    let cadena = document.getElementById("cadena").value;
    const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxyz";
    let resultado = document.getElementById("resultado");
    cadena = cadena.toLowerCase();
    let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);
    for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
        let letraActual = alfabetoComoArreglo[indice];
        // En caso de que la cadena NO contenga la letra, regresamos false de una vez
        if (!cadena.includes(letraActual)) {
            resultado.innerHTML = "No es pangrama";
            return;
        }
    }
    resultado.innerHTML = "Es pangrama";
    // Se termina el ciclo y no se rompió arriba, ¡así que la cadena es pangrama!
    return;
    
}