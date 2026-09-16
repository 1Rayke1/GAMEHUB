"use strict";

/* =========================================================
   GAMEHUB — CATÁLOGO PSP & PS2
   ========================================================= */

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
    searchTerms: "god of war ghost sparta gow kratos",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/God_of_War_Ghost_of_Sparta_cover.jpg"
  },

  {
    id: 2,
    title: "God of War: Chains of Olympus",
    platform: "PSP",
    year: 2008,
    genre: "Ação",
    rating: "Excelente",
    description: "Aventura de ação da série God of War para PSP.",
    searchTerms: "god of war chains olympus gow kratos",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/God_of_War_Chains_of_Olympus_cover.jpg"
  },

  {
    id: 3,
    title: "GTA Vice City Stories",
    platform: "PSP",
    year: 2006,
    genre: "Ação",
    rating: "Excelente",
    description: "Explore Vice City em uma aventura exclusiva para PSP.",
    searchTerms: "gta grand theft auto vice city stories vcs",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Grand_Theft_Auto_Vice_City_Stories.jpg"
  },

  {
    id: 4,
    title: "GTA Liberty City Stories",
    platform: "PSP",
    year: 2005,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma aventura ambientada em Liberty City.",
    searchTerms: "gta grand theft auto liberty city stories lcs",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Grand_Theft_Auto_Liberty_City_Stories.jpg"
  },

  {
    id: 5,
    title: "Tekken 6",
    platform: "PSP",
    year: 2009,
    genre: "Luta",
    rating: "Excelente",
    description: "Clássico jogo de luta da franquia Tekken.",
    searchTerms: "tekken 6 luta fighting",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Tekken_6.jpg"
  },

  {
    id: 6,
    title: "Dragon Ball Z: Shin Budokai",
    platform: "PSP",
    year: 2006,
    genre: "Luta",
    rating: "Excelente",
    description: "Combates de Dragon Ball Z no PSP.",
    searchTerms: "dragon ball dbz shin budokai goku vegeta",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Dragon_Ball_Z_Shin_Budokai.jpg"
  },

  {
    id: 7,
    title: "Naruto Shippuden: Ultimate Ninja Impact",
    platform: "PSP",
    year: 2011,
    genre: "Ação",
    rating: "Excelente",
    description: "Ação e combates em grande escala no universo Naruto.",
    searchTerms: "naruto shippuden ultimate ninja impact",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Naruto_Shippuden_Ultimate_Ninja_Impact.jpg"
  },

  {
    id: 8,
    title: "Burnout Legends",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas rápidas e destruição no estilo Burnout.",
    searchTerms: "burnout legends corrida carros",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Burnout_Legends.jpg"
  },

  {
    id: 9,
    title: "Need for Speed: Most Wanted",
    platform: "PSP",
    year: 2005,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas e perseguições policiais no PSP.",
    searchTerms: "need for speed nfs most wanted corrida carros",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Need_for_Speed_Most_Wanted_cover.jpg"
  },

  {
    id: 10,
    title: "Pro Evolution Soccer 2014",
    platform: "PSP",
    year: 2013,
    genre: "Esporte",
    rating: "Excelente",
    description: "Jogo de futebol da série PES para PSP.",
    searchTerms: "pes pes 2014 futebol pro evolution soccer",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Pro_Evolution_Soccer_2014_cover.jpg"
  },

  {
    id: 11,
    title: "God of War II",
    platform: "PS2",
    year: 2007,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma das maiores aventuras de ação do PlayStation 2.",
    searchTerms: "god of war 2 ii gow kratos",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/God_of_War_II_cover.jpg"
  },

  {
    id: 12,
    title: "Resident Evil 4",
    platform: "PS2",
    year: 2005,
    genre: "Ação / Terror",
    rating: "Excelente",
    description: "Aventura de sobrevivência e ação protagonizada por Leon.",
    searchTerms: "resident evil re4 4 leon terror",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Resident_Evil_4_cover.jpg"
  },

  {
    id: 13,
    title: "Shadow of the Colossus",
    platform: "PS2",
    year: 2005,
    genre: "Aventura",
    rating: "Excelente",
    description: "Uma aventura épica enfrentando enormes colossos.",
    searchTerms: "shadow colossus colossos wander aventura",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Shadow_of_the_Colossus_cover.jpg"
  },

  {
    id: 14,
    title: "GTA San Andreas",
    platform: "PS2",
    year: 2004,
    genre: "Ação",
    rating: "Excelente",
    description: "Clássico mundo aberto da Rockstar Games.",
    searchTerms: "gta grand theft auto san andreas cj",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Grand_Theft_Auto_San_Andreas_cover.jpg"
  },

  {
    id: 15,
    title: "GTA Vice City",
    platform: "PS2",
    year: 2002,
    genre: "Ação",
    rating: "Excelente",
    description: "Uma aventura de mundo aberto ambientada em Vice City.",
    searchTerms: "gta grand theft auto vice city tommy",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Grand_Theft_Auto_Vice_City_cover.jpg"
  },

  {
    id: 16,
    title: "Bully",
    platform: "PS2",
    year: 2006,
    genre: "Ação / Aventura",
    rating: "Excelente",
    description: "Aventura de mundo aberto ambientada em uma escola.",
    searchTerms: "bully scholarship edition jimmy escola",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Bully_cover.jpg"
  },

  {
    id: 17,
    title: "Black",
    platform: "PS2",
    year: 2006,
    genre: "Tiro",
    rating: "Excelente",
    description: "Jogo de tiro em primeira pessoa conhecido pela ação intensa.",
    searchTerms: "black fps tiro ação ps2",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Black_cover.jpg"
  },

  {
    id: 18,
    title: "Need for Speed Underground 2",
    platform: "PS2",
    year: 2004,
    genre: "Corrida",
    rating: "Excelente",
    description: "Corridas urbanas e personalização de carros.",
    searchTerms: "need for speed nfs underground 2 corrida carros tuning",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Need_for_Speed_Underground_2_cover.jpg"
  },

  {
    id: 19,
    title: "Dragon Ball Z: Budokai 3",
    platform: "PS2",
    year: 2004,
    genre: "Luta",
    rating: "Excelente",
    description: "Um dos jogos de luta mais conhecidos de Dragon Ball no PS2.",
    searchTerms: "dragon ball dbz budokai 3 goku vegeta",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Dragon_Ball_Z_Budokai_3_cover.jpg"
  },

  {
    id: 20,
    title: "Naruto: Ultimate Ninja",
    platform: "PS2",
    year: 2006,
    genre: "Luta",
    rating: "Excelente",
    description: "Combates de Naruto no PlayStation 2.",
    searchTerms: "naruto ultimate ninja luta",
    cover: "https://en.wikipedia.org/wiki/Special:Redirect/file/Naruto_Ultimate_Ninja_cover.jpg"
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
   UTILITÁRIOS
   ========================================================= */

function normalize(text) {
  return String(text ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHTML(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getInitials(title) {
  return String(title)
    .split(/\s+/)
    .filter(word => word.length > 2)
    .slice(0, 3)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

/* =========================================================
   FALLBACK DE CAPA
   ========================================================= */

function fallbackCover(game) {
  return `
    <div class="cover-placeholder">
      <div class="cover-console">🎮</div>

      <strong>
        ${escapeHTML(getInitials(game.title))}
      </strong>

      <span>
        ${escapeHTML(game.title)}
      </span>

      <small>
        ${escapeHTML(game.platform)} • ${game.year}
      </small>
    </div>
  `;
}

/* =========================================================
   CARREGAMENTO DAS CAPAS
   ========================================================= */

function loadCover(game, container) {
  if (!container || !game) {
    return;
  }

  container.innerHTML = `
    <div class="cover-placeholder">
      <div class="cover-console">🎮</div>

      <strong>
        ${escapeHTML(getInitials(game.title))}
      </strong>

      <span>
        Carregando capa...
      </span>

      <small>
        ${escapeHTML(game.platform)}
      </small>
    </div>
  `;

  const image = new Image();

  image.className = "game-cover";
  image.alt = game.title;
  image.loading = "lazy";
  image.decoding = "async";

  image.onload = function () {
    if (!container.isConnected) {
      return;
    }

    container.innerHTML = "";
    container.appendChild(image);
  };

  image.onerror = function () {
    if (!container.isConnected) {
      return;
    }

    container.innerHTML = fallbackCover(game);
  };

  image.src = game.cover;
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

        <h3>
          ${escapeHTML(game.title)}
        </h3>

        <p>
          ${escapeHTML(game.description)}
        </p>

        <div class="game-meta">

          <span>
            ${game.year}
          </span>

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
   PESQUISA
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

    const searchable = normalize(`
      ${game.title}
      ${game.platform}
      ${game.genre}
      ${game.year}
      ${game.description}
      ${game.searchTerms}
    `);

    const words = search.split(" ");

    return words.every(word =>
      searchable.includes(word)
    );
  });
}

/* =========================================================
   CARREGAR CAPAS DOS CARDS
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

/* =========================================================
   RENDERIZAR CATÁLOGO
   ========================================================= */

function renderCatalog() {
  if (!gamesGrid) {
    return;
  }

  const filtered =
    getFilteredGames();

  gamesGrid.innerHTML =
    filtered.length
      ? filtered.map(createCard).join("")
      : "";

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
          filtered.length === 1
            ? ""
            : "s"
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
  if (!featuredGames) {
    return;
  }

  const featured =
    games.slice(0, 6);

  featuredGames.innerHTML =
    featured
      .map(createCard)
      .join("");

  loadCovers(featured);
}

/* =========================================================
   FILTROS
   ========================================================= */

function updateFilterButtons() {
  document
    .querySelectorAll("[data-filter]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter ===
          currentFilter
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
   EVENTO DA PESQUISA
   ========================================================= */

function updateSearch() {

  currentSearch =
    searchInput
      ? searchInput.value
      : "";

  renderCatalog();
}

if (searchInput) {

  searchInput.addEventListener(
    "input",
    updateSearch
  );

  searchInput.addEventListener(
    "search",
    updateSearch
  );
}

/* =========================================================
   LIMPAR PESQUISA
   ========================================================= */

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
          platform === "PSP" ||
          platform === "PS2"
        ) {

          setFilter(platform);

          document
            .getElementById("catalogo")
            ?.scrollIntoView({
              behavior: "smooth"
            });

          closeMenu();
        }
      }
    );
  });

