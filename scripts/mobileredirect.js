function redirectIfMobile() {
    if (window.innerWidth < window.innerHeight) {
        if (window.location.pathname === "/index.html") {
            window.location.href = "http://192.168.1.117:5500/mobile/index.html";
        }
    }
}

window.addEventListener("load", redirectIfMobile);
window.addEventListener("resize", redirectIfMobile);