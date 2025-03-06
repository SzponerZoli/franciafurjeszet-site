function redirectIfDesktop() {
    if (window.innerWidth > window.innerHeight) {
        let currentPath = window.location.pathname;

        // Ellenőrizzük, hogy a mobil verzión vagyunk-e
        if (currentPath.startsWith("/mobile/")) {
            let newPath = currentPath.replace("/mobile", ""); // Levágja a "/mobile" részt

            // Ha az új útvonal üres, vigyen az alapértelmezett kezdőlapra
            if (newPath === "") newPath = "/index.html";

            window.location.href = newPath;
        }
    }
}

window.addEventListener("load", redirectIfDesktop);
window.addEventListener("resize", redirectIfDesktop);