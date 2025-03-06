function redirectIfMobile() {
    if (window.innerWidth < window.innerHeight) {
        let currentUrl = window.location.href;

        // Csak akkor irányítson át, ha még nem a mobil verzión vagyunk
        if (!currentUrl.includes("/mobile")) {
            window.location.href = currentUrl + "/mobile";
        }
    }
}

window.addEventListener("load", redirectIfMobile);
window.addEventListener("resize", redirectIfMobile);
