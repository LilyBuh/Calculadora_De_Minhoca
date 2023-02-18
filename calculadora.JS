// Fazendo os botões aparecerem ao apertar

function botao(num){
    document.getElementById("result").innerHTML+=num;
}

// Botão limpar

function limpar(){
document.getElementById("result").innerHTML= "";
}

// botão back (voltar)

let voltar;

function back(){
voltar = document.getElementById("result").innerHTML;
document.getElementById("result").innerHTML = voltar.substring(0, voltar.length -1)
}

// calculandol

let calculo;

function resposta(){
    calculo = document.getElementById("result").innerHTML;
    if(calculo){
        document.getElementById("result").innerHTML = eval(calculo);
    }
}


