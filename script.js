/*==================== TOGGLE ICON NAVBAR ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})
/*==================== ABOUT READ MORE ====================*/
let aboutToggle = document.querySelector("#about-toggle");
let aboutMore = document.querySelector("#about-more");

if (aboutToggle && aboutMore) {
    aboutToggle.addEventListener("click", () => {
        aboutMore.classList.toggle("active");
        let isOpen = aboutMore.classList.contains("active");
        aboutToggle.textContent = isOpen ? "Show Less" : "Read More";
        aboutToggle.setAttribute("aria-expanded", isOpen);
    });
}
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

if(top >= offset && top < offset + height){
navLinks.forEach(links =>{
    links.classList.remove("active");
    let activeLink = document.querySelector("header nav a[href*=" + id + "]");
    if (activeLink) {
        activeLink.classList.add("active");
    }
})
        };
    })
    /*==================== STICKY NAVBAR ====================*/
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

/*==================== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) ====================*/

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}
/*==================== SCROLL REVEAL ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .about-img, .service-detail, .portfolio-box, .contact-container', { origin: "bottom" });
