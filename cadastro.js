let readlineSync = require('readline-Sync');
var nomepeca;
var pesopeca;
var capacidade = 9;

nomepeca = readlineSync.question("Digite o nome da peça: ");
pesopeca = readlineSync.question("Digite o nome da peça: ");

if(pesopeca > 100){
     //condição verdadeira
     if(capacidade > 10){
           //condição verdadeira
           console.log("Não Cadastrar, Capacidade máxima atingida!!!");
     }else if(nomepeca.length < 3){
           //condição falsa
           console.log("não cadastrar,nome inválido!");
     }else{
         console.log("Peça cadastrada com SUCESSO!!!")
        }
}else{
    //condição falsa
    console.log("Não Cadastras, peso insuficiente!")
}         












