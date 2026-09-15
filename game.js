const games = [
  {
    id: 1,
    title: "God of War: Ghost of Sparta",
    imageSearch: "God of War Ghost of Sparta",
    platform: "PSP",
    year: 2010,
    genre: "Ação",
    description: "A aventura de Kratos lançada para PlayStation Portable."
  },
  {
    id: 2,
    title: "God of War: Chains of Olympus",
    imageSearch: "God of War Chains of Olympus",
    platform: "PSP",
    year: 2008,
    genre: "Ação",
    description: "Uma aventura de ação da série God of War para PSP."
  },
  {
    id: 3,
    title: "GTA Vice City Stories",
    imageSearch: "Grand Theft Auto Vice City Stories",
    platform: "PSP",
    year: 2006,
    genre: "Ação",
    description: "Explore Vice City em uma história ambientada antes de GTA Vice City."
  },
  {
    id: 4,
    title: "GTA Liberty City Stories",
    imageSearch: "Grand Theft Auto Liberty City Stories",
    platform: "PSP",
    year: 2005,
    genre: "Ação",
    description: "Uma aventura da série GTA ambientada em Liberty City."
  },
  {
    id: 5,
    title: "Tekken 6",
    imageSearch: "Tekken 6",
    platform: "PSP",
    year: 2009,
    genre: "Luta",
    description: "Jogo de luta da famosa franquia Tekken."
  },
  {
    id: 6,
    title: "Dragon Ball Z: Shin Budokai",
    imageSearch: "Dragon Ball Z Shin Budokai",
    platform: "PSP",
    year: 2006,
    genre: "Luta",
    description: "Combates de Dragon Ball Z adaptados para PSP."
  },
  {
    id: 7,
    title: "Naruto Shippuden: Ultimate Ninja Impact",
    imageSearch: "Naruto Shippuden Ultimate Ninja Impact",
    platform: "PSP",
    year: 2011,
    genre: "Ação",
    description: "Ação e batalhas em grande escala no universo Naruto."
  },
  {
    id: 8,
    title: "Burnout Legends",
    imageSearch: "Burnout Legends",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    description: "Corridas rápidas e colisões no estilo clássico de Burnout."
  },
  {
    id: 9,
    title: "Need for Speed: Most Wanted",
    imageSearch: "Need for Speed Most Wanted 2005",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    description: "Corridas e perseguições policiais em alta velocidade."
  },
  {
    id: 10,
    title: "Pro Evolution Soccer 2014",
    imageSearch: "Pro Evolution Soccer 2014",
    platform: "PSP",
    year: 2013,
    genre: "Esporte",
    description: "Jogo de futebol da série PES para PSP."
  },

  {
    id: 11,
    title: "God of War II",
    imageSearch: "God of War II",
    platform: "PS2",
    year: 2007,
    genre: "Ação",
    description: "Uma das grandes aventuras de ação do PlayStation 2."
  },
  {
    id: 12,
    title: "Resident Evil 4",
    imageSearch: "Resident Evil 4",
    platform: "PS2",
    year: 2005,
    genre: "Ação / Terror",
    description: "A aventura de Leon S. Kennedy em uma missão de resgate."
  },
  {
    id: 13,
    title: "Shadow of the Colossus",
    imageSearch: "Shadow of the Colossus",
    platform: "PS2",
    year: 2005,
    genre: "Aventura",
    description: "Uma aventura épica contra enormes criaturas."
  },
  {
    id: 14,
    title: "GTA San Andreas",
    imageSearch: "Grand Theft Auto San Andreas",
    platform: "PS2",
    year: 2004,
    genre: "Ação",
    description: "Um dos mundos abertos mais conhecidos da era PS2."
  },
  {
    id: 15,
    title: "GTA Vice City",
    imageSearch: "Grand Theft Auto Vice City",
    platform: "PS2",
    year: 2002,
    genre: "Ação",
    description: "Uma aventura de mundo aberto ambientada em Vice City."
  },
  {
    id: 16,
    title: "Bully",
    imageSearch: "Bully video game",
    platform: "PS2",
    year: 2006,
    genre: "Ação / Aventura",
    description: "Aventura da Rockstar ambientada em uma escola."
  },
  {
    id: 17,
    title: "Black",
    imageSearch: "Black video game 2006",
    platform: "PS2",
    year: 2006,
    genre: "Tiro",
    description: "Jogo de ação em primeira pessoa lançado para PS2."
  },
  {
    id: 18,
    title: "Need for Speed Underground 2",
    imageSearch: "Need for Speed Underground 2",
    platform: "PS2",
    year: 2004,
    genre: "Corrida",
    description: "Corridas urbanas e personalização de carros."
  },
  {
    id: 19,
    title: "Dragon Ball Z: Budokai 3",
    imageSearch: "Dragon Ball Z Budokai 3",
    platform: "PS2",
    year: 2004,
    genre: "Luta",
    description: "Um dos jogos de luta mais conhecidos de Dragon Ball."
  },
  {
    id: 20,
    title: "Naruto: Ultimate Ninja",
    imageSearch: "Naruto Ultimate Ninja",
    platform: "PS2",
    year: 2006,
    genre: "Luta",
    description: "Combates de Naruto no PlayStation 2."
  }
];

