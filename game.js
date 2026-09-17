/* =========================================================
   GAMEHUB PSP & PS2
   game.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     CONFIGURAÇÃO
     ========================================================= */

  const COVER_PATH = "./images/covers/";

  /* =========================================================
     CATÁLOGO DE JOGOS
     ========================================================= */

  const games = [
    {
      id: 1,
      title: "God of War: Ghost of Sparta",
      platform: "PSP",
      genre: "Ação",
      year: 2010,
      cover: "god-of-war-ghost-of-sparta.jpg",
      description:
        "Kratos retorna em uma aventura épica para PSP, explorando acontecimentos entre os jogos da série principal.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 2,
      title: "God of War: Chains of Olympus",
      platform: "PSP",
      genre: "Ação",
      year: 2008,
      cover: "god-of-war-chains-of-olympus.jpg",
      description:
        "Uma aventura de Kratos ambientada antes dos acontecimentos do primeiro God of War.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 3,
      title: "Grand Theft Auto: Vice City Stories",
      platform: "PSP",
      genre: "Ação",
      year: 2006,
      cover: "gta-vice-city-stories.jpg",
      description:
        "Explore Vice City em uma história própria protagonizada por Victor Vance.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 4,
      title: "Grand Theft Auto: Liberty City Stories",
      platform: "PSP",
      genre: "Ação",
      year: 2005,
      cover: "gta-liberty-city-stories.jpg",
      description:
        "Uma nova história ambientada em Liberty City, com Toni Cipriani como protagonista.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 5,
      title: "Dragon Ball Z: Shin Budokai",
      platform: "PSP",
      genre: "Luta",
      year: 2006,
      cover: "dragon-ball-z-shin-budokai.jpg",
      description:
        "Combates rápidos de Dragon Ball Z adaptados para o PSP.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 6,
      title: "Dragon Ball Z: Shin Budokai 2",
      platform: "PSP",
      genre: "Luta",
      year: 2007,
      cover: "dragon-ball-z-shin-budokai-2.jpg",
      description:
        "Continuação da série Shin Budokai, com novos personagens e batalhas.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 7,
      title: "Tekken 6",
      platform: "PSP",
      genre: "Luta",
      year: 2009,
      cover: "tekken-6.jpg",
      description:
        "A versão portátil de Tekken 6 traz diversos lutadores e modos de combate.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 8,
      title: "Tekken: Dark Resurrection",
      platform: "PSP",
      genre: "Luta",
      year: 2006,
      cover: "tekken-dark-resurrection.jpg",
      description:
        "Versão portátil da famosa franquia de luta Tekken.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 9,
      title: "Naruto: Ultimate Ninja Heroes",
      platform: "PSP",
      genre: "Luta",
      year: 2006,
      cover: "naruto-ultimate-ninja-heroes.jpg",
      description:
        "Batalhas de Naruto em equipes e confrontos rápidos no PSP.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 10,
      title: "Naruto Shippuden: Ultimate Ninja Impact",
      platform: "PSP",
      genre: "Ação",
      year: 2011,
      cover: "naruto-ultimate-ninja-impact.jpg",
      description:
        "Ação intensa baseada no universo de Naruto Shippuden.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 11,
      title: "Need for Speed: Most Wanted 5-1-0",
      platform: "PSP",
      genre: "Corrida",
      year: 2005,
      cover: "need-for-speed-most-wanted.jpg",
      description:
        "Corridas de rua e perseguições policiais em uma experiência portátil.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 12,
      title: "Midnight Club 3: DUB Edition",
      platform: "PSP",
      genre: "Corrida",
      year: 2005,
      cover: "midnight-club-3.jpg",
      description:
        "Corridas urbanas com carros modificados e muita velocidade.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 13,
      title: "God of War II",
      platform: "PS2",
      genre: "Ação",
      year: 2007,
      cover: "god-of-war-2.jpg",
      description:
        "Kratos enfrenta novos desafios em sua busca por vingança contra os deuses.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 14,
      title: "God of War",
      platform: "PS2",
      genre: "Ação",
      year: 2005,
      cover: "god-of-war.jpg",
      description:
        "A primeira grande aventura de Kratos contra os deuses da mitologia grega.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 15,
      title: "Grand Theft Auto: San Andreas",
      platform: "PS2",
      genre: "Ação",
      year: 2004,
      cover: "gta-san-andreas.jpg",
      description:
        "CJ retorna a Los Santos em uma das aventuras mais conhecidas do PS2.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 16,
      title: "Grand Theft Auto: Vice City",
      platform: "PS2",
      genre: "Ação",
      year: 2002,
      cover: "gta-vice-city.jpg",
      description:
        "Uma aventura criminal ambientada na vibrante Vice City dos anos 1980.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 17,
      title: "Dragon Ball Z: Budokai 3",
      platform: "PS2",
      genre: "Luta",
      year: 2004,
      cover: "dragon-ball-z-budokai-3.jpg",
      description:
        "Um dos principais jogos de luta de Dragon Ball disponíveis para PS2.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 18,
      title: "Dragon Ball Z: Budokai Tenkaichi 3",
      platform: "PS2",
      genre: "Luta",
      year: 2007,
      cover: "dragon-ball-z-budokai-tenkaichi-3.jpg",
      description:
        "Grande elenco de personagens e batalhas em arenas tridimensionais.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 19,
      title: "Shadow of the Colossus",
      platform: "PS2",
      genre: "Aventura",
      year: 2005,
      cover: "shadow-of-the-colossus.jpg",
      description:
        "Uma jornada misteriosa na qual o protagonista precisa enfrentar enormes colossos.",
      downloadUrl: "#",
      premiumUrl: "#"
    },

    {
      id: 20,
      title: "Resident Evil 4",
      platform: "PS2",
      genre: "Ação",
      year: 2005,
      cover: "resident-evil-4.jpg",
      description:
        "Leon Kennedy parte em uma missão perigosa para resgatar a filha do presidente.",
      downloadUrl: "#",
      premiumUrl: "#"
    }
  ];

  /* =========================================================
     ELEMENTOS
     ========================================================= */

  const gameGrid =
    document.querySelector("#gameGrid") ||
    document.querySelector(".game-grid");

  const searchInput =
    document.querySelector("#searchInput") ||
    document.querySelector("#search");

  const modal = document.querySelector("#gameModal");
  const modalContent = document.querySelector("#modalContent");
  const modalClose = document.querySelector("#modalClose");
  const modalOverlay = document.querySelector(".modal-overlay");

  const menuToggle =
    document.querySelector("#menuToggle") ||
    document.querySelector(".menu-toggle");

  const navMenu =
    document.querySelector("#navMenu") ||
    document.querySelector(".nav-menu") ||
    document.querySelector("nav ul");

  /* =========================================================
     ESTADO
     ========================================================= */

  let currentPlatform = "TODOS";
  let currentGenre = "TODOS";
  let currentSearch = "";

  /* =========================================================
     UTILITÁRIOS
     ========================================================= */

  function normalizeText(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function escapeHTML(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCoverUrl(game) {
    if (!game.cover) {
      return "";
    }

    return COVER_PATH + game.cover;
  }

  /* =========================================================
     PLACEHOLDER DE CAPA
     ========================================================= */

  function createCoverPlaceholder(game) {
    const title = escapeHTML(game.title);

    return `
      <div class="cover-placeholder">
        <div class="cover-placeholder-platform">
          ${escapeHTML(game.platform)}
        </div>

        <div class="cover-placeholder-title">
          ${title}
        </div>

        <div class="cover-placeholder-year">
          ${escapeHTML(game.year)}
        </div>
      </div>
    `;
  }

  /* =========================================================
     CARD DO JOGO
     ========================================================= */

  function createGameCard(game) {
    const card = document.createElement("article");

    card.className = "game-card";
    card.dataset.id = game.id;
    card.dataset.platform = game.platform;
    card.dataset.genre = game.genre;

    const coverUrl = getCoverUrl(game);

    card.innerHTML = `
      <div class="game-cover">

        <img
          src="${coverUrl}"
          alt="Capa de ${escapeHTML(game.title)}"
          loading="lazy"
        >

        <div class="game-platform">
          ${escapeHTML(game.platform)}
        </div>

      </div>

      <div class="game-info">

        <h3>${escapeHTML(game.title)}</h3>

        <div class="game-meta">
          <span>${escapeHTML(game.genre)}</span>
          <span>${escapeHTML(game.year)}</span>
        </div>

        <button
          class="details-btn"
          type="button"
          data-game-id="${game.id}"
        >
          Ver detalhes
        </button>

      </div>
    `;

    const image = card.querySelector("img");

    if (image) {
      image.addEventListener("error", () => {
        const cover = card.querySelector(".game-cover");

        if (!cover) {
          return;
        }

        image.remove();

        cover.insertAdjacentHTML(
          "afterbegin",
          createCoverPlaceholder(game)
        );
      });
    }

    const detailsButton = card.querySelector(".details-btn");

    if (detailsButton) {
      detailsButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        openGameModal(game.id);
      });
    }

    return card;
  }

  /* =========================================================
     RENDERIZAÇÃO
     ========================================================= */

  function renderGames(list = games) {
    if (!gameGrid) {
      console.warn("GameHub: #gameGrid não foi encontrado.");
      return;
    }

    gameGrid.innerHTML = "";

    if (!list.length) {
      gameGrid.innerHTML = `
        <div class="no-results">
          <h3>Nenhum jogo encontrado</h3>
          <p>
            Tente pesquisar outro nome ou alterar os filtros.
          </p>
        </div>
      `;

      updateResultsCount(0);
      return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach((game) => {
      fragment.appendChild(createGameCard(game));
    });

    gameGrid.appendChild(fragment);

    updateResultsCount(list.length);
  }

  /* =========================================================
     CONTADOR DE RESULTADOS
     ========================================================= */

  function updateResultsCount(count) {
    const possibleCounters = [
      "#resultsCount",
      "#gameCount",
      ".results-count",
      ".game-count"
    ];

    let counter = null;

    for (const selector of possibleCounters) {
      const element = document.querySelector(selector);

      if (element) {
        counter = element;
        break;
      }
    }

    if (!counter) {
      return;
    }

    counter.textContent = `${count} jogos`;
  }

  /* =========================================================
     FILTROS
     ========================================================= */

  function applyFilters() {
    const search = normalizeText(currentSearch);

    const filtered = games.filter((game) => {
      const title = normalizeText(game.title);
      const genre = normalizeText(game.genre);
      const platform = normalizeText(game.platform);
      const description = normalizeText(game.description);

      const matchesSearch =
        !search ||
        title.includes(search) ||
        genre.includes(search) ||
        platform.includes(search) ||
        description.includes(search);

      const matchesPlatform =
        currentPlatform === "TODOS" ||
        normalizeText(game.platform) === normalizeText(currentPlatform);

      const matchesGenre =
        currentGenre === "TODOS" ||
        normalizeText(game.genre) === normalizeText(currentGenre);

      return matchesSearch && matchesPlatform && matchesGenre;
    });

    renderGames(filtered);
  }

  /* =========================================================
     PESQUISA
     ========================================================= */

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value;
      applyFilters();
    });
  }

  /* =========================================================
     BOTÕES DE PLATAFORMA / FILTROS
     ========================================================= */

  function setupFilterButtons() {
    const filterButtons = document.querySelectorAll(
      "[data-platform], [data-filter], [data-genre]"
    );

    filterButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        const platform = button.dataset.platform;
        const filter = button.dataset.filter;
        const genre = button.dataset.genre;

        if (platform) {
          currentPlatform = platform.toUpperCase();
        }

        if (genre) {
          currentGenre = genre.toUpperCase();
        }

        if (filter) {
          const normalizedFilter = normalizeText(filter);

          if (
            normalizedFilter === "todos" ||
            normalizedFilter === "all"
          ) {
            currentPlatform = "TODOS";
            currentGenre = "TODOS";
          } else if (
            normalizedFilter === "psp" ||
            normalizedFilter === "ps2"
          ) {
            currentPlatform = filter.toUpperCase();
          } else {
            currentGenre = filter.toUpperCase();
          }
        }

        filterButtons.forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        applyFilters();
      });
    });
  }

  /* =========================================================
     LINKS DE PLATAFORMA
     ========================================================= */

  function setupPlatformLinks() {
    const links = document.querySelectorAll(
      'a[href="#psp"], a[href="#ps2"], a[href="#todos"], a[href="#all"]'
    );

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const target = normalizeText(
          link.getAttribute("href").replace("#", "")
        );

        if (target === "psp") {
          currentPlatform = "PSP";
          currentGenre = "TODOS";
        } else if (target === "ps2") {
          currentPlatform = "PS2";
          currentGenre = "TODOS";
        } else {
          currentPlatform = "TODOS";
          currentGenre = "TODOS";
        }

        applyFilters();
      });
    });
  }

  /* =========================================================
     MODAL
     ========================================================= */

  function openGameModal(gameId) {
    if (!modal || !modalContent) {
      console.warn("GameHub: modal não encontrado.");
      return;
    }

    const game = games.find(
      (item) => Number(item.id) === Number(gameId)
    );

    if (!game) {
      return;
    }

    const coverUrl = getCoverUrl(game);

    modalContent.innerHTML = `
      <div class="modal-game">

        <div class="modal-game-cover">

          <img
            src="${coverUrl}"
            alt="Capa de ${escapeHTML(game.title)}"
          >

        </div>

        <div class="modal-game-info">

          <span class="modal-platform">
            ${escapeHTML(game.platform)}
          </span>

          <h2>${escapeHTML(game.title)}</h2>

          <div class="modal-meta">
            <span><strong>Gênero:</strong> ${escapeHTML(game.genre)}</span>
            <span><strong>Ano:</strong> ${escapeHTML(game.year)}</span>
          </div>

          <p>
            ${escapeHTML(game.description)}
          </p>

          <div class="modal-actions">

            <a
              href="${game.downloadUrl}"
              class="modal-button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>

            <a
              href="${game.premiumUrl}"
              class="modal-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Premium
            </a>

            <button
              type="button"
              class="modal-button close-modal-button"
              id="closeModalInside"
            >
              Fechar
            </button>

          </div>

        </div>

      </div>
    `;

    const modalImage = modalContent.querySelector(
      ".modal-game-cover img"
    );

    if (modalImage) {
      modalImage.addEventListener("error", () => {
        const parent = modalImage.parentElement;

        if (!parent) {
          return;
        }

        modalImage.remove();

        parent.insertAdjacentHTML(
          "afterbegin",
          createCoverPlaceholder(game)
        );
      });
    }

    const insideClose = modalContent.querySelector(
      "#closeModalInside"
    );

    if (insideClose) {
      insideClose.addEventListener("click", closeGameModal);
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    document.body.style.overflow = "hidden";
  }

  function closeGameModal() {
    if (!modal) {
      return;
    }

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    document.body.style.overflow = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeGameModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeGameModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGameModal();
    }
  });

  /* =========================================================
     MENU MOBILE
     ========================================================= */

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (event) => {
      event.preventDefault();

      navMenu.classList.toggle("open");
      menuToggle.classList.toggle("open");

      const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!expanded)
      );
    });
  }

  /* Fecha o menu ao clicar em um link */
  if (navMenu) {
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");

        if (menuToggle) {
          menuToggle.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* =========================================================
     BOTÃO "TODOS"
     ========================================================= */

  const allButtons = document.querySelectorAll(
    '[data-filter="todos"], [data-filter="all"], [data-platform="todos"], [data-platform="all"]'
  );

  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      currentPlatform = "TODOS";
      currentGenre = "TODOS";
      currentSearch = "";

      if (searchInput) {
        searchInput.value = "";
      }

      applyFilters();
    });
  });

  /* =========================================================
     INICIALIZAÇÃO
     ========================================================= */

  setupFilterButtons();
  setupPlatformLinks();

  renderGames(games);

  console.log(
    `GameHub carregado: ${games.length} jogos disponíveis.`
  );
});
