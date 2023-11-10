// Teste Github
var jogada = 0;
var matriz;
vencedor = false;

resetarMatriz();

function atualizarDisplay(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let campo = document.querySelector(`#p${i}${j}`);
            let txt = matriz[i][j];

            if (txt == 'O') {
                campo.innerText = 'O';
            } else if (txt == 'X') {
                campo.innerText = 'X';
            }else{
                campo.innerText = "";
            }
        }
    }
}

function jogar(p1, p2, campo){
    if(jogada == 0){
        document.querySelector(".vez-jogador").innerHTML = "Agora é a vez do O";
    }

    if(jogada % 2 == 0){
        matriz[p1][p2] = "X";
        document.querySelector(".vez-jogador").innerHTML = "Agora é a vez do O";
    }else{
        matriz[p1][p2] = "O";
        document.querySelector(".vez-jogador").innerHTML = "Agora é a vez do X";
    }
    jogada = jogada + 1;
    atualizarDisplay();
    conferirJogada();
    campo.onclick = "";
}

function conferirJogada(){

    for (let i = 0; i < 3; i++) {
        if(matriz[0][i] == matriz[1][i] && matriz [1][i] == matriz[2][i] && matriz[2][i] != " "){
            vencedor = true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if(matriz[i][0] == matriz[i][1] && matriz [i][1] == matriz[i][2] && matriz[i][2] != " "){
            vencedor = true;
        }
    }

    if(matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2] && matriz[2][2] != " "){
        vencedor = true;
    }

    if(matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0] && matriz[2][0] != " "){
        vencedor = true;
    }

    if(vencedor){
        vitoria();
    }

    if(jogada == 9 && vencedor == false){
        empate();
    }

}

function vitoria(){
    setTimeout("alert('VITÓRIA!');", 50);
    setTimeout("resetarJogo();", 100)
}

function empate(){
    setTimeout("alert('EMPATE!');", 50);
    setTimeout("resetarJogo();", 100)
}

function resetarMatriz(){
    matriz = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];

    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
            matriz[i][j] = " ";
            document.getElementById('p'+i+j).onclick= function (){
                jogar(i, j, this);
            };
        }
    };
}

function resetarJogo(){
    resetarMatriz();
    atualizarDisplay();   
    jogada = 0;
    vencedor = false;
    document.querySelector(".vez-jogador").innerHTML = "Clique em qualquer espaço para começar a partida!";
}
