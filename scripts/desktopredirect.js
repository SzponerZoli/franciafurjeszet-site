function redirectIfDesktop() {
    if (window.innerWidth > window.innerHeight) {
        let currentPath = window.location.pathname;

        // Csak akkor irányítson át, ha a mobil oldalon vagyunk
        if (currentPath.startsWith("/mobile/")) {
            let newPath = currentPath.replace("/mobile", ""); // Levágja a "/mobile" részt
            if (newPath === "") newPath = "/index.html"; // Ha üres, menjen a főoldalra
            window.location.href = "http://192.168.1.117" + newPath;
        }
    }
}

window.addEventListener("load", redirectIfDesktop);
window.addEventListener("resize", redirectIfDesktop);
