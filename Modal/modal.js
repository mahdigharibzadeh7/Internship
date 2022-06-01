const btn = document.querySelector(".btn")
const modal = document.querySelector(".modal-container")
const close = document.querySelector(".close")

btn.addEventListener("click", function(){
    modal.style.display = "block"
    modal.style.visibility = "visible"
    modal.style.opacity = "1"
})

close.addEventListener("click", function(){
    modal.style.display = "none"
})

