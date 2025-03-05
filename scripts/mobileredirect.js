function redirectIfMobile() {
    if (window.innerWidth < window.innerHeight) {
        let currentPath = window.location.pathname;

        // Csak akkor irányítson át, ha nem a mobil oldalon vagyunk
        if (!currentPath.startsWith("/mobile/")) {
            window.location.href = "http://192.168.1.117:/mobile" + currentPath;
        }
    }
}

window.addEventListener("load", redirectIfMobile);
window.addEventListener("resize", redirectIfMobile);