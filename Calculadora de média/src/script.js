var nome = prompt("Registre seu nome.");

var notaDoPrimeiroBimestre = prompt("Qual a nota do 1º bimestre?");
var notaDoSegundoBimestre = prompt("Qual a nota do 2º bimestre?");
var notaDoTeceiroBimestre = prompt("Qual a nota do 3º bimestre?");
var notaDoQuartoBimestre = prompt("Qual a nota do 4º bimestre?");

var notaFinal = (parseInt(notaDoPrimeiroBimestre) + parseInt(notaDoSegundoBimestre) + parseInt(notaDoTeceiroBimestre) + parseInt(notaDoQuartoBimestre)) / 4;

var notaFixada = notaFinal.toFixed(2);

alert(nome + ", sua média foi de " + notaFixada);