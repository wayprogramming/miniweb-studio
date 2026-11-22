// MINIWEB STUDIO
// Main JavaScript file

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");

        menuToggle.textContent =
            nav.classList.contains("open") ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}

// DARK MODE

const savedTheme = localStorage.getItem("miniweb-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

// VISITOR PREFERENCE

if (!localStorage.getItem("miniweb-visited")) {
    localStorage.setItem("miniweb-visited", "yes");
}

// PAGE ENTRY ANIMATION

document.body.classList.add("page-enter");

// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    document.body.classList.add("js-ready");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// PAGE TRANSITIONS

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            link.target === "_blank" ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey
        ) {
            return;
        }

        const destination = new URL(href, window.location.href);

        if (destination.origin !== window.location.origin) {
            return;
        }

        if (destination.pathname === window.location.pathname) {
            return;
        }

        event.preventDefault();

        document.body.classList.add("page-leaving");

        setTimeout(() => {
            window.location.href = destination.href;
        }, 250);
    });
});