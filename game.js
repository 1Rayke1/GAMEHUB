"use strict";

// ============================================================
// GAMEHUB PSP & PS2 — VERSÃO OFICIAL ATUALIZADA
// ============================================================

const COVER_PATH = "./images/covers/";

const games = [
  { id: 1, title: "God of War: Ghost of Sparta", platform: "PSP", genre: "Ação", year: 2010, cover: "god-of-war-ghost-of-sparta.jpg", description: "Aventura de ação protagonizada por Kratos em uma jornada pela mitologia grega.", link: "https://4br.me/GodofWarghostofspartaps2" },
  { id: 2, title: "God of War: Chains of Olympus", platform: "PSP", genre: "Ação", year: 2008, cover: "god-of-war-chains-of-olympus.jpg", description: "Uma aventura de ação de Kratos ambientada antes dos acontecimentos do primeiro God of War.", link: "https://4br.me/GodofWarChainsofOlympusps2" },
  { id: 3, title: "Grand Theft Auto: Vice City Stories", platform: "PSP", genre: "Ação", year: 2006, cover: "gta-vice-city-stories.jpg", description: "Explore Vice City em uma história própria desenvolvida para o universo portátil de GTA.", link: "https://4br.me/GrandTheftAutoViceCityStories" },
  { id: 4, title: "Grand Theft Auto: Liberty City Stories", platform: "PSP", genre: "Ação", year: 2005, cover: "gta-liberty-city-stories.jpg", description: "Uma aventura de mundo aberto ambientada em Liberty City.", link: "https://4br.me/GrandTheftAutoLibertyCity" },
  { id: 5, title: "Dragon Ball Z: Shin Budokai", platform: "PSP", genre: "Luta", year: 2006, cover: "dragon-ball-z-shin-budokai.jpg", description: "Jogo de luta de Dragon Ball Z desenvolvido para PSP.", link: "https://4br.me/DragonBallZShinBudokaipsp" },
  { id: 6, title: "Dragon Ball Z: Shin Budokai 2", platform: "PSP", genre: "Luta", year: 2007, cover: "dragon-ball-z-shin-budokai-2.jpg", description: "Continuação de Shin Budokai com novos personagens e batalhas.", link: "https://4br.me/DragonBallZShinBudokai2psp" },
  { id: 7, title: "Tekken 6", platform: "PSP", genre: "Luta", year: 2009, cover: "tekken-6.jpg", description: "Versão portátil de Tekken 6 com diversos lutadores e modos de jogo.", link: "https://4br.me/teken6psp" },
  { id: 8, title: "Tekken: Dark Resurrection", platform: "PSP", genre: "Luta", year: 2006, cover: "tekken-dark-resurrection.jpg", description: "Edição portátil da série Tekken com personagens e modos de batalha.", link: "https://4br.me/TekkenDarkResurrectionpsp" },
  { id: 9, title: "Naruto: Ultimate Ninja Heroes", platform: "PSP", genre: "Luta", year: 2007, cover: "naruto-ultimate-ninja-heroes.jpg", description: "Batalhas entre personagens do universo de Naruto em formato portátil.", link: "https://4br.me/NarutoUltimateNinjaHeroespsp" },
  { id: 10, title: "Naruto Shippuden: Ultimate Ninja Impact", platform: "PSP", genre: "Ação", year: 2011, cover: "naruto-ultimate-ninja-impact.jpg", description: "Combates em grande escala inspirados no universo de Naruto Shippuden.", link: "https://4br.me/NarutoShippudenUltimatepsp" },
  { id: 11, title: "Need for Speed: Most Wanted", platform: "PSP", genre: "Corrida", year: 2005, cover: "need-for-speed-most-wanted.jpg", description: "Corridas de rua e perseguições policiais em uma experiência portátil.", link: "https://4br.me/NeedforSpeadmostwantead" },
  { id: 12, title: "Midnight Club 3: DUB Edition", platform: "PS2", genre: "Corrida", year: 2005, cover: "midnight-club-3.jpg", description: "Corrida urbana com carros personalizáveis e disputas em diferentes cidades.", link: "https://4br.me/MidnightClub3DUBEditionps2" },
  { id: 13, title: "God of War II", platform: "PS2", genre: "Ação", year: 2007, cover: "god-of-war-2.jpg", description: "Kratos enfrenta novos desafios em uma aventura baseada na mitologia grega.", link: "https://4br.me/2GodofWar2" },
  { id: 14, title: "God of War", platform: "PS2", genre: "Ação", year: 2005, cover: "god-of-war.jpg", description: "A aventura que apresentou Kratos em sua jornada contra os deuses do Olimpo.", link: "https://4br.me/deusdaguerra1" },
  { id: 15, title: "Grand Theft Auto: San Andreas", platform: "PS2", genre: "Ação", year: 2004, cover: "gta-san-andreas.jpg", description: "Uma aventura de mundo aberto ambientada no estado fictício de San Andreas.", link: "https://4br.me/GtaSanAndresps2" },
  { id: 16, title: "Grand Theft Auto: Vice City", platform: "PS2", genre: "Ação", year: 2002, cover: "gta-vice-city.jpg", description: "Uma aventura de mundo aberto inspirada na atmosfera de Miami dos anos 1980.", link: "https://4br.me/gtavicecitps2" },
  { id: 17, title: "Dragon Ball Z: Budokai 3", platform: "PS2", genre: "Luta", year: 2004, cover: "dragon-ball-z-budokai-3.jpg", description: "Um dos jogos de luta mais conhecidos da série Budokai para PlayStation 2.", link: "https://4br.me/DragonBallZ3" },
  { id: 18, title: "Dragon Ball Z: Budokai Tenkaichi 3", platform: "PS2", genre: "Luta", year: 2007, cover: "dragon-ball-z-budokai-tenkaichi-3.jpg", description: "Combates em arenas com uma grande seleção de personagens de Dragon Ball.", link: "https://fir3.net/1Dragonball1" },
  { id: 19, title: "Shadow of the Colossus", platform: "PS2", genre: "Aventura", year: 2005, cover: "shadow-of-the-colossus.jpg", description: "Uma aventura de exploração e batalhas contra enormes criaturas.", link: "https://4br.me/shadowsofthecolosso" },
  { id: 20, title: "Resident Evil 4", platform: "PS2", genre: "Ação e sobrevivência", year: 2005, cover: "resident-evil-4.jpg", description: "Uma aventura de ação e sobrevivência protagonizada por Leon S. Kennedy.", link: "https://fir3.net/residenteevil-4" }
];

