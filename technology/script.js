const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = Math.random();

    stars.appendChild(star);
}