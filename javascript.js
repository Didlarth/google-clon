
const btn = document.querySelector(".dropdown button.btn");

btn.addEventListener("click", (e) => {
    const parent = e.target.closest('.dropdown')
    parent.classList.toggle('active')
})