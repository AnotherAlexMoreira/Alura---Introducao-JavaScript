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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
//adiciona um escutador de evento
botaoAdicionar.addEventListener("click", function(event){
    //faz com que o botão perca seu comportamento padrão de enviar e apagar o form
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //criando a tr dentro da tabela
    var pacienteTr = document.createElement("tr");

    //criando tds dentro da tr na tabela
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //passando os valores para dentro das tds
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //colocando as tds dentro da tag tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    
    //colocando a tr dentro da tabela
    tabela.appendChild(pacienteTr);

    
})



    
