const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("#navbar ul li a");
const bookBtn = document.querySelector(".btn-primary");


window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        links.forEach(function (l) {
            l.classList.remove("active");
        });
        link.classList.add("active");

        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });

});

if (bookBtn) {
    bookBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const contact = document.getElementById("contact");
        if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
        }
    });
}