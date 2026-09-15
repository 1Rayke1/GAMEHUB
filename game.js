"use strict";

/* =========================================================
GAMEHUB PSP & PS2
Catálogo de jogos
========================================================= */

/* =========================================================
BANCO DE JOGOS
========================================================= */

const jogos = [

{
    id: 1,
    titulo: "Coromon",
    plataforma: "PSP",
    genero: "RPG",
    ano: "2022",
    imagem: "pagina-02.jpg",
    descricao:
        "RPG de aventura com criaturas, exploração e batalhas.",
    destaque: true
},

{
    id: 2,
    titulo: "God of War II",
    plataforma: "PS2",
    genero: "Ação",
    ano: "2007",
    imagem: "pagina-03.jpg",
    descricao:
        "Aventura de ação protagonizada por Kratos.",
    destaque: true
},

{
    id: 3,
    titulo: "Kingdom Two Crowns",
    plataforma: "PSP",
    genero: "Estratégia",
    ano: "2018",
    imagem: "pagina-04.jpg",
    descricao:
        "Construa e defenda seu reino em uma aventura de estratégia.",
    destaque: true
},

{
    id: 4,
    titulo: "This War of Mine",
    plataforma: "PSP",
    genero: "Estratégia",
    ano: "2014",
    imagem: "pagina-05.jpg",
    descricao:
        "Jogo de sobrevivência e estratégia com foco em decisões.",
    destaque: true
},

{
    id: 5,
    titulo: "Grand Theft Auto: Vice City Stories",
    plataforma: "PSP",
    genero: "Ação",
    ano: "2006",
    imagem: "pagina-06.jpg",
    descricao:
        "Aventura de ação em mundo aberto.",
    destaque: false
},

{
    id: 6,
    titulo: "Grand Theft Auto: Liberty City Stories",
    plataforma: "PSP",
    genero: "Ação",
    ano: "2005",
    imagem: "pagina-07.jpg",
    descricao:
        "Explore Liberty City em uma aventura de mundo aberto.",
    destaque: false
},

{
    id: 7,
    titulo: "Resident Evil 4",
    plataforma: "PS2",
    genero: "Ação / Terror",
    ano: "2005",
    imagem: "pagina-08.jpg",
    descricao:
        "Uma aventura de ação e sobrevivência.",
    destaque: false
},

{
    id: 8,
    titulo: "Shadow of the Colossus",
    plataforma: "PS2",
    genero: "Aventura",
    ano: "2005",
    imagem: "pagina-09.jpg",
    descricao:
        "Enfrente enormes criaturas em uma jornada de aventura.",
    destaque: false
}

];

/* =========================================================
ESTADO
========================================================= */

let plataformaAtual = "TODOS";
let pesquisaAtual = "";

/* =========================================================
ELEMENTOS
========================================================= */

const elementos = {

destaque:
    document.getElementById("jogosDestaque"),

catalogo:
    document.getElementById("catalogoJogos"),

pesquisa:
    document.getElementById("campoPesquisa"),

limpar:
    document.getElementById("limparPesquisa"),

semResultados:
    document.getElementById("semResultados"),

tituloCatalogo:
    document.getElementById("tituloCatalogo")

};

/* =========================================================
UTILITÁRIOS
========================================================= */

function normalizar(texto) {

return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

}

/* =========================================================
FAVORITOS
========================================================= */

function obterFavoritos() {

try {

    return JSON.parse(
        localStorage.getItem("gamehub_favoritos")
    ) || [];

} catch {

    return [];

}

}

function salvarFavoritos(favoritos) {

localStorage.setItem(
    "gamehub_favoritos",
    JSON.stringify(favoritos)
);

}

function ehFavorito(id) {

return obterFavoritos().includes(id);

}

function alternarFavorito(id) {

let favoritos =
    obterFavoritos();

if (favoritos.includes(id)) {

    favoritos =
        favoritos.filter(
            favorito => favorito !== id
        );

} else {

    favoritos.push(id);

}

salvarFavoritos(favoritos);

renderizarTudo();

}

