console.log("start")
let navButton = document.querySelector(".mobileNavButton")
let mobileNav = document.querySelector(".mobileNav")
let closeButton = document.querySelector(".closeButton")

navButton.addEventListener("click", (event) => {
    navButton.classList.toggle("hidden")
    mobileNav.classList.toggle("open")
})

closeButton.addEventListener("click", (event) => {
    navButton.classList.toggle("hidden")
    mobileNav.classList.toggle("open")
})