let currentPlatform = "TODOS";
let currentSearch = "";

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

const featuredGames = document.getElementById("featuredGames");
const gamesGrid = document.getElementById("gamesGrid");
const gameCount = document.getElementById("gameCount");
const searchResultText = document.getElementById("searchResultText");
const emptyState = document.getElementById("emptyState");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const gameModal = document.getElementById("gameModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const imageCache = {};

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function placeholderCover(game) {
  return `
    <div class="game-cover cover-placeholder">
      <span>🎮</span>
      <strong>${escapeHTML(game.platform)}</strong>
    </div>
  `;
}

function coverHTML(game) {
  const image = imageCache[game.id];

  if (!image) {
    return placeholderCover(game);
  }

  return `
    <img
      class="game-cover"
      src="${image}"
      alt="Capa de ${escapeHTML(game.title)}"
      loading="lazy"
    >
  `;
}

function gameCard(game) {
  return `
    <article class="game-card">

      <div class="game-cover-wrapper">

        ${coverHTML(game)}

        <span class="game-platform-badge">
          ${escapeHTML(game.platform)}
        </span>

      </div>

      <div class="game-info">

        <span class="game-genre">
          ${escapeHTML(game.genre)}
        </span>

        <h3 class="game-title">
          ${escapeHTML(game.title)}
        </h3>

        <p class="game-description">
          ${escapeHTML(game.description)}
        </p>

        <div class="game-meta">
          <span>${game.year}</span>
          <span>✓ Boa compatibilidade</span>
        </div>

        <button
          class="game-details-button"
          type="button"
          data-game-id="${game.id}"
        >
          Ver detalhes
        </button>

      </div>

    </article>
  `;
}

function renderFeatured() {
  if (!featuredGames) return;

  featuredGames.innerHTML = games
    .slice(0, 8)
    .map(gameCard)
    .join("");
}

function getFilteredGames() {
  const search = currentSearch.toLowerCase();

  return games.filter(game => {

    const platformMatch =
      currentPlatform === "TODOS" ||
      game.platform === currentPlatform;

    const searchMatch =
      game.title.toLowerCase().includes(search) ||
      game.genre.toLowerCase().includes(search) ||
      game.platform.toLowerCase().includes(search);

    return platformMatch && searchMatch;
  });
}

function renderGames() {
  if (!gamesGrid) return;

  const filtered = getFilteredGames();

  gamesGrid.innerHTML = filtered
    .map(gameCard)
    .join("");

  if (gameCount) {
    gameCount.textContent =
      `${filtered.length} ${filtered.length === 1 ? "jogo" : "jogos"}`;
  }

  if (emptyState) {
    emptyState.style.display =
      filtered.length === 0 ? "block" : "none";
  }

  if (searchResultText) {
    if (currentSearch) {
      searchResultText.textContent =
        `Resultados para: "${currentSearch}"`;
    } else {
      searchResultText.textContent = "";
    }
  }
}

function updateFilters() {
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === currentPlatform
    );
  });
}

