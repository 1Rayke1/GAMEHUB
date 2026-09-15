/* =========================================================
   GAMEHUB PSP & PS2
   JavaScript principal
   ========================================================= */

"use strict";

/* =========================================================
   DADOS DOS JOGOS
   ========================================================= */

const games = [
  {
    id: 1,
    title: "God of War: Ghost of Sparta",
    platform: "PSP",
    year: 2010,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma das principais aventuras de Kratos no PSP.",
    wiki: "God of War: Ghost of Sparta"
  },
  {
    id: 2,
    title: "God of War: Chains of Olympus",
    platform: "PSP",
    year: 2008,
    genre: "Ação",
    rating: "Excelente",
    description: "Aventura de ação da série God of War para PSP.",
    wiki: "God of War: Chains of Olympus"
  },
  {
    id: 3,
    title: "GTA Vice City Stories",
    platform: "PSP",
    year: 2006,
    genre: "Ação",
    rating: "Excelente",
    description: "Explore Vice City em uma aventura exclusiva para PSP.",
    wiki: "Grand Theft Auto: Vice City Stories"
  },
  {
    id: 4,
    title: "GTA Liberty City Stories",
    platform: "PSP",
    year: 2005,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma aventura ambientada em Liberty City.",
    wiki: "Grand Theft Auto: Liberty City Stories"
  },
  {
    id: 5,
    title: "Tekken 6",
    platform: "PSP",
    year: 2009,
    genre: "Luta",
    rating: "Excelente",
    description: "Clássico jogo de luta da franquia Tekken.",
    wiki: "Tekken 6"
  },
  {
    id: 6,
    title: "Dragon Ball Z: Shin Budokai",
    platform: "PSP",
    year: 2006,
    genre: "Luta",
    rating: "Excelente",
    description: "Combates de Dragon Ball Z no PSP.",
    wiki: "Dragon Ball Z: Shin Budokai"
  },
  {
    id: 7,
    title: "Naruto Shippuden: Ultimate Ninja Impact",
    platform: "PSP",
    year: 2011,
    genre: "Ação",
    rating: "Excelente",
    description: "Ação e combates em grande escala no universo Naruto.",
    wiki: "Naruto Shippuden: Ultimate Ninja Impact"
  },
  {
    id: 8,
    title: "Burnout Legends",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas rápidas e destruição no estilo Burnout.",
    wiki: "Burnout Legends"
  },
  {
    id: 9,
    title: "Need for Speed: Most Wanted",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas e perseguições policiais no PSP.",
    wiki: "Need for Speed: Most Wanted"
  },
  {
    id: 10,
    title: "Pro Evolution Soccer 2014",
    platform: "PSP",
    year: 2013,
    genre: "Esporte",
    rating: "Excelente",
    description: "Jogo de futebol da série PES para PSP.",
    wiki: "Pro Evolution Soccer 2014"
  },

  {
    id: 11,
    title: "God of War II",
    platform: "PS2",
    year: 2007,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma das maiores aventuras de ação do PlayStation 2.",
    wiki: "God of War II"
  },
  {
    id: 12,
    title: "Resident Evil 4",
    platform: "PS2",
    year: 2005,
    genre: "Ação / Terror",
    rating: "Excelente",
    description: "Aventura de sobrevivência e ação protagonizada por Leon.",
    wiki: "Resident Evil 4"
  },
  {
    id: 13,
    title: "Shadow of the Colossus",
    platform: "PS2",
    year: 2005,
    genre: "Aventura",
    rating: "Excelente",
    description: "Uma aventura épica enfrentando enormes colossos.",
    wiki: "Shadow of the Colossus"
  },
  {
    id: 14,
    title: "GTA San Andreas",
    platform: "PS2",
    year: 2004,
    genre: "Ação",
    rating: "Excelente",
    description: "Clássico mundo aberto da Rockstar Games.",
    wiki: "Grand Theft Auto: San Andreas"
  },
  {
    id: 15,
    title: "GTA Vice City",
    platform: "PS2",
    year: 2002,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma aventura de mundo aberto ambientada em Vice City.",
    wiki: "Grand Theft Auto: Vice City"
  },
  {
    id: 16,
    title: "Bully",
    platform: "PS2",
    year: 2006,
    genre: "Ação / Aventura",
    rating: "Excelente",
    description: "Aventura de mundo aberto ambientada em uma escola.",
    wiki: "Bully (video game)"
  },
  {
    id: 17,
    title: "Black",
    platform: "PS2",
    year: 2006,
    genre: "Tiro",
    rating: "Excelente",
    description: "Jogo de tiro em primeira pessoa conhecido pela ação intensa.",
    wiki: "Black (video game)"
  },
  {
    id: 18,
    title: "Need for Speed Underground 2",
    platform: "PS2",
    year: 2004,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas urbanas e personalização de carros.",
    wiki: "Need for Speed: Underground 2"
  },
  {
    id: 19,
    title: "Dragon Ball Z: Budokai 3",
    platform: "PS2",
    year: 2004,
    genre: "Luta",
    rating: "Excelente",
    description: "Um dos jogos de luta mais conhecidos de Dragon Ball no PS2.",
    wiki: "Dragon Ball Z: Budokai 3"
  },
  {
    id: 20,
    title: "Naruto: Ultimate Ninja",
    platform: "PS2",
    year: 2006,
    genre: "Luta",
    rating: "Excelente",
    description: "Combates de Naruto no PlayStation 2.",
    wiki: "Naruto: Ultimate Ninja"
  }
];

