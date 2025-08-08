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

const NOMEARMA = "Katana do Outro Lado";

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

console.log(``);
console.log(`A lore da personagem ${nome}`);
console.log(`${nome}, é uma ocultista convocada pelo Senhor Verissimo para  participar da Ordo Realitas.`);
console.log(`Foi enviada para a luta portando ${NOMEARMA}, como objeto de luta.`);
console.log(`e com habilidades no ritual ${NOMERITUAL}, teve coragem de enfrentar essa batalha.`);
console.log(`Sua missão é enfrentar o paranormal, contra os perigos do outro lado.`);
console.log(`${nome} foi enviada a luta usando ${NOMEARMADURA} para impulsionar a sua segurança.`);
console.log(`Com nível ${nivel} e ataque ${ataqueTotal}, nossa ocultista, ${apelido} foi atrás da luta paranormal.`);
console.log(`Suas defesas, com auxilio da ${NOMEARMADURA}, atingem ${defesaTotal} de resistência.`);
console.log(`Depois de uma série intensa de treinamentos, chegou ao nível de ${XP} de experiencia.`);
console.log(`Além disso, alcançou ${danoEmRitual} de habilidade em ritual e ${danoComArma} de dano em lutas armadas.`);
console.log(`Nessa serie de treinamentos, descobriu que o ritual ${NOMERITUAL} tinha como efeito ${EFEITORITUAL} o que a ajuda em suas batalhas.`);
console.log(``);
console.log(`Tem vida o suficiente? ${vidaSuficiente}`);
console.log(`Tem ataque forte? ${ataqueForte}`);
console.log(`Tem nível avançado ${nivelAvancado}`);
console.log(`Pode enfrentar o Boss Final? ${podeEnfrentarBossFinal}`);

// Continuação do nível 1.

// Atributos do guerreiro.

let nomePersonagem = nome;
let classePersonagem = classe;
let vidaAtual = vida;
let vidaMaxima = 300;
let manaAtual = 150;
let manaMaxima = 300;
let nivelAtual = nivel;
let experiencia = XP;
let ouroAtual = 0;

//Novos atributos de batalha.

let forcaBruta = 40;
let poder = 68;
let defesa = 70;
let agilidade = 50;
let combatesVencidos = 0;

//Estado atual da história.

let localAtual = "Base da Ordo Realitas";
let missão = "Derrotar o Carniça da Esfinge"
let nomeVilao = "Carniçal da Esfinge";
let forcaD = " Arthur Cervero, Dante, Elizabeth Webber, Erin Parker, Joui Jouki, Kaiser, Tristan Monteiro, Luciano Carvalho, Fernando Carvalho"

//Prólogo

console.log(``);
console.log(`PRÓLOGO 📖`);
console.log(``);
console.log(`${nomePersonagem}, é uma grande guerreira ocultista da Ordo Realitas`);
console.log(`Foi enviada na missão de derrotar o ${nomeVilao}`);
console.log(`usando a ${NOMEARMA},vestindo a ${NOMEARMADURA} e se especializando no ritual de ${NOMERITUAL} que tem a função de ${EFEITORITUAL}`);
console.log(`Tendo ${nivel} como nível disponivel para a batalha, e ${ataqueTotal} como ataque, ${danoComArma} e ${danoEmRitual} como dano.`);


//Capítulo 1: Condicionais Simples na Narrativa

console.log(``);
console.log(`CAPÍTULO 1: Contratação para a luta.`);

//Verificação do nível da personagem.
if (nivel >= 5) {
    console.log(``);
    console.log(`Senhor Verissimo, ao ver o nível de disponibilidade e prontidão de ${apelido}, a enviou a seguinte carta:`);
    console.log(`Querida ${nomePersonagem}. Venho em nome da Ordo Realitas a convocar para a missão mais importante que a equipe ja vivenciou nos últimos tempos. Juntei para ir com você uma equipe, chamada Força D. ${forcaD} serão seus colegas de batalha. Junte se a nós no Bar da Ivete Beicur.`);
    console.log(`E com ajuda de seus colegas, ${apelido} resolve prosseguir com sua missão.`);
}
console.log(``);
console.log(`Uma névoa fria cobria o ponto de encontro naquela manhã.`);
console.log(`Beatrice ajustava sua ${NOMEARMA} enquanto observava a equipe ${forcaD} se reunir.`);
console.log(`O alvo era claro: ${nomeVilao} é uma ameaça que há semana assombrava as redondezas da base da Ordo Realitas.`);

//Verificação da base de nível batalha.

