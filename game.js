/* =========================================================
   GAMEHUB PSP & PS2
   GAME.JS
   ========================================================= */

/*
   IMPORTANTE:
   Este arquivo contém os dados do catálogo e toda a
   interação da página.

   Para adicionar jogos, basta criar novos objetos dentro
   do array "games".
*/


/* =========================================================
   CATÁLOGO
   ========================================================= */

const games = [

    /* ================= PSP ================= */

    {
        id: "god-of-war-ghost-of-sparta",
        title: "God of War: Ghost of Sparta",
        platform: "PSP",
        genre: "Ação",
        year: 2010,
        cover: "",
        description:
            "Aventura de ação da série God of War desenvolvida para PSP.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "god-of-war-chains-of-olympus",
        title: "God of War: Chains of Olympus",
        platform: "PSP",
        genre: "Ação",
        year: 2008,
        cover: "",
        description:
            "Aventura de ação ambientada no universo de God of War.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "gta-vice-city-stories",
        title: "Grand Theft Auto: Vice City Stories",
        platform: "PSP",
        genre: "Ação",
        year: 2006,
        cover: "",
        description:
            "Jogo de ação e mundo aberto ambientado em Vice City.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "gta-liberty-city-stories",
        title: "Grand Theft Auto: Liberty City Stories",
        platform: "PSP",
        genre: "Ação",
        year: 2005,
        cover: "",
        description:
            "Aventura de mundo aberto ambientada em Liberty City.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "tekken-6",
        title: "Tekken 6",
        platform: "PSP",
        genre: "Luta",
        year: 2009,
        cover: "",
        description:
            "Jogo de luta da tradicional série Tekken.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "dragon-ball-shin-budokai",
        title: "Dragon Ball Z: Shin Budokai",
        platform: "PSP",
        genre: "Luta",
        year: 2006,
        cover: "",
        description:
            "Jogo de luta baseado no universo Dragon Ball Z.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "naruto-ultimate-ninja-impact",
        title: "Naruto Shippuden: Ultimate Ninja Impact",
        platform: "PSP",
        genre: "Ação",
        year: 2011,
        cover: "",
        description:
            "Ação e combates baseados no universo de Naruto.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "burnout-legends",
        title: "Burnout Legends",
        platform: "PSP",
        genre: "Corrida",
        year: 2005,
        cover: "",
        description:
            "Jogo de corrida focado em velocidade e colisões.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "need-for-speed-most-wanted-psp",
        title: "Need for Speed: Most Wanted",
        platform: "PSP",
        genre: "Corrida",
        year: 2005,
        cover: "",
        description:
            "Corridas de rua e perseguições da série Need for Speed.",
        compatibility: "PSP",
        link: "#"
    },

    {
        id: "pes-2014",
        title: "Pro Evolution Soccer 2014",
        platform: "PSP",
        genre: "Esporte",
        year: 2013,
        cover: "",
        description:
            "Jogo de futebol da série Pro Evolution Soccer.",
        compatibility: "PSP",
        link: "#"
    },


    /* ================= PS2 ================= */

    {
        id: "god-of-war-2",
        title: "God of War II",
        platform: "PS2",
        genre: "Ação",
        year: 2007,
        cover: "",
        description:
            "Aventura de ação protagonizada por Kratos.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "resident-evil-4",
        title: "Resident Evil 4",
        platform: "PS2",
        genre: "Ação / Terror",
        year: 2005,
        cover: "",
        description:
            "Jogo de ação e terror com Leon S. Kennedy.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "shadow-of-the-colossus",
        title: "Shadow of the Colossus",
        platform: "PS2",
        genre: "Aventura",
        year: 2005,
        cover: "",
        description:
            "Aventura centrada na exploração e no confronto com gigantescos colossos.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "gta-san-andreas",
        title: "Grand Theft Auto: San Andreas",
        platform: "PS2",
        genre: "Ação",
        year: 2004,
        cover: "",
        description:
            "Jogo de ação e mundo aberto ambientado no estado fictício de San Andreas.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "gta-vice-city",
        title: "Grand Theft Auto: Vice City",
        platform: "PS2",
        genre: "Ação",
        year: 2002,
        cover: "",
        description:
            "Jogo de ação e mundo aberto ambientado em Vice City.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "bully",
        title: "Bully",
        platform: "PS2",
        genre: "Ação / Aventura",
        year: 2006,
        cover: "",
        description:
            "Aventura em mundo aberto ambientada em uma escola.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "black",
        title: "Black",
        platform: "PS2",
        genre: "Tiro",
        year: 2006,
        cover: "",
        description:
            "Jogo de tiro em primeira pessoa conhecido pela ação intensa.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "need-for-speed-underground-2",
        title: "Need for Speed Underground 2",
        platform: "PS2",
        genre: "Corrida",
        year: 2004,
        cover: "",
        description:
            "Corridas e personalização de carros em um ambiente de mundo aberto.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "dragon-ball-z-budokai-3",
        title: "Dragon Ball Z: Budokai 3",
        platform: "PS2",
        genre: "Luta",
        year: 2004,
        cover: "",
        description:
            "Jogo de luta baseado no universo Dragon Ball Z.",
        compatibility: "PS2",
        link: "#"
    },

    {
        id: "naruto-ultimate-ninja",
        title: "Naruto: Ultimate Ninja",
        platform: "PS2",
        genre: "Luta",
        year: 2006,
        cover: "",
        description:
            "Jogo de luta baseado no universo de Naruto.",
        compatibility: "PS2",
        link: "#"
    }

];