/* =========================================================
   ESTADO
   ========================================================= */

let currentPlatform = "TODOS";
let currentSearch = "";
let currentGame = null;

/* =========================================================
   ELEMENTOS
   ========================================================= */

const elements = {
  gamesGrid: document.getElementById("gamesGrid"),
  featuredGames: document.getElementById("featuredGames"),
  gameCount: document.getElementById("gameCount"),
  searchInput: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  searchResultText: document.getElementById("searchResultText"),
  emptyState: document.getElementById("emptyState"),
  resetFilters: document.getElementById("resetFilters"),

  gameModal: document.getElementById("gameModal"),
  modalContent: document.getElementById("modalContent"),
  modalClose: document.getElementById("modalClose"),

  menuButton: document.getElementById("menuButton"),
  mobileMenu: document.getElementById("mobileMenu")
};

/* =========================================================
   UTILIDADES
   ========================================================= */

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/* =========================================================
   CAPA FALLBACK
   ========================================================= */

function createFallbackCover(game) {
  const initials = game.title
    .split(" ")
    .filter(word => word.length > 2)
    .slice(0, 3)
    .map(word => word[0])
    .join("")
    .toUpperCase();

  return `
    <div class="cover-placeholder" aria-label="${escapeHTML(game.title)}">
      <div class="cover-console">
        🎮
      </div>

      <strong>${escapeHTML(initials)}</strong>

      <span>${escapeHTML(game.title)}</span>

      <small>${escapeHTML(game.platform)} • ${game.year}</small>
    </div>
  `;
}

/* =========================================================
   IMAGENS DA WIKIPEDIA
   ========================================================= */

async function loadGameImage(game, container) {
  if (!container) return;

  try {
    const apiURL =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(game.wiki);

    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Imagem não encontrada");
    }

    const data = await response.json();

    const imageURL =
      data?.originalimage?.source ||
      data?.thumbnail?.source ||
      null;

    if (!imageURL) {
      throw new Error("Sem imagem");
    }

    container.innerHTML = `
      <img
        src="${imageURL}"
        alt="${escapeHTML(game.title)}"
        class="game-cover"
        loading="lazy"
      >
    `;

    const image = container.querySelector("img");

    image.addEventListener("error", () => {
      container.innerHTML = createFallbackCover(game);
    });

  } catch (error) {
    container.innerHTML = createFallbackCover(game);
  }
}

/* =========================================================
   CARD DOS JOGOS
   ========================================================= */

function createGameCard(game) {
  return `
    <article class="game-card" data-game-id="${game.id}">

      <div class="game-cover-wrapper" data-image-id="${game.id}">
        ${createFallbackCover(game)}
      </div>

      <div class="game-card-body">

        <div class="game-card-top">
          <span class="platform-badge">
            🎮 ${escapeHTML(game.platform)}
          </span>

          <span class="game-genre">
            ${escapeHTML(game.genre)}
          </span>
        </div>

        <h3>${escapeHTML(game.title)}</h3>

        <p>${escapeHTML(game.description)}</p>

        <div class="game-meta">
          <span>${game.year}</span>
          <span>✓ ${escapeHTML(game.rating)}</span>
        </div>

        <button
          type="button"
          class="details-button"
          data-action="details"
          data-game-id="${game.id}"
        >
          Ver detalhes
        </button>

      </div>
    </article>
  `;
}

/* =========================================================
   FILTRAGEM
   ========================================================= */

function getFilteredGames() {
  const search = normalizeText(currentSearch);

  return games.filter(game => {
    const matchesPlatform =
      currentPlatform === "TODOS" ||
      game.platform === currentPlatform;

    if (!matchesPlatform) {
      return false;
    }

    if (!search) {
      return true;
    }

    const searchableText = normalizeText(
      `${game.title} ${game.platform} ${game.genre} ${game.year} ${game.description}`
    );

    return searchableText.includes(search);
  });
}

/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
   ========================================================= */

