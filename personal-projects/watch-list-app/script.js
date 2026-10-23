const releaseDate = new Date("2026-12-18T00:00:00");

function updateCountdown() {
    const now = new Date();

    const difference = releaseDate - now;

    const countdownElement = document.querySelector(".countdown-display");

    if (difference <= 0) {
        countdownElement.innerHTML = "<h2>THE MOVIE IS OUT!</h2>";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

//API connection
const apiKey = "";

const url = `https://api.themoviedb.org/3/search/tv?query=Loki&api_key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const show = data.results[0];

        document.getElementById("show-title").textContent = show.name;
        document.getElementById("show-description").textContent = show.overview;
        document.getElementById("show-poster").src =
        `https://image.tmdb.org/t/p/w780${show.poster_path}`;
    })

const homeLink = document.getElementById("home-link");
const watchlistsLink = document.getElementById("watchlists-link");
const rankingsLink = document.getElementById("rankings-link");

const homePage = document.getElementById("home-page");
const watchlistsPage = document.getElementById("watchlists-page");
const rankingsPage = document.getElementById("rankings-page");
const watchlistDetailPage = document.getElementById("watchlist-detail-page");
const marvelCard = document.getElementById("marvel-card");

function showPage(pageToShow, activeLink) {
    homePage.style.display = "none";
    watchlistsPage.style.display = "none";
    rankingsPage.style.display = "none";
    watchlistDetailPage.style.display = "none";

    pageToShow.style.display = "block";

    homeLink.classList.remove("active");
    watchlistsLink.classList.remove("active");
    rankingsLink.classList.remove("active");

    activeLink.classList.add("active");
}

homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    showPage(homePage, homeLink);
});

watchlistsLink.addEventListener("click", function (event) {
    event.preventDefault();
    showPage(watchlistsPage, watchlistsLink);
});

rankingsLink.addEventListener("click", function (event) {
    event.preventDefault();
    showPage(rankingsPage, rankingsLink);
});

marvelCard.addEventListener("click", function () {
    showPage(watchlistDetailPage, watchlistsLink);
});

document.getElementById("back-to-watchlists").addEventListener("click", function (event) {
    event.preventDefault();
    showPage(watchlistsPage, watchlistsLink);
});

