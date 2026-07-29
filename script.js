const temas = [
"Animais",
"Frutas",
"Verduras",
"Legumes",
"Comidas",
"Bebidas",
"Profissões",
"Países",
"Cidades",
"Marcas",
"Carros",
"Motos",
"Ferramentas",
"Objetos da cozinha",
"Objetos do quarto",
"Objetos da sala",
"Objetos do banheiro",
"Coisas do armário",
"Coisas da geladeira",
"Filmes",
"Séries",
"Jogos",
"Flores",
"Árvores",
"Esportes",
"Instrumentos musicais",
"Materiais de construção",
"Roupas",
"Calçados",
"Supermercado"
];

const letras = [
"A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V"
];

let vidasRosa = 3;
let vidasHemerson = 3;

let temaAtual = "";
let letraAtual = "";

let tempo = 10;
let contador;

let rosaPronto = false;
let hemersonPronto = false;

const home = document.getElementById("home");
const sorteio = document.getElementById("sorteio");
const jogo = document.getElementById("jogo");
const fim = document.getElementById("fim");

document.getElementById("btnJogar").onclick = iniciar;
document.getElementById("rosa").onclick = () => rosaPronto = true;
document.getElementById("hemerson").onclick = () => hemersonPronto = true;

document.getElementById("reiniciar").onclick = () => location.reload();

function iniciar(){

home.classList.add("escondido");
sorteio.classList.remove("escondido");

novoTema();

let c = 7;

document.getElementById("contadorInicio").innerHTML = c;

let espera = setInterval(()=>{

c--;

document.getElementById("contadorInicio").innerHTML = c;

if(c==0){

clearInterval(espera);

sorteio.classList.add("escondido");
jogo.classList.remove("escondido");

rodada();

}

},1000);

}

function novoTema(){

temaAtual = temas[Math.floor(Math.random()*temas.length)];
letraAtual = letras[Math.floor(Math.random()*letras.length)];

document.getElementById("tema").innerHTML = temaAtual;
document.getElementById("temaJogo").innerHTML = temaAtual;
document.getElementById("letra").innerHTML = letraAtual;

}

function rodada(){

rosaPronto = false;
hemersonPronto = false;

tempo = 10;

document.getElementById("tempo").innerHTML = tempo;

contador = setInterval(()=>{

tempo--;

document.getElementById("tempo").innerHTML = tempo;

if(rosaPronto && hemersonPronto){

clearInterval(contador);

novoTema();

setTimeout(rodada,500);

}

if(tempo==0){

clearInterval(contador);

verificar();

}

},1000);

}function verificar(){

if(!rosaPronto){

vidasRosa--;

}

if(!hemersonPronto){

vidasHemerson--;

}

document.getElementById("vida1").innerHTML =
"Rosa " + "❤️".repeat(vidasRosa) + "🤍".repeat(3-vidasRosa);

document.getElementById("vida2").innerHTML =
"Hemerson " + "❤️".repeat(vidasHemerson) + "🤍".repeat(3-vidasHemerson);

if(vidasRosa<=0){

jogo.classList.add("escondido");

fim.classList.remove("escondido");

document.getElementById("vencedor").innerHTML =
"🎉 Hemerson venceu!";

return;

}

if(vidasHemerson<=0){

jogo.classList.add("escondido");

fim.classList.remove("escondido");

document.getElementById("vencedor").innerHTML =
"🎉 Rosa venceu!";

return;

}

alert(
(!rosaPronto && !hemersonPronto)
? "Os dois perderam uma vida!"
: (!rosaPronto)
? "Rosa perdeu uma vida!"
: "Hemerson perdeu uma vida!"
);

novoTema();

sorteio.classList.remove("escondido");

jogo.classList.add("escondido");

let c = 7;

document.getElementById("contadorInicio").innerHTML = c;

let espera = setInterval(()=>{

c--;

document.getElementById("contadorInicio").innerHTML = c;

if(c==0){

clearInterval(espera);

sorteio.classList.add("escondido");

jogo.classList.remove("escondido");

rodada();

}

},1000);

}
