var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//querySelector só mostra o primeiro registro
//var paciente = document.querySelector("#primeiro-paciente");

//querySelectorAll traz uma lista de todos os registros
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i ++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00){
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


    
