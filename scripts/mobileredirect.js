function redirectIfMobile() {
    if (window.innerWidth < 1164 || window.innerHeight > window.innerWidth) {
        let currentPath = window.location.pathname;

        if (!currentPath.startsWith("/mobile/")) {
            let newPath = "/mobile" + currentPath;

            // Dupla perjelek eltávolítása
            newPath = newPath.replace("//", "/");

            window.location.href = newPath;
        }
    }
}

window.addEventListener("load", redirectIfMobile);
window.addEventListener("resize", redirectIfMobile);
