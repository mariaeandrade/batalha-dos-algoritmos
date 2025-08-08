// Perfil básico da personagem
let nome = "Beatrice Portinari";
let apelido = "Beatrice";
let classe = "ocultista";
let nivel = 9;
let vida = 140;
let ouro = 348;
let XP = 12;
let danoComArma = 21;
let danoEmRitual = 49;

//Inventário

const  NOMEARMA = "Katana do Outro Lado";

const NOMEARMADURA = "Vestimenta Celestial";
const DEFESABASE = 30;

const NOMERITUAL = "Invocação";
const EFEITORITUAL = "Invoca uma entidade paranormal para defesa durante a batalha";

// Eventos 

// Treinou
XP += 150;

//Comprou a poção.
ouro -= 30;

//Tomou a poção.
vida += 40;

//Encantou a arma.
danoComArma *= 2;

//Errou o ritual e perdeu 10 de dano
danoEmRitual -= 10;

//Atributos finais.

let ataqueTotal = nivel + danoComArma + danoEmRitual
let defesaTotal = DEFESABASE + (nivel / 2);

console.log(`O ataque total é ${ataqueTotal}, e a defesa total é ${defesaTotal}`);

//Avaliação de prontidão.

let vidaSuficiente = vida > 67;

let ataqueForte = ataqueTotal > 97;

let nivelAvancado = nivel > 8;

let podeEnfrentarBossFinal = vidaSuficiente && (ataqueForte || nivelAvancado);

//Narrativa.

 console.log (``);
 console.log (`A lore da personagem ${nome}`);
 console.log (`${nome}, é uma ocultista convocada pelo Senhor Verissimo para  participar da Ordo Realitas.`);
 console.log (`Foi enviada para a luta portando ${NOMEARMA}, como objeto de luta.`);
 console.log (`e com habilidades no ritual ${NOMERITUAL}, teve coragem de enfrentar essa batalha.`);
 console.log (`Sua missão é enfrentar o paranormal, contra os perigos do outro lado.`);
 console.log (`${nome} foi enviada a luta usando ${NOMEARMADURA} para impulsionar a sua segurança.`);
 console.log (`Com nível ${nivel} e ataque ${ataqueTotal}, nossa ocultista, ${apelido} foi atrás da luta paranormal.`);
 console.log (`Suas defesas, com auxilio da ${NOMEARMADURA}, atingem ${defesaTotal} de resistência.`);
 console.log (`Depois de uma série intensa de treinamentos, chegou ao nível de ${XP} de experiencia.`);
 console.log (`Além disso, alcançou ${danoEmRitual} de habilidade em ritual e ${danoComArma} de dano em lutas armadas.`);
 console.log (`Nessa serie de treinamentos, descobriu que o ritual ${NOMERITUAL} tinha como efeito ${EFEITORITUAL} o que a ajuda em suas batalhas.`);
 console.log (``);
 console.log (`Tem vida o suficiente? ${vidaSuficiente}`);
 console.log (`Tem ataque forte? ${ataqueForte}`);
 console.log (`Tem nível avançado ${nivelAvancado}`);
 console.log (`Pode enfrentar o Boss Final? ${podeEnfrentarBossFinal}`);

 

