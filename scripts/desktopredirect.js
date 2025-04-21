function redirectIfDesktop() {
    if (window.innerWidth > 1164 && window.innerWidth > window.innerHeight) {
        let currentPath = window.location.pathname;

        if (currentPath.startsWith("/mobile/")) {
            let newPath = currentPath.replace("/mobile", "");

            if (newPath === "") newPath = "/index.html";

            window.location.href = newPath;
        }
    }
}

window.addEventListener("load", redirectIfDesktop);
window.addEventListener("resize", redirectIfDesktop);
