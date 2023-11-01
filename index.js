function deJoaoParaMaria(){
    oMaria.qtd = oMaria.qtd + oJoao.qtd;
    oJoao.qtd = 0;
}
function deMariaParaJoao(){
    oJoao = oJoao + oMaria.qtd;
    oMaria.qtd = 0;
}
let oJoao = {
    tipo: "Maçã",
    qtd: 1,
    comeu: function(){
        oJoao.qtd--;
    }
}
let oMaria = {
    tipo: "Maçã",
    qtd: 2,
    comeu: function() {
        oMaria.qtd--;
    }
}
let joao = 1;
let maria = 2;
deJoaoParaMaria();
deMariaParaJoao();