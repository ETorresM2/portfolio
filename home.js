console.log("start")
const navButton = document.querySelector(".mobileNavButton")
const mobileNav = document.querySelector(".mobileNav")
const closeButton = document.querySelector(".closeButton")
const bio = document.querySelector(".bio")
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const projectlist = document.querySelector(".projects")
const contact = document.getElementById("contact")
const cta = document.getElementById("cta")


contact.addEventListener("click", e => {
    e.preventDefault()
    cta.scrollIntoView(true)
})

about.addEventListener("click", e => {
    e.preventDefault()
    bio.scrollIntoView(true)
})

projects.addEventListener("click", e => {
    e.preventDefault()
    projectlist.scrollIntoView(true)
})

navButton.addEventListener("click", (event) => {
    navButton.classList.toggle("hidden")
    mobileNav.classList.toggle("open")
})

closeButton.addEventListener("click", (event) => {
    navButton.classList.toggle("hidden")
    mobileNav.classList.toggle("open")
})