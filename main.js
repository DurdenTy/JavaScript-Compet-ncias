/*var nome = "Adilson de Lima";
var idade = 34;
var idade2 = 78;
var soma = idade + idade2;
alert(nome + " Você tem " + soma + " anos?");/var frase = "Hmmmmm, apenas recapitulando JavaScript";

console.log(frase.replace("recapitulando" , "revisando"));
console.log(frase.toUpperCase());*/


/*var lista = ["maçã", "pêra", "laranja"];
lista.push("banana");
console.log(lista[3]);
lista.pop();
console.log(lista[3]);
console.log(lista.join("fruta: "));*/

/*var objeto = {
	nome: "Pincel",
	cor: "Branco",
	Utilidade: "Limpeza e pintura"
}

var objeto2 = {
	nome: "Carro",
	cor: "Prata",
	Utilidade: "Andar"
}

console.log(objeto.nome);
console.log(objeto.cor);
console.log(objeto.Utilidade);

console.log(objeto2.nome);*/

/*var objetos = [{ nome: "Pincel", cor: "Branco" }, { nome: "Caneta", cor: "Azul" }]
console.log(objetos);*/

/*var idade = 18;

if(idade >= 18){
	alert("Pode participar do show sem os pais");
}else{
	alert("Menor de 18 anos, precisa estar acompanhado com um responsável");
}*/
/*var i;
for(i = 0; i <= 5; i++){
	alert(i);
}*/



/*var k = 0;
do{
	k++;
	alert(k);
}while(k < 5);*/


/*var d = new Date();

alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getMonth() + 1);
alert(d.getYear());
alert(d);*/

/*function raiz(n1){
	return n1 * n1;
}

function trocar(frase, palavra, palavra2){
	return frase.replace(palavra, palavra2);
}

alert(raiz(8));
alert(trocar("Algum teste", "teste", "conhecimento"));*/

/*var permitido;
function permitir(idade){
	if(idade >=18 ){
		permitido = true;
	}else{
		permitido = false;
	}
	return permitido;
}

var idade2 = prompt("Qual a sua idade?");

permitir(idade2)
console.log(permitido);*/

alert("Não clique no botão, por nada no mundo, mesmo que alguem te peça");


function clicar(){
	document.getElementById("Clicou").innerHTML = "Não era para clicar";
}

function clicar2(){
	document.getElementById("Clicou2").innerHTML = "Não poderá fazer novamente, melhor evitar essa vez";
}

function clicar3(){
	document.getElementById("Clicou3").innerHTML = "Você acabou de destruir uma galaxia inteira... Por que não seguiu as ordens?... Por que?...";
}

function ver(){
	window.open("https://ciberia.com.br/um-monstruoso-buraco-negro-foi-arrancado-para-fora-do-centro-de-sua-galaxia-por-uma-bizarra-colisao-cosmica-13984");
}

function passar(){
	document.getElementById("galaxia").innerHTML = "Destruidas";
}

function tirar(){
	document.getElementById("galaxia").innerHTML = "Verá o que causou";
}

function mudar(element){

	if(element.value == 1){
		alert("Você quer refazer tudo, excelente!");
	}else{
		alert("Quer deixar como está? As vidas perdidas...");
	}

}

