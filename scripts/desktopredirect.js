function redirectIfDesktop() {
    if (window.innerWidth > window.innerHeight) {
        if (window.location.pathname === "/mobile/index.html") {
            window.location.href = "http://192.168.1.117:5500/index.html";
        }
    }
}

window.addEventListener("load", redirectIfDesktop);
window.addEventListener("resize", redirectIfDesktop);
