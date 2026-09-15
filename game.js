"use strict";

/* =========================================================
   GAMEHUB — DADOS
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

let currentFilter = "TODOS";
let currentSearch = "";

/* =========================================================
   ELEMENTOS
   ========================================================= */

const gamesGrid = document.getElementById("gamesGrid");
const featuredGames = document.getElementById("featuredGames");
const gameCount = document.getElementById("gameCount");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResultText = document.getElementById("searchResultText");
const emptyState = document.getElementById("emptyState");
const resetFilters = document.getElementById("resetFilters");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const gameModal = document.getElementById("gameModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

/* =========================================================
   UTILIDADES
   ========================================================= */

function normalize(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   CAPA ALTERNATIVA
   ========================================================= */

function getInitials(title) {
  return title
    .split(" ")
    .filter(word => word.length > 2)
    .slice(0, 3)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

function fallbackCover(game) {
  return `
    <div class="cover-placeholder">
      <div class="cover-console">🎮</div>
      <strong>${escapeHTML(getInitials(game.title))}</strong>
      <span>${escapeHTML(game.title)}</span>
      <small>${escapeHTML(game.platform)} • ${game.year}</small>
    </div>
  `;
}

/* =========================================================
   IMAGENS
   Usa a API MediaWiki, mais estável que a REST anterior.
   ========================================================= */

async function loadCover(game, container) {
  if (!container) return;

  try {
    const api =
      "https://en.wikipedia.org/w/api.php" +
      "?action=query" +
      "&prop=pageimages" +
      "&format=json" +
      "&origin=*" +
      "&pithumbsize=600" +
      "&redirects=1" +
      "&titles=" +
      encodeURIComponent(game.wiki);

    const response = await fetch(api, {
      method: "GET",
      cache: "force-cache"
    });

    if (!response.ok) {
      throw new Error("Falha na API");
    }

    const data = await response.json();

    const pages = data?.query?.pages || {};
    const page = Object.values(pages)[0];

    const image =
      page?.thumbnail?.source ||
      page?.original?.source;

    if (!image) {
      throw new Error("Sem imagem");
    }

    const img = document.createElement("img");

    img.className = "game-cover";
    img.alt = game.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.src = image;

    img.addEventListener("error", () => {
      container.innerHTML = fallbackCover(game);
    });

    container.innerHTML = "";
    container.appendChild(img);

  } catch (error) {
    container.innerHTML = fallbackCover(game);
  }
}

/* =========================================================
   CARD
   ========================================================= */

function createCard(game) {
  return `
    <article class="game-card">

      <div
        class="game-cover-wrapper"
        data-cover="${game.id}"
      >
        ${fallbackCover(game)}
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

          <span>
            ✓ ${escapeHTML(game.rating)}
          </span>
        </div>

        <button
          type="button"
          class="details-button"
          data-details="${game.id}"
        >
          Ver detalhes
        </button>

      </div>
    </article>
  `;
}

/* =========================================================
   FILTROS
   ========================================================= */

function getFilteredGames() {
  const search = normalize(currentSearch);

  return games.filter(game => {

    const platformMatch =
      currentFilter === "TODOS" ||
      game.platform === currentFilter;

    if (!platformMatch) {
      return false;
    }

    if (!search) {
      return true;
    }

    const searchable = normalize(
      [
        game.title,
        game.platform,
        game.genre,
        game.year,
        game.description
      ].join(" ")
    );

    return searchable.includes(search);
  });
}

function updateFilterButtons() {
  document
    .querySelectorAll("[data-filter]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === currentFilter
      );

    });
}

function setFilter(filter) {
  if (
    filter !== "TODOS" &&
    filter !== "PSP" &&
    filter !== "PS2"
  ) {
    filter = "TODOS";
  }

  currentFilter = filter;

  updateFilterButtons();
  renderCatalog();
}

/* =========================================================
   CAPAS
   ========================================================= */

function loadCovers(list) {
  list.forEach(game => {

    const container =
      document.querySelector(
        `[data-cover="${game.id}"]`
      );

    if (container) {
      loadCover(game, container);
    }

  });
}

function loadModalCover(game, container) {
  if (!container) return;

  loadCover(game, container);
}

/* =========================================================
   CATÁLOGO
   ========================================================= */

function renderCatalog() {
  if (!gamesGrid) return;

  const filtered = getFilteredGames();

  gamesGrid.innerHTML =
    filtered.map(createCard).join("");

  if (gameCount) {
    gameCount.textContent =
      `${filtered.length} ${
        filtered.length === 1
          ? "jogo"
          : "jogos"
      }`;
  }

  if (searchResultText) {

    if (currentSearch) {

      searchResultText.textContent =
        `${filtered.length} resultado${
          filtered.length === 1 ? "" : "s"
        } para "${currentSearch}"`;

    } else if (currentFilter === "TODOS") {

      searchResultText.textContent =
        "Todos os jogos do catálogo";

    } else {

      searchResultText.textContent =
        `Jogos disponíveis para ${currentFilter}`;

    }
  }

  if (emptyState) {
    emptyState.hidden =
      filtered.length !== 0;
  }

  loadCovers(filtered);
}

/* =========================================================
   DESTAQUES
   ========================================================= */

function renderFeatured() {
  if (!featuredGames) return;

  const featured = games.slice(0, 6);

  featuredGames.innerHTML =
    featured.map(createCard).join("");

  loadCovers(featured);
}

/* =========================================================
   PESQUISA
   ========================================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    event => {

      currentSearch =
        event.target.value;

      renderCatalog();

    }
  );

}

if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    () => {

      currentSearch = "";

      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }

      renderCatalog();

    }
  );

}

/* =========================================================
   BOTÕES DE FILTRO
   ========================================================= */

document
  .querySelectorAll("[data-filter]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setFilter(
          button.dataset.filter
        );

        document
          .getElementById("catalogo")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });

/* =========================================================
   PLATAFORMAS
   ========================================================= */

document
  .querySelectorAll("[data-platform]")
  .forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const platform =
          button.dataset.platform;

        if (
          platform !== "PSP" &&
          platform !== "PS2"
        ) {
          return;
        }

        setFilter(platform);

        document
          .getElementById("catalogo")
          ?.scrollIntoView({
            behavior: "smooth"
          });

        closeMenu();

      }
    );

  });

/* =========================================================
   VER TODOS
   ========================================================= */

document
  .querySelectorAll('a[href="#catalogo"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.preventDefault();

        currentFilter = "TODOS";
        currentSearch = "";

        if (searchInput) {
          searchInput.value = "";
        }

        updateFilterButtons();
        renderCatalog();

        document
          .getElementById("catalogo")
          ?.scrollIntoView({
            behavior: "smooth"
          });

        closeMenu();

      }
    );

  });

/* =========================================================
   RESETAR FILTROS
   ========================================================= */

if (resetFilters) {

  resetFilters.addEventListener(
    "click",
    () => {

      currentFilter = "TODOS";
      currentSearch = "";

      if (searchInput) {
        searchInput.value = "";
      }

      updateFilterButtons();
      renderCatalog();

    }
  );

}

/* =========================================================
   DETALHES DO JOGO
   ========================================================= */