if (nivel > 9) {
    console.log(``);
    console.log(`Senhor Verissimo se aproximava da equipe, anunciando a missão que eles seriam levados`);
    console.log(`Apesar da força e experiencia da equipe selecionada, todos temiam. Principalmente ${apelido}, que era a mais nova entre todos da equipe`);
    console.log(`Sua colega, Elizabeth Webber, ao ver a preocupação de ${apelido}`);
    console.log(`Você é jovem demais para essa missão, ${apelido}. Talvez não volte com vida...`);
    console.log(`Mas Beatrice, comum leve sorriso no rosto, responde: 'Então voltarei com a morte ao meu lado'`);
}
//Verificação de recursos especiais.

if (ouroAtual >= 100) {
    console.log(`O som das moedas de ouro no bolso de Beatrice chamam a atenção.`);
    console.log(`Um de seus colegas de equipe brinca:'Vai pagar a próxima rodada quando voltarmos, não é?'`);
    console.log(`Beatrice apenas riu e balançou a cabeça negativamente`);
}

//Verificação de classe

if (classe === "Ocultista") {
    console.log(`Beatrice sente um calor subir pelos dedos -- a energia pronta para ser liberada`);
}

console.log(`'Todos prontos?' pergunta um dos membros da equipe.`);
console.log(`Beatrice apenas assente e se prepara para a caça do alvo`);

//Capítulo 2: Escolha Estratégica 
console.log(``);
console.log(`CAPÍTULO 2: A Encruzilhada do Destino`);
console.log(``);

console.log(`A equipe avança até uma estrada dividida`);
console.log(`Um mercador bloqueia o caminho e oferece equipamentos em troca de ouro.`);
console.log(`${apelido} ao reparar que poderia usar uma atualização em seus equipamentos, se questionou se teria ouro suficiente.`)
let precoEquipamento = 10
//Escolhas baseadas em ouro.
if (ouroAtual > 0) {
    console.log(``);
    console.log(`Com ouro suficiente, Beatrice negocia e compra equipamentos melhores`);
    forcaBruta += 5;
    defesaTotal += 3;
    console.log(`Força e defesa aumentaram! ouro restante: ${ouroAtual - precoEquipamento}`);
} else {
    console.log(`Sem ouro suficiente!`);
    console.log(`Não preciso de nada além da minha Katana e do meu ritual.`);
    console.log(`A adversidade fortalece o espirito! Agilidade ${agilidade += 2}`);
}

//Sistema de recompensa.

if (XP >= 100){
console.log(`A sabedoria se manifesta!`);
nivel++;
xp = 0;
vida = 300; 
// vida restaurada.
console.log(`Estou pronta pra acabar com ele!`);
} else {
    console.log(`Beatrice ainda busca mais conhecimento e experiencia`);
    console.log(`Experiencia atual: ${xp / 100}`);
}

//Capítulo 3 = A Batalha Decisiva.
console.log(``);
console.log(`CAPÍTULO 3: A Batalha Decisiva.`);
console.log(``);

console.log(`Ao chegarem ao coração da ${localAtual},  o ar fica mais denso.`);
console.log(`Entre colunas quebradas e símbolos desconhecidos, surge ${nomeVilao}.`);
console.log(`'Preparem-se' grita Beatrice.`);

let poderInimigo = 80;

if (vida <= 30) {
    console.log(`Com pouca vida, Beatrice sente o próprio sangue escorrer pelo braço`);
    console.log(`'Não posso cair agora! Ataque final com toda a força'`);
    poderInimigo -= forcaBruta;
} else if (manaAtual >= 50 && classe === "ocultista") {
    console.log(`Beatrice fecha os olhos e começa a etoar o ritual ${NOMERITUAL}.`);
    console.log(`O ar se parte ao meio quando uma criatura colossal surge, atendendo ao chamado do ritual`);
    console.log(`'Acabe com ele!', ordena ela ao monstro invocado`);
    poderInimigo -= (forcaBruta + 20);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log(`Usando sua agilidade, Beatrice rola pelo chão e ataca com precisão mortal.`);
    console.log(`'Você não é rápido o bastante para mim!' provoca ela.`);
    poderInimigo -= forcaBruta;
} else {
    console.log(`Beatrice recua, estudando o inimigo`);
    console.log(`Com um golpe calculado, corta sua defesa e recupera o fôlego.`);
poderInimigo -= (forcaBruta / 2);
vida += 10;
//Recupera um pouco de vida
}

if (poderInimigo <= 0) {
    console.log(`Com um golpe final, o ${nomeVilao} cai.`);
    console.log(`Beatrice apoia-dse na katana, respirando fundo.`);
    console.log(`'Fim de jogo', murmura, enquanto a equipe comemora.`);
} else {
    console.log (`${nomeVilao} ainda resiste, mas a chama nos olhos de Beatrice só cresce`);
    console.log(`'Você ainda não viu nada', ela sussura, pronta para o próximo ataque.`);
}