function calcular() {

    var n1 = document.getElementById("n1").value;

    var n2 = document.getElementById("n2").value;

    var n3 = document.getElementById("n3").value;

    var media = (Number(n1) + Number(n2) + Number(n3)) / 3;

    alert(`A média dos valores é: ${media}`);

    console.log(`A sua média é: ${media}`);

    if(media >= 6){
        alert("Parabens! Você passou!")
    }else{
        alert("Você foi reprovado! Se esforce mais na próxima vez");
    }
}