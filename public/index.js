const toggler = document.getElementById("toggler");
const menu = document.getElementById("menu");

toggler.addEventListener('click',() => {
        menu.classList.toggle('hidden');
})