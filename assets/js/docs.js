/*---*/
const buttonMenu = document.getElementById('menu-button');
let menu = document.getElementById('menu');
const itemsMenu = document.querySelectorAll('nav a');

buttonMenu.onclick = function(){
    // let attr = Array.from(menu.classList());
    // console.log(menu.classList.contains("menu-show"));
    if (menu.classList.contains("menu-show")){
        menu.classList.remove("menu-show");
    } else {
        menu.classList.add("menu-show");
    }
}

itemsMenu.forEach((itemsMenu, index) => {
    itemsMenu.addEventListener('click', () => {
        // console.log(index);
        menu.classList.remove("menu-show");
    })
});