/* =========================================================
CRIAR CARD
========================================================= */

function criarCardJogo(jogo) {

const card =
    document.createElement("article");

card.className =
    "card-jogo fade-in";

const favorito =
    ehFavorito(jogo.id);

card.innerHTML = `

    <div class="card-jogo-imagem">

        <img
            src="${jogo.imagem}"
            alt="Capa de ${jogo.titulo}"
            loading="lazy"
            onerror="this.style.display='none'"
        >

        <span class="card-jogo-plataforma">
            ${jogo.plataforma}
        </span>

    </div>

    <div class="card-jogo-conteudo">

        <h3>${jogo.titulo}</h3>

        <p class="card-jogo-info">
            ${jogo.genero} • ${jogo.ano}
        </p>

        <div class="card-jogo-botoes">

            <button
                class="botao-ver-jogo"
                onclick="abrirJogo(${jogo.id})">
                Ver jogo
            </button>

            <button
                class="botao-favorito"
                onclick="alternarFavorito(${jogo.id})"
                aria-label="Favoritar ${jogo.titulo}">
                ${favorito ? "❤️" : "♡"}
            </button>

        </div>

    </div>
`;

return card;

}

/* =========================================================
RENDERIZAR JOGOS
========================================================= */

function renderizarJogos(lista, elemento) {

if (!elemento) {
    return;
}

elemento.innerHTML = "";

lista.forEach(jogo => {

    elemento.appendChild(
        criarCardJogo(jogo)
    );

});

}

/* =========================================================
FILTRAR CATÁLOGO
========================================================= */

function obterJogosFiltrados() {

return jogos.filter(jogo => {

    const correspondePlataforma =
        plataformaAtual === "TODOS" ||
        jogo.plataforma === plataformaAtual;

    const texto =
        normalizar(
            `${jogo.titulo} ${jogo.genero} ${jogo.ano}`
        );

    const correspondePesquisa =
        !pesquisaAtual ||
        texto.includes(
            normalizar(pesquisaAtual)
        );

    return (
        correspondePlataforma &&
        correspondePesquisa
    );

});

}

/* =========================================================
RENDERIZAR TUDO
========================================================= */

function renderizarTudo() {

const filtrados =
    obterJogosFiltrados();

const destaques =
    jogos.filter(
        jogo => jogo.destaque
    );

renderizarJogos(
    destaques,
    elementos.destaque
);

renderizarJogos(
    filtrados,
    elementos.catalogo
);

if (elementos.semResultados) {

    elementos.semResultados.style.display =
        filtrados.length === 0
            ? "block"
            : "none";

}

atualizarFiltros();

}

/* =========================================================
FILTRO DE PLATAFORMA
========================================================= */

