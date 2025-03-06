function redirectIfDesktop() {
    if (window.innerWidth > window.innerHeight) {
        let currentUrl = window.location.href;

        // Csak akkor irányítson át, ha a mobil verzión vagyunk
        if (currentUrl.includes("/mobile")) {
            window.location.href = currentUrl.replace("/mobile", "");
        }
    }
}

window.addEventListener("load", redirectIfDesktop);
window.addEventListener("resize", redirectIfDesktop);
