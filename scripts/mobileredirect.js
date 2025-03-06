function redirectIfMobile() {
    if (window.innerWidth < window.innerHeight) {
        let currentPath = window.location.pathname;

        // Ellenőrizzük, hogy már nem vagyunk-e a mobil verzión
        if (!currentPath.startsWith("/mobile/")) {
            let newPath = "/mobile" + currentPath;

            // Dupla perjelek elkerülése
            newPath = newPath.replace("//", "/");

            window.location.href = newPath;
        }
    }
}

window.addEventListener("load", redirectIfMobile);
window.addEventListener("resize", redirectIfMobile);