function renderGames() {
  if (!elements.gamesGrid) return;

  const filteredGames = getFilteredGames();

  elements.gamesGrid.innerHTML = filteredGames
    .map(createGameCard)
    .join("");

  if (elements.gameCount) {
    elements.gameCount.textContent = `${filteredGames.length} ${
      filteredGames.length === 1 ? "jogo" : "jogos"
    }`;
  }

  if (elements.searchResultText) {
    if (currentSearch) {
      elements.searchResultText.textContent =
        `${filteredGames.length} resultado${
          filteredGames.length === 1 ? "" : "s"
        } para "${currentSearch}"`;
    } else {
      elements.searchResultText.textContent =
        currentPlatform === "TODOS"
          ? "Todos os jogos do catálogo"
          : `Jogos disponíveis para ${currentPlatform}`;
    }
  }

  if (elements.emptyState) {
    elements.emptyState.style.display =
      filteredGames.length === 0 ? "block" : "none";
  }

  loadVisibleImages(filteredGames);
}

/* =========================================================
   CARREGAR CAPAS
   ========================================================= */

function loadVisibleImages(gamesToLoad) {
  gamesToLoad.forEach(game => {
    const container = document.querySelector(
      `[data-image-id="${game.id}"]`
    );

    if (container) {
      loadGameImage(game, container);
    }
  });
}

/* =========================================================
   DESTAQUES
   ========================================================= */

function renderFeatured() {
  if (!elements.featuredGames) return;

  const featured = games.slice(0, 6);

  elements.featuredGames.innerHTML = featured
    .map(createGameCard)
    .join("");

  loadVisibleImages(featured);
}

/* =========================================================
   MODAL DE DETALHES
   ========================================================= */

