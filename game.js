// ============================================================
// GAMEHUB PSP & PS2
// Catálogo principal
// ============================================================

"use strict";

// ------------------------------------------------------------
// CONFIGURAÇÃO
// ------------------------------------------------------------

const COVER_PATH = "./images/covers/";

// ------------------------------------------------------------
// CATÁLOGO
// ------------------------------------------------------------

const games = [
  {
    id: 1,
    title: "God of War: Ghost of Sparta",
    platform: "PSP",
    genre: "Ação",
    year: 2010,
    cover: "god-of-war-ghost-of-sparta.jpg",
    description:
      "Aventura de ação protagonizada por Kratos em uma jornada pela mitologia grega.",
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
      "Uma aventura de ação de Kratos ambientada antes dos acontecimentos do primeiro God of War.",
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
      "Explore Vice City em uma história própria desenvolvida para o universo portátil de GTA.",
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
      "Uma aventura de mundo aberto ambientada em Liberty City.",
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
      "Jogo de luta de Dragon Ball Z desenvolvido para PSP.",
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
      "Continuação de Shin Budokai com novos personagens e batalhas.",
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
      "Versão portátil de Tekken 6 com diversos lutadores e modos de jogo.",
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
      "Edição portátil da série Tekken com personagens e modos de batalha.",
    downloadUrl: "#",
    premiumUrl: "#"
  },
  {
    id: 9,
    title: "Naruto: Ultimate Ninja Heroes",
    platform: "PSP",
    genre: "Luta",
    year: 2007,
    cover: "naruto-ultimate-ninja-heroes.jpg",
    description:
      "Batalhas entre personagens do universo de Naruto em formato portátil.",
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
      "Combates em grande escala inspirados no universo de Naruto Shippuden.",
    downloadUrl: "#",
    premiumUrl: "#"
  },
  {
    id: 11,
    title: "Need for Speed: Most Wanted",
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
      "Jogo de corrida urbana com carros personalizáveis e corridas em diferentes cidades.",
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
      "Kratos enfrenta novos desafios em uma aventura de ação baseada na mitologia grega.",
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
      "A aventura que apresentou Kratos em sua jornada contra os deuses do Olimpo.",
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
      "Uma grande aventura de mundo aberto ambientada no estado fictício de San Andreas.",
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
      "Uma aventura de mundo aberto inspirada na atmosfera de Miami dos anos 1980.",
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
      "Um dos jogos de luta da série Budokai para PlayStation 2.",
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
      "Combates em arenas com uma grande seleção de personagens de Dragon Ball.",
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
      "Uma aventura de exploração e batalhas contra enormes criaturas.",
    downloadUrl: "#",
    premiumUrl: "#"
  },
  {
    id: 20,
    title: "Resident Evil 4",
    platform: "PS2",
    genre: "Terror",
    year: 2005,
    cover: "resident-evil-4.jpg",
    description:
      "Uma aventura de ação e sobrevivência protagonizada por Leon S. Kennedy.",
    downloadUrl: "#",
    premiumUrl: "#"
  }
];

// ------------------------------------------------------------
// ELEMENTOS
// ------------------------------------------------------------

const gameGrid = document.getElementById("gameGrid");
const gameCount = document.getElementById("gameCount");
const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(
  "[data-filter], .filter-btn, .platform-filter"
);

const menuButton =
  document.getElementById("menuToggle") ||
  document.querySelector(".menu-toggle") ||
  document.querySelector(".hamburger");

const mobileMenu =
  document.getElementById("mobileMenu") ||
  document.querySelector(".mobile-menu") ||
  document.querySelector(".nav-menu");

