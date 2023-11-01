let joao = 1;
let maria = 2;
maria = joao + maria;
joao = 0;

function deJoaoParaMaria(){
    maria = maria + joao;
    joao = 0;
}
function deMariaParaJoao(){
    joao = joao + maria;
    maria = 0;
}