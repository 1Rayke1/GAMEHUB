const games = [
  {
    id: 1,
    title: "God of War: Ghost of Sparta",
    platform: "PSP",
    year: 2010,
    genre: "Ação",
    description: "Uma das principais aventuras de Kratos no PSP.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 2,
    title: "God of War: Chains of Olympus",
    platform: "PSP",
    year: 2008,
    genre: "Ação",
    description: "Aventura de ação da série God of War para PSP.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 3,
    title: "GTA Vice City Stories",
    platform: "PSP",
    year: 2006,
    genre: "Ação",
    description: "Explore Vice City em uma aventura exclusiva para PSP.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 4,
    title: "GTA Liberty City Stories",
    platform: "PSP",
    year: 2005,
    genre: "Ação",
    description: "Uma aventura ambientada em Liberty City.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 5,
    title: "Tekken 6",
    platform: "PSP",
    year: 2009,
    genre: "Luta",
    description: "Clássico jogo de luta da franquia Tekken.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 6,
    title: "Dragon Ball Z: Shin Budokai",
    platform: "PSP",
    year: 2006,
    genre: "Luta",
    description: "Combates de Dragon Ball Z no PSP.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 7,
    title: "Naruto Shippuden: Ultimate Ninja Impact",
    platform: "PSP",
    year: 2011,
    genre: "Ação",
    description: "Ação e combates em grande escala no universo Naruto.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 8,
    title: "Burnout Legends",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    description: "Corridas rápidas e destruição no estilo Burnout.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 9,
    title: "Need for Speed: Most Wanted",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    description: "Corridas e perseguições policiais no PSP.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 10,
    title: "Pro Evolution Soccer 2014",
    platform: "PSP",
    year: 2013,
    genre: "Esporte",
    description: "Jogo de futebol da série PES para PSP.",
    compatibility: "Excelente",
    cover: ""
  },

  {
    id: 11,
    title: "God of War II",
    platform: "PS2",
    year: 2007,
    genre: "Ação",
    description: "Uma das maiores aventuras de ação do PlayStation 2.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 12,
    title: "Resident Evil 4",
    platform: "PS2",
    year: 2005,
    genre: "Ação / Terror",
    description: "Aventura de sobrevivência e ação protagonizada por Leon.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 13,
    title: "Shadow of the Colossus",
    platform: "PS2",
    year: 2005,
    genre: "Aventura",
    description: "Uma aventura épica enfrentando enormes colossos.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 14,
    title: "GTA San Andreas",
    platform: "PS2",
    year: 2004,
    genre: "Ação",
    description: "Clássico mundo aberto da Rockstar Games.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 15,
    title: "GTA Vice City",
    platform: "PS2",
    year: 2002,
    genre: "Ação",
    description: "Uma aventura de mundo aberto ambientada em Vice City.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 16,
    title: "Bully",
    platform: "PS2",
    year: 2006,
    genre: "Ação / Aventura",
    description: "Aventura de mundo aberto ambientada em uma escola.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 17,
    title: "Black",
    platform: "PS2",
    year: 2006,
    genre: "Tiro",
    description: "Jogo de tiro em primeira pessoa conhecido pela ação intensa.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 18,
    title: "Need for Speed Underground 2",
    platform: "PS2",
    year: 2004,
    genre: "Corrida",
    description: "Corridas urbanas e personalização de carros.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 19,
    title: "Dragon Ball Z: Budokai 3",
    platform: "PS2",
    year: 2004,
    genre: "Luta",
    description: "Um dos jogos de luta mais conhecidos de Dragon Ball no PS2.",
    compatibility: "Excelente",
    cover: ""
  },
  {
    id: 20,
    title: "Naruto: Ultimate Ninja",
    platform: "PS2",
    year: 2006,
    genre: "Luta",
    description: "Combates de Naruto no PlayStation 2.",
    compatibility: "Excelente",
    cover: ""
  }
];

let currentPlatform = "TODOS";
let currentSearch = "";

const gamesGrid = document.getElementById("gamesGrid");
const gameCount = document.getElementById("gameCount");
const emptyState = document.getElementById("emptyState");
const searchMessage = document.getElementById("searchMessage");
const gameSearch = document.getElementById("gameSearch");
const clearSearch = document.getElementById("clearSearch");

const featuredGames = document.getElementById("featuredGames");

const gameModal = document.getElementById("gameModal");
const modalGameContent = document.getElementById("modalGameContent");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