// ============================================================
// ELEMENTOS DO HTML
// ============================================================

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

// ============================================================
// UTILITÁRIOS
// ============================================================

function normalizeText(value) {
  function createGameSlug(title) {
  return normalizeText(title)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getGameShareUrl(game) {
  const url = new URL(window.location.href);

  url.search = "";
  url.hash = "";

  url.searchParams.set("jogo", createGameSlug(game.title));

  return url.toString();
}
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

function coverMarkup(game, extraClass = "game-cover-wrapper") {
  const title = escapeHTML(game.title);
  const platform = escapeHTML(game.platform);
  const image = escapeHTML(getCover(game));

  return `
    <div class="${extraClass}">
      <img
        class="game-cover"
        src="${image}"
        alt="Capa de ${title}"
        loading="lazy"
        onerror="
          this.hidden = true;
          this.nextElementSibling.hidden = false;
        "
      >
      <div class="cover-placeholder" hidden>
        <span class="cover-console">🎮</span>
        <strong>GAME</strong>
        <span>${title}</span>
        <small>${platform}</small>
      </div>
    </div>
  `;
}

// ============================================================
// CARTÃO DO JOGO
// ============================================================

function createGameCard(game) {
  return `
    <article class="game-card" data-game-id="${game.id}">
      ${coverMarkup(game)}

      <div class="game-card-body">
        <div class="game-card-top">
          <span class="platform-badge">
            ${escapeHTML(game.platform)}
          </span>

          <span class="game-genre">
            ${escapeHTML(game.genre)}
          </span>
        </div>

        <h3>${escapeHTML(game.title)}</h3>

        <p>${escapeHTML(game.description)}</p>

        <div class="game-meta">
          <span>${escapeHTML(game.genre)}</span>
          <span>${game.year}</span>
        </div>

        <button
          type="button"
          class="details-button game-details-btn"
          data-game-id="${game.id}"
          aria-label="Ver detalhes de ${escapeHTML(game.title)}"
        >
          Ver detalhes
        </button>
      </div>
    </article>
  `;
}

// ============================================================
// PESQUISA E FILTROS
// ============================================================

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

  if (emptyState) {
    emptyState.hidden = filtered.length !== 0;
  }

  gamesGrid.innerHTML = filtered.map(createGameCard).join("");
}

function renderFeaturedGames() {
  if (!featuredGames) return;

  featuredGames.innerHTML = games
    .slice(0, 4)
    .map(createGameCard)
    .join("");
}

// ============================================================
// MODAL ATUALIZADO COM OS LINKS DOS JOGOS
// ============================================================

function openGameModal(game) {
  if (!modal || !modalContent || !game) return;

  const gameplayUrl =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(`${game.title} ${game.platform} gameplay`);

  modalContent.innerHTML = `
    <div class="modal-game">

      ${coverMarkup(game, "modal-game-cover")}

      <div class="modal-game-info">

        <span class="platform-badge">
          ${escapeHTML(game.platform)}
        </span>

        <h2>${escapeHTML(game.title)}</h2>

        <p class="modal-description">
          ${escapeHTML(game.description)}
        </p>

        <div class="modal-details">
          <div>
            <strong>Plataforma</strong>
            <span>${escapeHTML(game.platform)}</span>
          </div>

          <div>
            <strong>Gênero</strong>
            <span>${escapeHTML(game.genre)}</span>
          </div>

          <div>
            <strong>Ano</strong>
            <span>${game.year}</span>
          </div>

          <div>
            <strong>Catálogo</strong>
            <span>GameHub PSP &amp; PS2</span>
          </div>
        </div>

        <div class="modal-actions">
          <a
            href="${game.link}"
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎮 Baixar / Acessar Jogo
          </a>

          <a
            href="${gameplayUrl}"
            class="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Ver Gameplay
          </a>
          <button
  type="button"
  class="btn-secondary"
  id="shareGameButton"
>
  🔗 Compartilhar jogo
</button>
        </div>

      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (modalClose) modalClose.focus();
}

function closeGameModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// ============================================================
// EVENTOS
// ============================================================

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const detailsButton = target.closest(".game-details-btn");
  if (detailsButton) {
    const gameId = Number(detailsButton.dataset.gameId);
    const game = games.find((item) => item.id === gameId);
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
    searchInput?.focus();
  });
}

if (resetFilters) {
  resetFilters.addEventListener("click", resetCatalog);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter || "TODOS";
    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    renderGames();
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
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
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  });
});

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest("a[data-scroll]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const section = document.querySelector(href);
  if (!section) return;
  event.preventDefault();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  mobileMenu?.classList.remove("open");
  menuButton?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
});
// ============================================================
// GUIAS DO GAMEHUB
// ============================================================

const guideContent = {
  psp: {
    title: "Guia de emulação PSP",
    text: "Para jogar títulos de PSP, utilize um emulador compatível com seu dispositivo. Confira os requisitos, ajuste os controles e os gráficos gradualmente e consulte a documentação oficial para resolver problemas de desempenho.",
    link: "https://www.ppsspp.org/"
  },

  ps2: {
    title: "Guia de emulação PS2",
    text: "A emulação de PlayStation 2 pode exigir configurações diferentes conforme o aparelho e o jogo. Consulte a documentação do emulador, verifique a compatibilidade e utilize apenas arquivos de jogos e BIOS obtidos legalmente.",
    link: "https://pcsx2.net/"
  },

  dicas: {
    title: "Dicas para jogadores",
    text: "Antes de começar, confira os controles, ajuste a resolução de acordo com o desempenho do dispositivo e salve seu progresso regularmente quando o jogo permitir. Para resolver problemas, procure guias específicos do título.",
    link: "https://www.youtube.com/"
  }
};

document.querySelectorAll("[data-guide]").forEach((button) => {
  button.addEventListener("click", () => {
    const guide = guideContent[button.dataset.guide];

    if (!guide || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-game-info guide-modal-content">
        <span class="platform-badge">GUIA GAMEHUB</span>
        <h2>${escapeHTML(guide.title)}</h2>
        <p class="modal-description">${escapeHTML(guide.text)}</p>
        <div class="modal-actions">
          <a
            class="btn-primary"
            href="${escapeHTML(guide.link)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar fonte oficial →
          </a>
          <button
            type="button"
            class="btn-secondary"
            id="closeGuideButton"
          >
            Fechar
          </button>
        </div>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    document.getElementById("closeGuideButton")
      ?.addEventListener("click", closeGameModal);

    modalClose?.focus();
  });
});
// ============================================================
// INICIALIZAÇÃO
// ============================================================

function initGameHub() {
  renderFeaturedGames();
  renderGames();
  console.log("GameHub iniciado com links atualizados.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGameHub);
} else {
  initGameHub();
}
