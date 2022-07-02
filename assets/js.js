window.addEventListener("scroll", ()=>{
    const menu = document.querySelector(".head");
    menu.classList.toggle("sticky", scrollY > 0)
})
let boolM = false;
const bar = document.querySelector(".bar");
bar.innerHTML = boolM ? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
bar.addEventListener("click", ()=>{
    boolM = !boolM;
    bar.innerHTML = boolM ? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
    document.querySelector(".head_menu").style.left = boolM ? "0" : "-100%";
})
