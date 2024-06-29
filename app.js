let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroAleatorio = gerarAleatorio();
let tentativas = 1;

MensagemInicial()
function leitordeTexto(fonte,frase){
    //sem necessidade de definir variavel
    //"fonte" já informada no querySelector

    let variavel = document.querySelector(fonte);
    variavel.innerHTML = frase;
    responsiveVoice.speak(frase,'Brazilian Portuguese Female',{rate:1.2});
}

function MensagemInicial(){
    leitordeTexto("h1","Jogo Adivinha");
    leitordeTexto("p","Escolha o número entre 1 e 10");
}



function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroAleatorio){
        leitordeTexto("h1","Acertou!!");
        let tentativaPS = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${tentativaPS}`;
        leitordeTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            leitordeTexto("p","O número secreto é menor");
        }else{
            leitordeTexto("p","O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarAleatorio();
    limparCampo()
    tentativas = 1
    MensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled",true)

}