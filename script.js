
// ================= HERO TYPING ANIMATION =================

const typingElement = document.getElementById("typing-text");

const roles = [
    "Aspiring Software Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1800);
            return;
        }

    } else {
        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, deleting ? 45 : 90);
}

if (typingElement) {
    typeRole();
}

// ================= SKILLS CATEGORY FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const skillItems = document.querySelectorAll(".skill-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Show matching skills
        skillItems.forEach(item => {

            if (item.dataset.category === selectedCategory) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });

});

// Show programming skills by default
skillItems.forEach(item => {
    if (item.dataset.category !== "programming") {
        item.classList.add("hidden");
    }
});
// PROJECT CAROUSEL NAVIGATION

const projectsTrack = document.getElementById("projectsTrack");

document.getElementById("projectNext").addEventListener("click", () => {
    projectsTrack.scrollBy({
        left: projectsTrack.clientWidth * 0.8,
        behavior: "smooth"
    });
});

document.getElementById("projectPrev").addEventListener("click", () => {
    projectsTrack.scrollBy({
        left: -projectsTrack.clientWidth * 0.8,
        behavior: "smooth"
    });
});

// ================= CERTIFICATES CAROUSEL =================

const certificatesTrack = document.getElementById("certificatesTrack");

const certificateNext = document.getElementById("certificateNext");
const certificatePrev = document.getElementById("certificatePrev");

if (certificatesTrack && certificateNext && certificatePrev) {

    certificateNext.addEventListener("click", () => {
        certificatesTrack.scrollBy({
            left: certificatesTrack.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    certificatePrev.addEventListener("click", () => {
        certificatesTrack.scrollBy({
            left: -certificatesTrack.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

}

