"use strict";

// ============================================================
// GAMEHUB PSP & PS2 — VERSÃO ATUALIZADA COM LINKS
// Mantém os IDs e os caminhos do HTML atual.
// ============================================================

const COVER_PATH = "./images/covers/";

const games = [
  { id: 1, title: "God of War: Ghost of Sparta", platform: "PSP", genre: "Ação", year: 2010, cover: "god-of-war-ghost-of-sparta.jpg", description: "Aventura de ação protagonizada por Kratos em uma jornada pela mitologia grega.", downloadLink: "https://4br.me/GodofWarghostofspartaps2" },
  { id: 2, title: "God of War: Chains of Olympus", platform: "PSP", genre: "Ação", year: 2008, cover: "god-of-war-chains-of-olympus.jpg", description: "Uma aventura de ação de Kratos ambientada antes dos acontecimentos do primeiro God of War.", downloadLink: "https://4br.me/GodofWarChainsofOlympusps2" },
  { id: 3, title: "Grand Theft Auto: Vice City Stories", platform: "PSP", genre: "Ação", year: 2006, cover: "gta-vice-city-stories.jpg", description: "Explore Vice City em uma história própria desenvolvida para o universo portátil de GTA.", downloadLink: "https://4br.me/GrandTheftAutoViceCityStories" },
  { id: 4, title: "Grand Theft Auto: Liberty City Stories", platform: "PSP", genre: "Ação", year: 2005, cover: "gta-liberty-city-stories.jpg", description: "Uma aventura de mundo aberto ambientada em Liberty City.", downloadLink: "https://4br.me/GrandTheftAutoLibertyCity" },
  { id: 5, title: "Dragon Ball Z: Shin Budokai", platform: "PSP", genre: "Luta", year: 2006, cover: "dragon-ball-z-shin-budokai.jpg", description: "Jogo de luta de Dragon Ball Z desenvolvido para PSP.", downloadLink: "https://4br.me/DragonBallZShinBudokaipsp" },
  { id: 6, title: "Dragon Ball Z: Shin Budokai 2", platform: "PSP", genre: "Luta", year: 2007, cover: "dragon-ball-z-shin-budokai-2.jpg", description: "Continuação de Shin Budokai com novos personagens e batalhas.", downloadLink: "https://4br.me/DragonBallZShinBudokai2psp" },
  { id: 7, title: "Tekken 6", platform: "PSP", genre: "Luta", year: 2009, cover: "tekken-6.jpg", description: "Versão portátil de Tekken 6 com diversos lutadores e modos de jogo.", downloadLink: "https://4br.me/teken6psp" },
  { id: 8, title: "Tekken: Dark Resurrection", platform: "PSP", genre: "Luta", year: 2006, cover: "tekken-dark-resurrection.jpg", description: "Edição portátil da série Tekken com personagens e modos de batalha.", downloadLink: "https://4br.me/TekkenDarkResurrectionpsp" },
  { id: 9, title: "Naruto: Ultimate Ninja Heroes", platform: "PSP", genre: "Luta", year: 2007, cover: "naruto-ultimate-ninja-heroes.jpg", description: "Batalhas entre personagens do universo de Naruto em formato portátil.", downloadLink: "https://4br.me/NarutoUltimateNinjaHeroespsp" },
  { id: 10, title: "Naruto Shippuden: Ultimate Ninja Impact", platform: "PSP", genre: "Ação", year: 2011, cover: "naruto-ultimate-ninja-impact.jpg", description: "Combates em grande escala inspirados no universo de Naruto Shippuden.", downloadLink: "https://4br.me/NarutoShippudenUltimatepsp" },
  { id: 11, title: "Need for Speed: Most Wanted", platform: "PSP", genre: "Corrida", year: 2005, cover: "need-for-speed-most-wanted.jpg", description: "Corridas de rua e perseguições policiais em uma experiência portátil.", downloadLink: "https://4br.me/NeedforSpeadmostwantead" },
  { id: 12, title: "Midnight Club 3: DUB Edition", platform: "PS2", genre: "Corrida", year: 2005, cover: "midnight-club-3.jpg", description: "Corrida urbana com carros personalizáveis e disputas em diferentes cidades.", downloadLink: "https://4br.me/MidnightClub3DUBEditionps2" },
  { id: 13, title: "God of War II", platform: "PS2", genre: "Ação", year: 2007, cover: "god-of-war-2.jpg", description: "Kratos enfrenta novos desafios em uma aventura baseada na mitologia grega.", downloadLink: "https://4br.me/2GodofWar2" },
  { id: 14, title: "God of War", platform: "PS2", genre: "Ação", year: 2005, cover: "god-of-war.jpg", description: "A aventura que apresentou Kratos em sua jornada contra os deuses do Olimpo.", downloadLink: "https://4br.me/deusdaguerra1" },
  { id: 15, title: "Grand Theft Auto: San Andreas", platform: "PS2", genre: "Ação", year: 2004, cover: "gta-san-andreas.jpg", description: "Uma aventura de mundo aberto ambientada no estado fictício de San Andreas.", downloadLink: "https://4br.me/GtaSanAndresps2" },
  { id: 16, title: "Grand Theft Auto: Vice City", platform: "PS2", genre: "Ação", year: 2002, cover: "gta-vice-city.jpg", description: "Uma aventura de mundo aberto inspirada na atmosfera de Miami dos anos 1980.", downloadLink: "https://4br.me/gtavicecitps2" },
  { id: 17, title: "Dragon Ball Z: Budokai 3", platform: "PS2", genre: "Luta", year: 2004, cover: "dragon-ball-z-budokai-3.jpg", description: "Um dos jogos de luta mais conhecidos da série Budokai para PlayStation 2.", downloadLink: "https://4br.me/DragonBallZ3" },
  { id: 18, title: "Dragon Ball Z: Budokai Tenkaichi 3", platform: "PS2", genre: "Luta", year: 2007, cover: "dragon-ball-z-budokai-tenkaichi-3.jpg", description: "Combates em arenas com uma grande seleção de personagens de Dragon Ball.", downloadLink: "https://fir3.net/1Dragonball1" },
  { id: 19, title: "Shadow of the Colossus", platform: "PS2", genre: "Aventura", year: 2005, cover: "shadow-of-the-colossus.jpg", description: "Uma aventura de exploração e batalhas contra enormes criaturas.", downloadLink: "https://4br.me/shadowsofthecolosso" },
  { id: 20, title: "Resident Evil 4", platform: "PS2", genre: "Ação e sobrevivência", year: 2005, cover: "resident-evil-4.jpg", description: "Uma aventura de ação e sobrevivência protagonizada por Leon S. Kennedy.", downloadLink: "https://fir3.net/residenteevil-4" }
];

