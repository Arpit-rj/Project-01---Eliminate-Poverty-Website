// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const sectionId = e.target.getAttribute("href").split("#")[1];
            document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const skills = document.querySelector("#skills").value;
        const experience = document.querySelector("#experience").value;
        console.log({ name, email, skills, experience });
        // Add code to send data to server or perform other actions
        alert("Thank you for submitting the form!");
        form.reset();
    });
});

// Add event listener to success stories section
document.addEventListener("DOMContentLoaded", function () {
    const successStories = document.querySelector("#success-stories");
    successStories.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const storyId = e.target.getAttribute("href").split("#")[1];
            document.querySelector(`#${storyId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to contact us section
document.addEventListener("DOMContentLoaded", function () {
    const contactUs = document.querySelector("#contact-us");
    contactUs.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        console.log({ name, email, message });
        // Add code to send data to server or perform other actions
        alert("Thank you for contacting us!");
        contactUs.reset();
    });
});

// Add event listener to employment opportunities section
document.addEventListener("DOMContentLoaded", function () {
    const employmentOpportunities = document.querySelector("#employment-opportunities");
    employmentOpportunities.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            e.preventDefault();
            const opportunityId = e.target.getAttribute("data-opportunity-id");
            document.querySelector(`#${opportunityId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to resources section
document.addEventListener("DOMContentLoaded", function () {
    const resources = document.querySelector("#resources");
    resources.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const resourceId = e.target.getAttribute("href").split("#")[1];
            document.querySelector(`#${resourceId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to footer section
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    footer.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const footerLinkId = e.target.getAttribute("href").split("#")[1];
            document.querySelector(`#${footerLinkId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to toggle navigation menu on mobile devices
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector("#nav-toggle");
    navToggle.addEventListener("click", function () {
        const nav = document.querySelector("nav");
        nav.classList.toggle("open");
    });
});

// Add event listener to close navigation menu on mobile devices
document.addEventListener("DOMContentLoaded", function () {
    const navClose = document.querySelector("#nav-close");
    navClose.addEventListener("click", function () {
        const nav = document.querySelector("nav");
        nav.classList.remove("open");
    });
});

// Add event listener to scroll to top button
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.querySelector("#scroll-to-top");
    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Add event listener to loading animation
document.addEventListener("DOMContentLoaded", function () {
    const loadingAnimation = document.querySelector("#loading-animation");
    loadingAnimation.addEventListener("animationend", function () {
        loadingAnimation.remove();
    });
});