/* =========================================================
   VER TODOS
   ========================================================= */

document
  .querySelectorAll(
    'a[href="#catalogo"]'
  )
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
   MODAL
   ========================================================= */

function forceModalVisible() {

  if (!gameModal) {
    return;
  }

  gameModal.classList.add("open");

  gameModal.style.display = "flex";
  gameModal.style.visibility = "visible";
  gameModal.style.opacity = "1";
  gameModal.style.pointerEvents = "auto";

  gameModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );
}

function openGame(gameId) {

  const game =
    games.find(
      item =>
        item.id === Number(gameId)
    );

  if (
    !game ||
    !gameModal ||
    !modalContent
  ) {
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
            <span>
              ${escapeHTML(game.platform)}
            </span>
          </div>

          <div>
            <strong>Ano</strong>
            <span>
              ${game.year}
            </span>
          </div>

          <div>
            <strong>Gênero</strong>
            <span>
              ${escapeHTML(game.genre)}
            </span>
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
            data-modal-close
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  modalContent.style.display = "block";
  modalContent.style.visibility = "visible";
  modalContent.style.opacity = "1";

  forceModalVisible();

  const dialog =
    gameModal.querySelector(
      ".modal-dialog"
    );

  if (dialog) {

    dialog.style.position = "relative";
    dialog.style.zIndex = "2";
    dialog.style.visibility = "visible";
    dialog.style.opacity = "1";
  }

  const cover =
    modalContent.querySelector(
      `[data-modal-cover="${game.id}"]`
    );

  loadCover(game, cover);
}

function closeModal() {

  if (!gameModal) {
    return;
  }

  gameModal.classList.remove("open");

  gameModal.style.display = "none";
  gameModal.style.visibility = "hidden";
  gameModal.style.opacity = "0";
  gameModal.style.pointerEvents = "none";

  gameModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}

/* =========================================================
   CLIQUES
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const target =
      event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const details =
      target.closest(
        "[data-details]"
      );

    if (details) {

      openGame(
        details.dataset.details
      );

      return;
    }

    const closeButton =
      target.closest(
        "[data-modal-close]"
      );

    if (closeButton) {
      closeModal();
    }
  }
);

/* =========================================================
   BOTÃO X
   ========================================================= */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );
}