// ELEMENTOS DO HTML

const gamesGrid = document.getElementById("gamesGrid");
const featuredGames = document.getElementById("featuredGames");
const gameCount = document.getElementById("gameCount");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResultText = document.getElementById("searchResultText");
const emptyState = document.getElementById("emptyState");
const resetFilters = document.getElementById("resetFilters");

const filterButtons = document.querySelectorAll("[data-filter]");
const platformButtons = document.querySelectorAll("[data-platform]");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const modal = document.getElementById("gameModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

let currentFilter = "TODOS";

// UTILITÁRIOS

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCover(game) {
  return COVER_PATH + game.cover;
}

function coverMarkup(game, extraClass = "") {
  return `
    <div class="${extraClass || "game-card-image"}">
      <img
        src="${getCover(game)}"
        alt="Capa de ${escapeHTML(game.title)}"
        loading="lazy"
        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
      >
      <div class="game-cover-placeholder" hidden>
        <span>🎮</span>
        <strong>${escapeHTML(game.title)}</strong>
        <small>${escapeHTML(game.platform)}</small>
      </div>
    </div>
  `;
}

// CARTÃO DO JOGO

function createGameCard(game) {
  return `
    <article class="game-card" data-game-id="${game.id}">
      ${coverMarkup(game)}
      <div class="game-card-content">
        <span class="game-platform">${escapeHTML(game.platform)}</span>
        <h3>${escapeHTML(game.title)}</h3>
        <div class="game-meta">
          <span>${escapeHTML(game.genre)}</span>
          <span>${game.year}</span>
        </div>
        <button
          type="button"
          class="game-details-btn"
          data-game-id="${game.id}"
          aria-label="Ver detalhes de ${escapeHTML(game.title)}"
        >
          Ver detalhes
        </button>
      </div>
    </article>
  `;
}

// PESQUISA E FILTROS

function getFilteredGames() {
  const term = normalizeText(searchInput?.value || "");

  return games.filter((game) => {
    const matchesPlatform =
      currentFilter === "TODOS" ||
      normalizeText(game.platform) === normalizeText(currentFilter);

    const searchable = normalizeText(
      `${game.title} ${game.platform} ${game.genre} ${game.year}`
    );

    return matchesPlatform && (!term || searchable.includes(term));
  });
}

function renderGames() {
  if (!gamesGrid) {
    console.error("GameHub: elemento #gamesGrid não encontrado.");
    return;
  }

  const filtered = getFilteredGames();

  if (gameCount) {
    gameCount.textContent =
      `${filtered.length} ${filtered.length === 1 ? "jogo" : "jogos"}`;
  }

  if (searchResultText) {
    searchResultText.textContent = searchInput?.value.trim()
      ? `${filtered.length} resultado(s) para "${searchInput.value.trim()}"`
      : "Todos os jogos do catálogo";
  }

  if (emptyState) emptyState.hidden = filtered.length !== 0;

  gamesGrid.innerHTML = filtered.map(createGameCard).join("");
}

function renderFeaturedGames() {
  if (featuredGames) {
    featuredGames.innerHTML = games.slice(0, 4).map(createGameCard).join("");
  }
}

// MODAL DE DETALHES (ATUALIZADO COM LINKS DIRETOS)

function openGameModal(game) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-game">
      ${coverMarkup(game, "modal-cover")}
      <div class="modal-info">
        <span class="game-platform">${escapeHTML(game.platform)}</span>
        <h2>${escapeHTML(game.title)}</h2>
        <div class="modal-meta">
          <span><strong>Plataforma:</strong> ${escapeHTML(game.platform)}</span>
          <span><strong>Gênero:</strong> ${escapeHTML(game.genre)}</span>
          <span><strong>Ano:</strong> ${game.year}</span>
        </div>
        <p>${escapeHTML(game.description)}</p>
        <div class="modal-actions">
          <a
            href="${game.downloadLink}"
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎮 Baixar / Jogar Agora
          </a>
          <a
            href="https://www.google.com/search?q=${encodeURIComponent(game.title + " gameplay " + game.platform)}"
            class="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Ver Gameplay
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (modalClose) modalClose.focus();
}

function closeGameModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// EVENTOS

document.addEventListener("click", (event) => {
  const detailsButton = event.target.closest(".game-details-btn");

  if (detailsButton) {
    const game = games.find(
      (item) => item.id === Number(detailsButton.dataset.gameId)
    );
    if (game) openGameModal(game);
  }
});

if (modalClose) {
  modalClose.addEventListener("click", closeGameModal);
}

if (modal) {
  const overlay = modal.querySelector(".modal-overlay");
  if (overlay) overlay.addEventListener("click", closeGameModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeGameModal();
});

if (searchInput) {
  searchInput.addEventListener("input", renderGames);
}

function resetCatalog() {
  currentFilter = "TODOS";
  if (searchInput) searchInput.value = "";

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "TODOS");
  });

  renderGames();
}

if (clearSearch) {
  clearSearch.addEventListener("click", () => {
    resetCatalog();
    if (searchInput) searchInput.focus();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter || "TODOS";

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderGames();

    document.getElementById("catalogo")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;
    if (!platform) return;

    currentFilter = platform;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item.dataset.filter === platform);
    });

    renderGames();

    document.getElementById("catalogo")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

if (resetFilters) {
  resetFilters.addEventListener("click", resetCatalog);
}

// MENU PARA CELULAR

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// NAVEGAÇÃO SUAVE

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-scroll]");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  mobileMenu?.classList.remove("open");
  menuButton?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
});

// INICIALIZAÇÃO

function initGameHub() {
  console.log("GameHub iniciado corretamente.");
  console.log(`Total de jogos: ${games.length}`);

  renderFeaturedGames();
  renderGames();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGameHub);
} else {
  initGameHub();
}