function filtrarPlataforma(plataforma) {

plataformaAtual =
    plataforma;

if (elementos.tituloCatalogo) {

    if (plataforma === "PSP") {

        elementos.tituloCatalogo.textContent =
            "Jogos de PSP";

    } else if (plataforma === "PS2") {

        elementos.tituloCatalogo.textContent =
            "Jogos de PS2";

    } else {

        elementos.tituloCatalogo.textContent =
            "Todos os jogos";

    }

}

renderizarTudo();

const catalogo =
    document.getElementById(
        "catalogo"
    );

if (catalogo) {

    catalogo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

}

/* =========================================================
ATUALIZAR BOTÕES DE FILTRO
========================================================= */

function atualizarFiltros() {

document
    .querySelectorAll(".filtro")
    .forEach(botao => {

        const texto =
            normalizar(
                botao.textContent
            );

        let filtro =
            "TODOS";

        if (texto === "psp") {
            filtro = "PSP";
        }

        if (texto === "ps2") {
            filtro = "PS2";
        }

        botao.classList.toggle(
            "ativo",
            filtro === plataformaAtual
        );

    });

}

/* =========================================================
PESQUISA
========================================================= */

function pesquisarJogos() {

if (!elementos.pesquisa) {
    return;
}

pesquisaAtual =
    elementos.pesquisa.value;

if (elementos.limpar) {

    elementos.limpar.style.display =
        pesquisaAtual
            ? "block"
            : "none";

}

renderizarTudo();

}

function limparPesquisa() {

if (elementos.pesquisa) {

    elementos.pesquisa.value = "";

}

pesquisaAtual = "";

if (elementos.limpar) {

    elementos.limpar.style.display =
        "none";

}

renderizarTudo();

}

/* =========================================================
MOSTRAR TODOS
========================================================= */

function mostrarTodosJogos() {

plataformaAtual = "TODOS";

pesquisaAtual = "";

if (elementos.pesquisa) {

    elementos.pesquisa.value = "";

}

if (elementos.limpar) {

    elementos.limpar.style.display =
        "none";

}

if (elementos.tituloCatalogo) {

    elementos.tituloCatalogo.textContent =
        "Todos os jogos";

}

renderizarTudo();

const catalogo =
    document.getElementById(
        "catalogo"
    );

if (catalogo) {

    catalogo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

}

/* =========================================================
ABRIR JOGO
========================================================= */

function abrirJogo(id) {

const jogo =
    jogos.find(
        item => item.id === id
    );

if (!jogo) {
    return;
}

/*
   Por enquanto mostramos as informações
   do jogo. Depois podemos transformar isso
   em uma página individual completa.
*/

const mensagem =

    `${jogo.titulo}\n\n` +
    `Plataforma: ${jogo.plataforma}\n` +
    `Gênero: ${jogo.genero}\n` +
    `Ano: ${jogo.ano}\n\n` +
    `${jogo.descricao}`;

alert(mensagem);

}

/* =========================================================
GUIAS
========================================================= */

function mostrarGuias() {

const guias =
    document.getElementById(
        "guias"
    );

if (guias) {

    guias.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

}

/* =========================================================
MENU MOBILE
========================================================= */

function alternarMenu() {

const navegacao =
    document.querySelector(
        ".navegacao"
    );

if (!navegacao) {
    return;
}

const atual =
    getComputedStyle(
        navegacao
    ).display;

if (atual === "none") {

    navegacao.style.display =
        "flex";

    navegacao.style.position =
        "absolute";

    navegacao.style.top =
        "62px";

    navegacao.style.left =
        "14px";

    navegacao.style.right =
        "14px";

    navegacao.style.padding =
        "10px";

    navegacao.style.flexDirection =
        "column";

    navegacao.style.alignItems =
        "stretch";

    navegacao.style.background =
        "#111a2b";

    navegacao.style.border =
        "1px solid rgba(148, 163, 184, 0.16)";

    navegacao.style.borderRadius =
        "12px";

} else {

    navegacao.style.display =
        "";

    navegacao.style.position =
        "";

}

}

/* =========================================================
VOLTAR PARA O INÍCIO
========================================================= */

function mostrarInicio() {

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

/* =========================================================
INICIALIZAÇÃO
========================================================= */

document.addEventListener(
"DOMContentLoaded",
function() {

    renderizarTudo();

    console.log(
        "GameHub PSP & PS2 carregado."
    );

    console.log(
        `Jogos cadastrados: ${jogos.length}`
    );

}

);

/* =========================================================
DISPONIBILIZAR FUNÇÕES PARA O HTML
========================================================= */

window.filtrarPlataforma =
filtrarPlataforma;

window.pesquisarJogos =
pesquisarJogos;

window.limparPesquisa =
limparPesquisa;

window.mostrarTodosJogos =
mostrarTodosJogos;

window.abrirJogo =
abrirJogo;

window.mostrarGuias =
mostrarGuias;

window.alternarMenu =
alternarMenu;

window.mostrarInicio =
mostrarInicio;

window.alternarFavorito =
alternarFavorito;