/* =========================================================
   ESTADO
   ========================================================= */

let currentPlatform = "TODOS";
let currentSearch = "";

let favorites = JSON.parse(
    localStorage.getItem("gamehub-favorites") || "[]"
);


/* =========================================================
   ELEMENTOS
   ========================================================= */

const gamesGrid =
    document.getElementById("gamesGrid");

const featuredGames =
    document.getElementById("featuredGames");

const gameSearch =
    document.getElementById("gameSearch");

const clearSearch =
    document.getElementById("clearSearch");

const gameCount =
    document.getElementById("gameCount");

const emptyState =
    document.getElementById("emptyState");

const searchMessage =
    document.getElementById("searchMessage");

const searchResultText =
    document.getElementById("searchResultText");

const catalogTitle =
    document.getElementById("catalogTitle");

const catalogDescription =
    document.getElementById("catalogDescription");

const resetFilters =
    document.getElementById("resetFilters");

const modal =
    document.getElementById("gameModal");

const modalContent =
    document.getElementById("modalGameContent");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedGames();

    renderGames();

    setupSearch();

    setupFilters();

    setupPlatforms();

    setupModal();

    setupMobileMenu();

    setupFooterPlatforms();

    updateYear();

});


/* =========================================================
   CAPA
   ========================================================= */

function getCover(game) {

    /*
       Se uma capa for adicionada ao objeto "cover",
       ela será utilizada.

       Caso contrário, mostramos uma arte de fallback
       sem utilizar as imagens antigas do projeto.
    */

    if (game.cover && game.cover.trim() !== "") {
        return `
            <img
                src="${escapeAttribute(game.cover)}"
                alt="Capa de ${escapeHtml(game.title)}"
                loading="lazy"
                onerror="this.style.display='none'"
            >
        `;
    }

    return `
        <div
            class="cover-placeholder"
            aria-label="Capa não adicionada"
        >
            <span>🎮</span>
            <strong>${escapeHtml(game.platform)}</strong>
        </div>
    `;
}


/* =========================================================
   CARD
   ========================================================= */

