var numberToFind = 0;
var attemps = 0;

function refresh(){
    numberToFind = parseInt(Math.random() * 1000);
}

function verifyNumber(){
    var bet = document.getElementById('bet').value;

    if(bet > 1000 || bet < 1)
    {
        alert('Número invalido');
        return;
    }

    if(bet > numberToFind)
    {
        attemps++;
        alert('❌ O número é MENOR ❌');
    }
    else if(bet < numberToFind)
    {
        attemps++;
        alert('❌ O número é MAIOR ❌');
    }
    else
    {
        alert("✔ Parabéns, você acertou!! ✔ Com "+attemps+" erros");
    }
}

refresh();