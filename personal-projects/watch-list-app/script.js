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
const apiKey = "Placeholder";

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