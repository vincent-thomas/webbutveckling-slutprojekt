const button = document.getElementById("navbar-btn")
const modal = document.getElementById("navbar-modal")

button.addEventListener("click", () => {
  modal.classList.toggle("show")
})