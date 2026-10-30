const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = Math.random();

    stars.appendChild(star);
}

const search = document.querySelector(".main-search");

if (search) {
    search.addEventListener("input", () => {
        const text = search.value.toLowerCase().trim();
        const games = document.querySelectorAll(".game-holder .image-button");

        games.forEach(game => {
            const name = game.querySelector("img").alt.toLowerCase();
            game.style.display = name.includes(text) ? "" : "none";
        });
    });
}