/* =========================================================
   CLIQUE NO FUNDO
   ========================================================= */

if (gameModal) {

  gameModal.addEventListener(
    "click",
    event => {

      if (
        event.target instanceof Element &&
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
   ESC
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

  if (!mobileMenu) {
    return;
  }

  mobileMenu.classList.add("open");

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );
  }
}

function closeMenu() {

  if (!mobileMenu) {
    return;
  }

  mobileMenu.classList.remove(
    "open"
  );

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
        mobileMenu &&
        mobileMenu.classList.contains(
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
  .querySelectorAll(
    "#mobileMenu a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );
  });

/* =========================================================
   NAVEGAÇÃO INTERNA
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
          document.querySelector(
            href
          );

        if (!target) {
          return;
        }

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

/* =========================================================
   ABRIR GUIA
   ========================================================= */

function openGuide(type) {

  const guide = guides[type];

  if (
    !guide ||
    !gameModal ||
    !modalContent
  ) {
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
            ${escapeHTML(
              guide.platform
            )}
          </strong>

          <span>
            Guia GameHub
          </span>

        </div>

      </div>

      <div class="modal-game-info">

        <span class="platform-badge">
          ${escapeHTML(
            guide.platform
          )}
        </span>

        <h2>
          ${escapeHTML(
            guide.title
          )}
        </h2>

        <div class="modal-description">
          ${guide.text}
        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="details-button"
            data-modal-close
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  `;

  modalContent.style.display = "block";
  modalContent.style.visibility = "visible";
  modalContent.style.opacity = "1";

  forceModalVisible();

  const dialog =
    gameModal.querySelector(
      ".modal-dialog"
    );

  if (dialog) {

    dialog.style.position = "relative";
    dialog.style.zIndex = "2";
    dialog.style.visibility = "visible";
    dialog.style.opacity = "1";
  }
}

/* =========================================================
   BOTÕES DOS GUIAS
   ========================================================= */

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

  if (gameModal) {

    gameModal.classList.remove(
      "open"
    );

    gameModal.style.display = "none";
    gameModal.style.visibility = "hidden";
    gameModal.style.opacity = "0";
    gameModal.style.pointerEvents = "none";

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

  renderFeatured();
  renderCatalog();

  console.log(
    `GameHub carregado: ${games.length} jogos.`
  );
}

/* =========================================================
   INICIAR
   ========================================================= */

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
