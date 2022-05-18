// Se 'hora' for maior que 6:00 e menor que 12:00, retorna "Bom dia";
// Se 'hora' for maior que 12:00 e menor que 18:00, retorna "Boa tarde";
// Se 'hora' for maior que 18:00, retorna "Boa noite";

let hora = 12;

if (hora > 6 &&  hora < 12) {
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite");
}

console.log(hora);