function openGame(gameId) {

  const id = Number(gameId);

  const game =
    games.find(item => item.id === id);

  if (!game) {
    console.error(
      "Jogo não encontrado:",
      gameId
    );
    return;
  }

  if (!gameModal || !modalContent) {
    console.error(
      "Elementos do modal não encontrados."
    );
    return;
  }

  modalContent.innerHTML = `
    <div class="modal-game">

      <div
        class="modal-game-cover"
        data-modal-cover="${game.id}"
      >
        ${fallbackCover(game)}
      </div>

      <div class="modal-game-info">

        <span class="platform-badge">
          🎮 ${escapeHTML(game.platform)}
        </span>

        <h2>
          ${escapeHTML(game.title)}
        </h2>

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
            <span>
              ✓ ${escapeHTML(game.rating)}
            </span>
          </div>

        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="details-button"
            id="modalGameClose"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  gameModal.classList.add("open");

  gameModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  const cover =
    modalContent.querySelector(
      `[data-modal-cover="${game.id}"]`
    );

  loadModalCover(game, cover);

}

/* =========================================================
   FECHAR MODAL
   ========================================================= */

function closeModal() {

  if (!gameModal) return;

  gameModal.classList.remove("open");

  gameModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}

if (gameModal) {

  gameModal.addEventListener(
    "click",
    event => {

      if (
        event.target.classList.contains(
          "modal-overlay"
        )
      ) {
        closeModal();
      }

    }
  );

}

/* =========================================================
   CLIQUES NOS BOTÕES
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const target =
      event.target instanceof Element
        ? event.target
        : null;

    if (!target) return;

    const details =
      target.closest(
        "[data-details]"
      );

    if (details) {

      event.preventDefault();

      openGame(
        details.dataset.details
      );

      return;
    }

    const modalGameClose =
      target.closest(
        "#modalGameClose"
      );

    if (modalGameClose) {

      event.preventDefault();
      closeModal();

      return;
    }

    const modalCloseButton =
      target.closest(
        "[data-modal-close]"
      );

    if (modalCloseButton) {

      event.preventDefault();
      closeModal();

    }

  }
);

/* =========================================================
   ESC FECHA MODAL
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);

/* =========================================================
   MENU MOBILE
   ========================================================= */

function openMenu() {

  if (!mobileMenu) return;

  mobileMenu.classList.add("open");

  if (menuButton) {
    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );
  }

}

function closeMenu() {

  if (!mobileMenu) return;

  mobileMenu.classList.remove("open");

  if (menuButton) {
    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );
  }

}

if (menuButton) {

  menuButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      if (
        mobileMenu?.classList.contains(
          "open"
        )
      ) {
        closeMenu();
      } else {
        openMenu();
      }

    }
  );

}

document
  .querySelectorAll("#mobileMenu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });

/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

document
  .querySelectorAll("[data-scroll]")
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const href =
          link.getAttribute("href");

        if (
          !href ||
          !href.startsWith("#")
        ) {
          return;
        }

        const target =
          document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        closeMenu();

      }
    );

  });

/* =========================================================
   GUIAS
   ========================================================= */

const guides = {

  psp: {
    title: "Emulação PSP",
    platform: "PSP",
    text: `
      <p>
        O PSP possui uma grande biblioteca de jogos
        e pode ser emulado em dispositivos compatíveis.
      </p>

      <p>
        O desempenho varia de acordo com o aparelho,
        o jogo e as configurações utilizadas.
      </p>

      <p>
        Utilize somente jogos e arquivos que você
        tenha direito de utilizar.
      </p>
    `
  },

  ps2: {
    title: "Emulação PS2",
    platform: "PS2",
    text: `
      <p>
        A emulação de PlayStation 2 pode exigir
        mais recursos do dispositivo.
      </p>

      <p>
        Resolução, velocidade e outras configurações
        podem influenciar o desempenho.
      </p>

      <p>
        Utilize somente jogos e arquivos que você
        tenha direito de utilizar.
      </p>
    `
  },

  dicas: {
    title: "Dicas para jogadores",
    platform: "GAMEHUB",
    text: `
      <p>
        Use a pesquisa para encontrar rapidamente
        um jogo pelo nome, plataforma ou gênero.
      </p>

      <p>
        Os filtros PSP e PS2 permitem separar
        rapidamente os catálogos.
      </p>

      <p>
        Abra os detalhes de cada jogo para visualizar
        suas principais informações.
      </p>
    `
  }

};

function openGuide(type) {

  const guide = guides[type];

  if (!guide || !gameModal || !modalContent) {
    return;
  }

  modalContent.innerHTML = `
    <div class="modal-game">

      <div class="modal-game-cover">

        <div class="cover-placeholder">

          <div class="cover-console">
            ⚙️
          </div>

          <strong>
            ${escapeHTML(guide.platform)}
          </strong>

          <span>
            Guia GameHub
          </span>

        </div>

      </div>

      <div class="modal-game-info">

        <span class="platform-badge">
          ${escapeHTML(guide.platform)}
        </span>

        <h2>
          ${escapeHTML(guide.title)}
        </h2>

        <div class="modal-description">
          ${guide.text}
        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="details-button"
            id="modalGuideClose"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  gameModal.classList.add("open");

  gameModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}

document
  .querySelectorAll("[data-guide]")
  .forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openGuide(
          button.dataset.guide
        );

      }
    );

  });

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function initialize() {

  currentFilter = "TODOS";
  currentSearch = "";

  if (searchInput) {
    searchInput.value = "";
  }

  updateFilterButtons();

  renderFeatured();
  renderCatalog();

  if (gameModal) {

    gameModal.classList.remove(
      "open"
    );

    gameModal.setAttribute(
      "aria-hidden",
      "true"
    );

  }

  if (mobileMenu) {
    mobileMenu.classList.remove(
      "open"
    );
  }

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }

  console.log(
    `GameHub carregado: ${games.length} jogos.`
  );

}

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initialize
  );

} else {

  initialize();

}