// Modal
const modal = document.getElementById("gameModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

let currentFilter = "todos";

// ------------------------------------------------------------
// UTILIDADES
// ------------------------------------------------------------

function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCover(game) {
  return `${COVER_PATH}${game.cover}`;
}

function escapeHTML(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ------------------------------------------------------------
// PLACEHOLDER DE CAPA
// ------------------------------------------------------------

function createCoverFallback(game) {
  return `
    <div class="game-cover-placeholder">
      <span>🎮</span>
      <strong>${escapeHTML(game.title)}</strong>
      <small>${escapeHTML(game.platform)}</small>
    </div>
  `;
}

// ------------------------------------------------------------
// FILTRO + PESQUISA
// ------------------------------------------------------------

function getFilteredGames() {
  const searchTerm = normalizeText(searchInput ? searchInput.value : "");

  return games.filter((game) => {
    const matchesFilter =
      currentFilter === "todos" ||
      normalizeText(game.platform) === normalizeText(currentFilter);

    const searchableText = normalizeText(
      `${game.title} ${game.platform} ${game.genre} ${game.year}`
    );

    const matchesSearch =
      searchTerm === "" || searchableText.includes(searchTerm);

    return matchesFilter && matchesSearch;
  });
}

// ------------------------------------------------------------
// RENDERIZAÇÃO DO CATÁLOGO
// ------------------------------------------------------------

function renderGames() {
  if (!gameGrid) {
    console.error("GameHub: elemento #gameGrid não encontrado.");
    return;
  }

  const filteredGames = getFilteredGames();

  if (gameCount) {
    gameCount.textContent = `${filteredGames.length} ${
      filteredGames.length === 1 ? "jogo" : "jogos"
    }`;
  }

  if (filteredGames.length === 0) {
    gameGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔎</div>
        <h3>Nenhum jogo encontrado</h3>
        <p>Tente outro nome ou altere o filtro de plataforma.</p>
      </div>
    `;
    return;
  }

  gameGrid.innerHTML = filteredGames
    .map(
      (game) => `
        <article class="game-card" data-game-id="${game.id}">
          <div class="game-card-image">
            <img
              src="${getCover(game)}"
              alt="Capa de ${escapeHTML(game.title)}"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />

            <div class="game-cover-placeholder" style="display:none;">
              <span>🎮</span>
              <strong>${escapeHTML(game.title)}</strong>
              <small>${escapeHTML(game.platform)}</small>
            </div>
          </div>

          <div class="game-card-content">
            <span class="game-platform">${escapeHTML(game.platform)}</span>

            <h3>${escapeHTML(game.title)}</h3>

            <div class="game-meta">
              <span>${escapeHTML(game.genre)}</span>
              <span>${escapeHTML(game.year)}</span>
            </div>

            <button
              type="button"
              class="game-details-btn"
              data-game-id="${game.id}"
            >
              Ver detalhes
            </button>
          </div>
        </article>
      `
    )
    .join("");

  attachGameButtons();
}

// ------------------------------------------------------------
// BOTÕES "VER DETALHES"
// ------------------------------------------------------------

function attachGameButtons() {
  const buttons = document.querySelectorAll(".game-details-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.gameId);
      const game = games.find((item) => item.id === id);

      if (game) {
        openGameModal(game);
      }
    });
  });
}

// ------------------------------------------------------------
// MODAL
// ------------------------------------------------------------

function openGameModal(game) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-game">

      <div class="modal-cover">
        <img
          src="${getCover(game)}"
          alt="Capa de ${escapeHTML(game.title)}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />

        <div class="game-cover-placeholder" style="display:none;">
          <span>🎮</span>
          <strong>${escapeHTML(game.title)}</strong>
          <small>${escapeHTML(game.platform)}</small>
        </div>
      </div>

      <div class="modal-info">

        <span class="game-platform">
          ${escapeHTML(game.platform)}
        </span>

        <h2>${escapeHTML(game.title)}</h2>

        <div class="modal-meta">
          <span><strong>Plataforma:</strong> ${escapeHTML(
            game.platform
          )}</span>

          <span><strong>Gênero:</strong> ${escapeHTML(game.genre)}</span>

          <span><strong>Ano:</strong> ${escapeHTML(game.year)}</span>
        </div>

        <p>${escapeHTML(game.description)}</p>

        <div class="modal-actions">
          <a
            href="${game.downloadUrl}"
            class="btn-primary"
            ${
              game.downloadUrl === "#"
                ? 'onclick="event.preventDefault(); alert(\'Link ainda não configurado.\');"'
                : ""
            }
          >
            🎮 Acessar
          </a>

          <a
            href="${game.premiumUrl}"
            class="btn-secondary"
            ${
              game.premiumUrl === "#"
                ? 'onclick="event.preventDefault(); alert(\'Link ainda não configurado.\');"'
                : ""
            }
          >
            ℹ️ Informações
          </a>
        </div>

      </div>

    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGameModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ------------------------------------------------------------
// EVENTOS DO MODAL
// ------------------------------------------------------------

if (modalClose) {
  modalClose.addEventListener("click", closeGameModal);
}

if (modal) {
  const overlay = modal.querySelector(".modal-overlay");

  if (overlay) {
    overlay.addEventListener("click", closeGameModal);
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeGameModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGameModal();
  }
});

// ------------------------------------------------------------
// PESQUISA
// ------------------------------------------------------------

if (searchInput) {
  searchInput.addEventListener("input", renderGames);
}

// ------------------------------------------------------------
// FILTROS
// ------------------------------------------------------------

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter =
      button.dataset.filter ||
      button.dataset.platform ||
      button.getAttribute("data-value");

    if (!filter) return;

    currentFilter = normalizeText(filter);

    if (
      currentFilter === "todos" ||
      currentFilter === "all" ||
      currentFilter === ""
    ) {
      currentFilter = "todos";
    } else if (currentFilter === "playstation portable") {
      currentFilter = "PSP";
    } else if (currentFilter === "playstation 2") {
      currentFilter = "PS2";
    }

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderGames();
  });
});

// ------------------------------------------------------------
// MENU
// ------------------------------------------------------------

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
}

// ------------------------------------------------------------
// LINKS DE NAVEGAÇÃO POR HASH
// ------------------------------------------------------------

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");

  if (!link) return;

  const targetId = link.getAttribute("href");

  if (!targetId || targetId === "#") return;

  const target = document.querySelector(targetId);

  if (target) {
    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    if (menuButton) {
      menuButton.classList.remove("open");
    }
  }
});

// ------------------------------------------------------------
// INICIALIZAÇÃO
// ------------------------------------------------------------

function initGameHub() {
  console.log("GameHub iniciado.");
  console.log(`Jogos carregados: ${games.length}`);

  renderGames();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGameHub);
} else {
  initGameHub();
}
