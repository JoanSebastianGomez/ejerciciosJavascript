function bisiesto() {
    let año = document.getElementById("año").value;
    let resultado = document.getElementById("resultado");

    if (((año % 4 == 0) && (año % 100 != 0)) || (año % 400 == 0)) {
        resultado.innerHTML = `el año ${año} es bisiesto`;
    }
    else {
        resultado.innerHTML = `el año ${año} no es bisiesto`;
    }
    
    return;

}