function createGameCard(game) {

    const isFavorite =
        favorites.includes(game.id);

    return `
        <article
            class="game-card"
            data-game-id="${escapeAttribute(game.id)}"
        >

            <div class="game-cover">

                ${getCover(game)}

                <span class="game-platform">
                    ${escapeHtml(game.platform)}
                </span>

                <button
                    type="button"
                    class="favorite-button ${isFavorite ? "active" : ""}"
                    data-favorite="${escapeAttribute(game.id)}"
                    aria-label="${
                        isFavorite
                            ? "Remover dos favoritos"
                            : "Adicionar aos favoritos"
                    }"
                    title="${
                        isFavorite
                            ? "Remover dos favoritos"
                            : "Adicionar aos favoritos"
                    }"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="game-info">

                <h3 class="game-title">
                    ${escapeHtml(game.title)}
                </h3>

                <div class="game-meta">
                    ${escapeHtml(game.genre)}
                    •
                    ${game.year}
                </div>

                <button
                    type="button"
                    class="game-action"
                    data-game="${escapeAttribute(game.id)}"
                >
                    Ver jogo →
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   DESTAQUES
   ========================================================= */

function renderFeaturedGames() {

    if (!featuredGames) return;

    const featured =
        games.slice(0, 6);

    featuredGames.innerHTML =
        featured
            .map(createGameCard)
            .join("");

    attachCardEvents(featuredGames);
}


/* =========================================================
   FILTRAGEM
   ========================================================= */

function getFilteredGames() {

    let result = [...games];

    if (currentPlatform !== "TODOS") {

        result =
            result.filter(
                game =>
                    game.platform === currentPlatform
            );
    }

    if (currentSearch.trim() !== "") {

        const search =
            normalizeText(currentSearch);

        result =
            result.filter(game => {

                const searchable = normalizeText(
                    `${game.title}
                     ${game.genre}
                     ${game.platform}
                     ${game.year}
                     ${game.description}`
                );

                return searchable.includes(search);
            });
    }

    return result;
}


/* =========================================================
   RENDER CATÁLOGO
   ========================================================= */

function renderGames() {

    if (!gamesGrid) return;

    const filtered =
        getFilteredGames();

    gameCount.textContent =
        filtered.length;

    gamesGrid.innerHTML =
        filtered
            .map(createGameCard)
            .join("");

    attachCardEvents(gamesGrid);

    updateCatalogText(filtered);

    if (filtered.length === 0) {

        emptyState.hidden = false;

    } else {

        emptyState.hidden = true;
    }

    if (currentSearch.trim() !== "") {

        searchMessage.hidden = false;

        searchResultText.textContent =
            ` ${filtered.length} resultado(s) encontrado(s).`;

    } else {

        searchMessage.hidden = true;
    }
}


/* =========================================================
   TEXTO DO CATÁLOGO
   ========================================================= */

function updateCatalogText(filtered) {

    if (!catalogTitle) return;

    if (currentPlatform === "PSP") {

        catalogTitle.textContent =
            "Jogos de PSP";

        catalogDescription.textContent =
            "Explore o catálogo de jogos para PlayStation Portable.";

    } else if (currentPlatform === "PS2") {

        catalogTitle.textContent =
            "Jogos de PS2";

        catalogDescription.textContent =
            "Explore o catálogo de jogos para PlayStation 2.";

    } else {

        catalogTitle.textContent =
            "Todos os jogos";

        catalogDescription.textContent =
            "Encontre seu próximo jogo favorito.";
    }
}


/* =========================================================
   EVENTOS DOS CARDS
   ========================================================= */

function attachCardEvents(container) {

    container
        .querySelectorAll("[data-game]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.game;

                    openGameModal(id);
                }
            );
        });


    container
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        button.dataset.favorite
                    );
                }
            );
        });
}


/* =========================================================
   FAVORITOS
   ========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

    } else {

        favorites.push(id);
    }

    localStorage.setItem(
        "gamehub-favorites",
        JSON.stringify(favorites)
    );

    renderGames();

    renderFeaturedGames();
}


/* =========================================================
   PESQUISA
   ========================================================= */

function setupSearch() {

    if (!gameSearch) return;

    gameSearch.addEventListener(
        "input",
        () => {

            currentSearch =
                gameSearch.value;

            clearSearch.hidden =
                gameSearch.value.length === 0;

            renderGames();
        }
    );


    clearSearch.addEventListener(
        "click",
        () => {

            gameSearch.value = "";

            currentSearch = "";

            clearSearch.hidden = true;

            renderGames();

            gameSearch.focus();
        }
    );
}


/* =========================================================
   FILTROS
   ========================================================= */

function setupFilters() {

    document
        .querySelectorAll("[data-filter]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentPlatform =
                        button.dataset.filter;

                    document
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(item => {

                            item.classList.toggle(
                                "active",
                                item.dataset.filter ===
                                currentPlatform
                            );
                        });

                    renderGames();

                    document
                        .getElementById("catalogo")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });
                }
            );
        });
}


/* =========================================================
   PLATAFORMAS
   ========================================================= */

function setupPlatforms() {

    document
        .querySelectorAll("[data-platform]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const platform =
                        card.dataset.platform;

                    currentPlatform =
                        platform;

                    document
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(button => {

                            button.classList.toggle(
                                "active",
                                button.dataset.filter ===
                                platform
                            );
                        });

                    renderGames();

                    document
                        .getElementById("catalogo")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });
                }
            );
        });
}


/* =========================================================
   RODAPÉ / PLATAFORMAS
   ========================================================= */

function setupFooterPlatforms() {

    document
        .querySelectorAll(
            "[data-footer-platform]"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    currentPlatform =
                        link.dataset.footerPlatform;

                    document
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(button => {

                            button.classList.toggle(
                                "active",
                                button.dataset.filter ===
                                currentPlatform
                            );
                        });

                    renderGames();
                }
            );
        });
}


/* =========================================================
   RESET
   ========================================================= */

resetFilters?.addEventListener(
    "click",
    () => {

        currentPlatform = "TODOS";

        currentSearch = "";

        if (gameSearch) {
            gameSearch.value = "";
        }

        if (clearSearch) {
            clearSearch.hidden = true;
        }

        document
            .querySelectorAll("[data-filter]")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter === "TODOS"
                );
            });

        renderGames();
    }
);


/* =========================================================
   MODAL
   ========================================================= */

function setupModal() {

    modalClose?.addEventListener(
        "click",
        closeGameModal
    );

    modalOverlay?.addEventListener(
        "click",
        closeGameModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {

                closeGameModal();
            }
        }
    );
}


function openGameModal(id) {

    const game =
        games.find(
            item => item.id === id
        );

    if (!game || !modal) return;


    const favorite =
        favorites.includes(game.id);


    const linkIsAvailable =
        game.link &&
        game.link !== "#";


    modalContent.innerHTML = `

        <div class="game-modal">

            <div class="modal-cover">

                ${getCover(game)}

            </div>

            <div class="modal-info">

                <span class="game-platform">
                    ${escapeHtml(game.platform)}
                </span>

                <h2 id="modalGameTitle">
                    ${escapeHtml(game.title)}
                </h2>

                <div class="modal-meta">

                    <span>
                        🎮 ${escapeHtml(game.platform)}
                    </span>

                    <span>
                        🏷️ ${escapeHtml(game.genre)}
                    </span>

                    <span>
                        📅 ${game.year}
                    </span>

                </div>

                <p>
                    ${escapeHtml(game.description)}
                </p>

                <div class="compatibility">

                    <strong>
                        Compatibilidade
                    </strong>

                    <span>
                        ${escapeHtml(game.compatibility)}
                    </span>

                </div>

                <div class="modal-actions">

                    ${
                        linkIsAvailable
                            ? `
                                <a
                                    href="${escapeAttribute(game.link)}"
                                    class="button button-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🔗 Acessar link
                                </a>
                              `
                            : `
                                <span class="button button-secondary">
                                    🔗 Link ainda não configurado
                                </span>
                              `
                    }

                    <button
                        type="button"
                        class="button button-secondary"
                        id="modalFavoriteButton"
                    >
                        ${favorite ? "♥ Remover favorito" : "♡ Favoritar"}
                    </button>

                </div>

            </div>

        </div>

    `;


    document
        .getElementById("modalFavoriteButton")
        ?.addEventListener(
            "click",
            () => {

                toggleFavorite(game.id);

                openGameModal(game.id);
            }
        );


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeGameModal() {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* =========================================================
   MENU MOBILE
   ========================================================= */

function setupMobileMenu() {

    if (
        !mobileMenuButton ||
        !mobileNav
    ) {
        return;
    }


    mobileMenuButton.addEventListener(
        "click",
        () => {

            const open =
                mobileNav.classList.toggle(
                    "open"
                );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(open)
            );

            mobileMenuButton.textContent =
                open ? "×" : "☰";
        }
    );


    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "open"
                    );

                    mobileMenuButton.textContent =
                        "☰";

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
}


/* =========================================================
   ANO
   ========================================================= */

function updateYear() {

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }
}


/* =========================================================
   NORMALIZAÇÃO
   ========================================================= */

function normalizeText(text) {

    return String(text)
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase()
        .trim();
}


/* =========================================================
   SEGURANÇA / HTML
   ========================================================= */

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function escapeAttribute(value) {

    return escapeHtml(value);
}


/* =========================================================
   CORREÇÃO PARA CAPAS SEM IMAGEM
   ========================================================= */

const coverPlaceholderStyle = document.createElement("style");

coverPlaceholderStyle.textContent = `

    .cover-placeholder {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 8px;

        background:
            radial-gradient(
                circle at 50% 35%,
                rgba(124, 58, 237, 0.35),
                transparent 45%
            ),
            linear-gradient(
                145deg,
                #181821,
                #09090d
            );

        color: rgba(255,255,255,0.8);

        text-align: center;
    }

    .cover-placeholder span {
        font-size: 42px;
    }

    .cover-placeholder strong {
        font-size: 12px;
        letter-spacing: 2px;
    }

    .game-modal {
        display: grid;

        grid-template-columns:
            minmax(220px, 300px)
            1fr;

        gap: 30px;

        padding: 35px;
    }

    .modal-cover {
        overflow: hidden;

        border-radius: 14px;

        background: #181821;

        aspect-ratio: 3 / 4;
    }

    .modal-cover img,
    .modal-cover .cover-placeholder {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .modal-info {
        padding-top: 5px;
    }

    .modal-info h2 {
        margin-top: 13px;

        font-size: clamp(26px, 4vw, 38px);

        line-height: 1.1;

        letter-spacing: -1px;
    }

    .modal-meta {
        display: flex;
        flex-wrap: wrap;

        gap: 8px;

        margin-top: 18px;
    }

    .modal-meta span {
        padding: 6px 9px;

        border-radius: 7px;

        background: rgba(255,255,255,0.05);

        color: #aaaab6;

        font-size: 11px;
    }

    .modal-info p {
        margin-top: 22px;

        color: #aaaab6;

        font-size: 14px;
    }

    .compatibility {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 15px;

        margin-top: 22px;
        padding: 14px;

        border-radius: 10px;

        background: rgba(34,197,94,0.06);

        border: 1px solid rgba(34,197,94,0.15);

        font-size: 12px;
    }

    .compatibility span {
        color: #86efac;

        font-weight: 800;
    }

    .modal-actions {
        display: flex;
        flex-wrap: wrap;

        gap: 10px;

        margin-top: 25px;
    }

    @media (max-width: 700px) {

        .game-modal {
            grid-template-columns: 1fr;

            padding: 25px;
        }

        .modal-cover {
            width: min(220px, 100%);

            margin-inline: auto;
        }

    }

`;

document.head.appendChild(
    coverPlaceholderStyle
);