function setPlatform(platform) {
  currentPlatform = platform;

  updateFilters();
  renderGames();

  const catalog = document.getElementById("catalogo");

  if (catalog) {
    catalog.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function openGame(id) {
  const game = games.find(item => item.id === id);

  if (!game || !gameModal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-content">

      <div class="modal-cover">
        ${coverHTML(game)}
      </div>

      <div class="modal-info">

        <span class="game-platform-badge">
          ${escapeHTML(game.platform)}
        </span>

        <h2>
          ${escapeHTML(game.title)}
        </h2>

        <p>
          ${escapeHTML(game.description)}
        </p>

        <div class="modal-details">

          <div>
            <strong>Ano</strong>
            <span>${game.year}</span>
          </div>

          <div>
            <strong>Plataforma</strong>
            <span>${game.platform}</span>
          </div>

          <div>
            <strong>Gênero</strong>
            <span>${escapeHTML(game.genre)}</span>
          </div>

        </div>

        <div class="modal-notice">

          <strong>Informação</strong>

          <p>
            O GameHub apresenta informações sobre jogos clássicos.
            Links de jogos devem apontar somente para fontes
            legalmente autorizadas.
          </p>

        </div>

      </div>

    </div>
  `;

  gameModal.classList.add("open");
  gameModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeGame() {
  if (!gameModal) return;

  gameModal.classList.remove("open");
  gameModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {

    currentSearch = searchInput.value.trim();

    renderGames();
  });

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {

      searchInput.value = "";
      currentSearch = "";

      renderGames();
      searchInput.focus();
    });
  }
}

function setupFilters() {

  document.querySelectorAll("[data-filter]").forEach(button => {

    button.addEventListener("click", () => {

      setPlatform(button.dataset.filter);

    });

  });

  document.querySelectorAll("[data-platform]").forEach(button => {

    button.addEventListener("click", () => {

      setPlatform(button.dataset.platform);

    });

  });

  document.querySelectorAll("[data-footer-platform]").forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      setPlatform(link.dataset.footerPlatform);

    });

  });
}

function setupGameButtons() {

  document.addEventListener("click", event => {

    const button = event.target.closest("[data-game-id]");

    if (!button) return;

    const id = Number(button.dataset.gameId);

    openGame(id);
  });
}

function setupModal() {

  if (modalClose) {
    modalClose.addEventListener("click", closeGame);
  }

  if (gameModal) {

    gameModal.addEventListener("click", event => {

      if (
        event.target.classList.contains("modal-overlay")
      ) {
        closeGame();
      }

    });

  }

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeGame();
    }

  });
}

function setupMenu() {

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {

    const opened =
      mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      opened ? "true" : "false"
    );

    menuButton.textContent =
      opened ? "✕" : "☰";

  });

  mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    });

  });
}

function setupReset() {

  const resetButton =
    document.getElementById("resetFilters");

  if (!resetButton) return;

  resetButton.addEventListener("click", () => {

    currentPlatform = "TODOS";
    currentSearch = "";

    if (searchInput) {
      searchInput.value = "";
    }

    updateFilters();
    renderGames();

  });
}

async function loadGameImage(game) {

  try {

    const url =
      "https://en.wikipedia.org/w/api.php" +
      "?action=query" +
      "&format=json" +
      "&prop=pageimages" +
      "&piprop=thumbnail" +
      "&pithumbsize=500" +
      "&redirects=1" +
      "&origin=*" +
      "&titles=" +
      encodeURIComponent(game.imageSearch);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Falha na API");
    }

    const data = await response.json();

    const pages =
      data &&
      data.query &&
      data.query.pages;

    if (!pages) return;

    const page =
      Object.values(pages)[0];

    if (
      page &&
      page.thumbnail &&
      page.thumbnail.source
    ) {

      imageCache[game.id] =
        page.thumbnail.source;

      refreshGameImages();

    }

  } catch (error) {

    console.warn(
      "Não foi possível carregar a capa:",
      game.title
    );

  }
}

function refreshGameImages() {

  renderFeatured();
  renderGames();

  if (
    gameModal &&
    gameModal.classList.contains("open")
  ) {

    const visibleId =
      modalContent.querySelector("[data-current-game]");

    if (visibleId) {
      openGame(Number(visibleId.dataset.currentGame));
    }

  }
}

async function loadAllImages() {

  const requests =
    games.map(game => loadGameImage(game));

  await Promise.allSettled(requests);
}

function setupYear() {

  const year =
    document.getElementById("currentYear");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}

function init() {

  renderFeatured();
  renderGames();

  setupSearch();
  setupFilters();
  setupGameButtons();
  setupModal();
  setupMenu();
  setupReset();
  setupYear();

  loadAllImages();
}

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
