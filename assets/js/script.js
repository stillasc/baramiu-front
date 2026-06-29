// این قسمت برای کدهای هدر است

function toggleMenu() {
    const desktopMenu = document.querySelector('.desktop-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    desktopMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list a");
  
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (href === "#" && currentPath === "index.html")) {
            link.classList.add("active");
        }
    });
});




const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});


function handleResize() {
    const loginLink = document.querySelector('a.login');
    const windowWidth = window.innerWidth;

    if (windowWidth < 1100) {
        if (loginLink) {
            loginLink.classList.remove('btn');
        }
    } else {
        if (loginLink && !loginLink.classList.contains('btn')) {
            loginLink.classList.add('btn');
        }
    }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);


// پایان قسمت هدر










const cat = document.getElementById("cat");

const images = {
    up: "assets/cat/up.png",
    down: "assets/cat/down.png",
    left: "assets/cat/left.png",
    right: "assets/cat/right.png",

    "up-left": "assets/cat/up-left.png",
    "up-right": "assets/cat/up-right.png",

    "down-left": "assets/cat/down-left.png",
    "down-right": "assets/cat/down-right.png"
};

let currentDirection = "down";

cat.style.backgroundImage =
    `url(${images[currentDirection]})`;

function moveCat(x, y) {

    const rect = cat.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const angle = Math.atan2(dy, dx) * 580 / Math.PI;

    let direction;

    if (angle >= -22.5 && angle < 22.5)
        direction = "right";

    else if (angle >= 22.5 && angle < 67.5)
        direction = "down-right";

    else if (angle >= 67.5 && angle < 112.5)
        direction = "down";

    else if (angle >= 112.5 && angle < 157.5)
        direction = "down-left";

    else if (angle >= 157.5 || angle < -157.5)
        direction = "left";

    else if (angle >= -157.5 && angle < -112.5)
        direction = "up-left";

    else if (angle >= -112.5 && angle < -67.5)
        direction = "up";

    else
        direction = "up-right";

    if (direction !== currentDirection) {

        currentDirection = direction;

        cat.style.backgroundImage =
            `url(${images[direction]})`;
    }

    cat.style.left = x + "px";
    cat.style.top = y + "px";
}

document.addEventListener("mousemove", (e) => {
    moveCat(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {

    const touch = e.touches[0];

    moveCat(
        touch.clientX,
        touch.clientY
    );

}, { passive: true });