function getCover(game) {
  if (game.cover && game.cover.trim() !== "") {
    return `
      <img
        class="game-cover"
        src="${game.cover}"
        alt="Capa de ${game.title}"
        loading="lazy"
      >
    `;
  }

  return `
    <div class="game-cover cover-placeholder">
      <span>🎮</span>
      <strong>${game.platform}</strong>
    </div>
  `;
}

function createGameCard(game) {
  return `
    <article class="game-card" data-id="${game.id}">
      <div class="game-cover-wrapper">
        ${getCover(game)}

        <span class="game-platform-badge">
          ${game.platform}
        </span>
      </div>

      <div class="game-info">
        <span class="game-genre">${game.genre}</span>

        <h3 class="game-title">
          ${game.title}
        </h3>

        <p class="game-description">
          ${game.description}
        </p>

        <div class="game-meta">
          <span>${game.year}</span>
          <span>✓ ${game.compatibility}</span>
        </div>

        <button class="game-details-button" onclick="openGameModal(${game.id})">
          Ver detalhes
        </button>
      </div>
    </article>
  `;
}

function renderGames() {
  if (!gamesGrid) return;

  const filteredGames = games.filter(game => {
    const platformMatch =
      currentPlatform === "TODOS" ||
      game.platform === currentPlatform;

    const searchMatch =
      game.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      game.genre.toLowerCase().includes(currentSearch.toLowerCase());

    return platformMatch && searchMatch;
  });

  gamesGrid.innerHTML = filteredGames
    .map(createGameCard)
    .join("");

  if (gameCount) {
    gameCount.textContent = `${filteredGames.length} jogos`;
  }

  if (emptyState) {
    emptyState.style.display =
      filteredGames.length === 0 ? "block" : "none";
  }

  if (searchMessage) {
    searchMessage.textContent =
      currentSearch
        ? `Resultados para "${currentSearch}"`
        : "";
  }
}

function renderFeaturedGames() {
  if (!featuredGames) return;

  const featured = games.slice(0, 6);

  featuredGames.innerHTML = featured
    .map(createGameCard)
    .join("");
}

function setPlatform(platform) {
  currentPlatform = platform;

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === platform
    );
  });

  document.querySelectorAll("[data-platform]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.platform === platform
    );
  });

  renderGames();

  const catalog = document.getElementById("catalog");

  if (catalog) {
    catalog.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function openGameModal(id) {
  const game = games.find(item => item.id === id);

  if (!game || !gameModal || !modalGameContent) return;

  modalGameContent.innerHTML = `
    <div class="modal-cover">
      ${getCover(game)}
    </div>

    <div class="modal-info">
      <span class="game-platform-badge">
        ${game.platform}
      </span>

      <h2>${game.title}</h2>

      <p>${game.description}</p>

      <div class="modal-details">
        <div>
          <strong>Ano</strong>
          <span>${game.year}</span>
        </div>

        <div>
          <strong>Gênero</strong>
          <span>${game.genre}</span>
        </div>

        <div>
          <strong>Compatibilidade</strong>
          <span>${game.compatibility}</span>
        </div>
      </div>

      <div class="modal-notice">
        <strong>GameHub</strong>
        <p>
          Página informativa do catálogo. Links de jogos só devem
          apontar para fontes legalmente autorizadas.
        </p>
      </div>
    </div>
  `;

  gameModal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeGameModal() {
  if (!gameModal) return;

  gameModal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function setupSearch() {
  if (!gameSearch) return;

  gameSearch.addEventListener("input", event => {
    currentSearch = event.target.value.trim();
    renderGames();
  });

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      gameSearch.value = "";
      currentSearch = "";
      renderGames();
      gameSearch.focus();
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

  document.querySelectorAll("[data-footer-platform]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();

      setPlatform(button.dataset.footerPlatform);
    });
  });
}

function setupModal() {
  if (!gameModal) return;

  const closeButton = gameModal.querySelector(".modal-close");

  if (closeButton) {
    closeButton.addEventListener("click", closeGameModal);
  }

  gameModal.addEventListener("click", event => {
    if (event.target === gameModal) {
      closeGameModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeGameModal();
    }
  });
}

function setupMobileMenu() {
  if (!mobileMenuButton || !mobileMenu) return;

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function setupResetButton() {
  const resetButton = document.getElementById("resetFilters");

  if (!resetButton) return;

  resetButton.addEventListener("click", () => {
    currentPlatform = "TODOS";
    currentSearch = "";

    if (gameSearch) {
      gameSearch.value = "";
    }

    document.querySelectorAll("[data-filter]").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === "TODOS"
      );
    });

    renderGames();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGames();
  renderGames();

  setupSearch();
  setupFilters();
  setupModal();
  setupMobileMenu();
  setupResetButton();

  const year = document.getElementById("currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