function openGame(gameId) {
  const game = games.find(item => item.id === Number(gameId));

  if (!game || !elements.gameModal || !elements.modalContent) {
    return;
  }

  currentGame = game;

  elements.modalContent.innerHTML = `
    <div class="modal-game">

      <div
        class="modal-game-cover"
        id="modalGameCover"
      >
        ${createFallbackCover(game)}
      </div>

      <div class="modal-game-info">

        <span class="platform-badge">
          🎮 ${escapeHTML(game.platform)}
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
            <strong>Ano</strong>
            <span>${game.year}</span>
          </div>

          <div>
            <strong>Gênero</strong>
            <span>${escapeHTML(game.genre)}</span>
          </div>

          <div>
            <strong>Compatibilidade</strong>
            <span>✓ ${escapeHTML(game.rating)}</span>
          </div>

        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="details-button"
            data-modal-action="close"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  elements.gameModal.classList.add("open");
  elements.gameModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const modalCover = document.getElementById("modalGameCover");

  if (modalCover) {
    loadGameImage(game, modalCover);
  }
}

function closeGameModal() {
  if (!elements.gameModal) return;

  elements.gameModal.classList.remove("open");
  elements.gameModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  currentGame = null;
}

/* =========================================================
   PESQUISA
   ========================================================= */

function handleSearch(value) {
  currentSearch = value || "";
  renderGames();
}

if (elements.searchInput) {
  elements.searchInput.addEventListener("input", event => {
    handleSearch(event.target.value);
  });
}

if (elements.clearSearch) {
  elements.clearSearch.addEventListener("click", () => {
    if (elements.searchInput) {
      elements.searchInput.value = "";
    }

    currentSearch = "";
    renderGames();
  });
}

/* =========================================================
   FILTROS
   ========================================================= */

function setPlatform(platform) {
  currentPlatform = platform;

  document.querySelectorAll("[data-filter]").forEach(button => {
    const filter = button.dataset.filter;

    button.classList.toggle(
      "active",
      filter === currentPlatform ||
      (currentPlatform === "TODOS" && filter === "TODOS")
    );
  });

  renderGames();
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "TODOS";

    setPlatform(filter);
  });
});

/* =========================================================
   PLATAFORMAS
   ========================================================= */

document.querySelectorAll("[data-platform]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    const platform = button.dataset.platform;

    if (!platform) return;

    setPlatform(platform);

    const catalog = document.getElementById("catalogo");

    if (catalog) {
      catalog.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    closeMobileMenu();
  });
});

/* =========================================================
   BOTÃO "VER TODOS"
   ========================================================= */

document.querySelectorAll('a[href="#catalogo"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    setPlatform("TODOS");

    if (elements.searchInput) {
      elements.searchInput.value = "";
    }

    currentSearch = "";

    const catalog = document.getElementById("catalogo");

    if (catalog) {
      catalog.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    closeMobileMenu();
  });
});

/* =========================================================
   BOTÃO RESETAR FILTROS
   ========================================================= */

if (elements.resetFilters) {
  elements.resetFilters.addEventListener("click", () => {
    currentPlatform = "TODOS";
    currentSearch = "";

    if (elements.searchInput) {
      elements.searchInput.value = "";
    }

    setPlatform("TODOS");

    window.scrollTo({
      top: document.getElementById("catalogo")?.offsetTop || 0,
      behavior: "smooth"
    });
  });
}

/* =========================================================
   CLIQUES NOS CARDS
   ========================================================= */

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");

  if (!target) return;

  const action = target.dataset.action;

  if (action === "details") {
    openGame(target.dataset.gameId);
  }
});

/* =========================================================
   MODAL
   ========================================================= */

if (elements.modalClose) {
  elements.modalClose.addEventListener("click", closeGameModal);
}

if (elements.gameModal) {
  elements.gameModal.addEventListener("click", event => {
    if (
      event.target.classList.contains("modal-overlay") ||
      event.target === elements.gameModal
    ) {
      closeGameModal();
    }

    const modalAction =
      event.target.closest("[data-modal-action]");

    if (
      modalAction &&
      modalAction.dataset.modalAction === "close"
    ) {
      closeGameModal();
    }
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeGameModal();
  }
});

/* =========================================================
   MENU MOBILE
   ========================================================= */

function openMobileMenu() {
  if (!elements.mobileMenu) return;

  elements.mobileMenu.classList.add("open");

  if (elements.menuButton) {
    elements.menuButton.setAttribute("aria-expanded", "true");
  }
}

function closeMobileMenu() {
  if (!elements.mobileMenu) return;

  elements.mobileMenu.classList.remove("open");

  if (elements.menuButton) {
    elements.menuButton.setAttribute("aria-expanded", "false");
  }
}

if (elements.menuButton) {
  elements.menuButton.addEventListener("click", event => {
    event.stopPropagation();

    const isOpen =
      elements.mobileMenu?.classList.contains("open");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* =========================================================
   LINKS INTERNOS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    closeMobileMenu();
  });
});

/* =========================================================
   GUIAS
   ========================================================= */

const guideContent = {
  psp: {
    title: "Emulação PSP",
    text: `
      <p>
        O PSP possui diversos jogos que podem ser executados
        através de emuladores compatíveis.
      </p>

      <p>
        Para obter uma boa experiência, verifique a compatibilidade
        do jogo com o seu dispositivo e utilize configurações
        adequadas ao desempenho do aparelho.
      </p>

      <p>
        O GameHub apresenta informações e referências sobre os
        jogos, sem hospedar arquivos protegidos por direitos autorais.
      </p>
    `
  },

  ps2: {
    title: "Emulação PS2",
    text: `
      <p>
        A emulação de PlayStation 2 exige mais recursos do aparelho
        do que a emulação de consoles portáteis.
      </p>

      <p>
        O desempenho pode variar bastante entre jogos e dispositivos.
        Ajustes gráficos e de resolução podem influenciar a
        estabilidade da emulação.
      </p>

      <p>
        Utilize somente jogos e arquivos que você tenha direito de
        utilizar.
      </p>
    `
  },

  dicas: {
    title: "Dicas para jogadores",
    text: `
      <p>
        Antes de iniciar um jogo, confira sua plataforma,
        ano de lançamento e gênero.
      </p>

      <p>
        No catálogo GameHub você também pode pesquisar pelo nome
        do jogo e utilizar os filtros PSP e PS2.
      </p>

      <p>
        Para uma experiência melhor, mantenha o emulador atualizado
        e utilize configurações compatíveis com seu dispositivo.
      </p>
    `
  }
};

function openGuide(type) {
  const guide = guideContent[type];

  if (!guide || !elements.gameModal || !elements.modalContent) {
    return;
  }

  elements.modalContent.innerHTML = `
    <div class="modal-game">

      <div class="modal-game-cover">
        <div class="cover-placeholder">
          <div class="cover-console">⚙️</div>
          <strong>GAMEHUB</strong>
          <span>Guia</span>
        </div>
      </div>

      <div class="modal-game-info">

        <span class="platform-badge">
          GAMEHUB
        </span>

        <h2>${escapeHTML(guide.title)}</h2>

        <div class="modal-description">
          ${guide.text}
        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="details-button"
            data-modal-action="close"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  elements.gameModal.classList.add("open");
  elements.gameModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

/* =========================================================
   DETECTAR CLIQUES NOS GUIAS
   ========================================================= */

document.querySelectorAll("[data-guide]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    const guideType = button.dataset.guide;

    if (guideType) {
      openGuide(guideType);
    }
  });
});

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function initializeGameHub() {
  currentPlatform = "TODOS";
  currentSearch = "";

  renderFeatured();
  renderGames();

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === "TODOS"
    );
  });

  if (elements.gameModal) {
    elements.gameModal.setAttribute("aria-hidden", "true");
  }

  if (elements.menuButton) {
    elements.menuButton.setAttribute("aria-expanded", "false");
  }

  console.log(
    `GameHub iniciado: ${games.length} jogos carregados.`
  );
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeGameHub
  );
} else {
  initializeGameHub();
}
