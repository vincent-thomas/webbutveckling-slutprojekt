const button = document.getElementById("modal-btn")
const modal = document.getElementById("modal")
const modalOverlay = document.querySelector(".modal-overlay")

button.addEventListener("click", () => {
  modal.classList.toggle("not-show")
})

modalOverlay.addEventListener("click", () => {
  modal.classList.toggle("not-show")
})