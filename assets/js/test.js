let tabs = document.querySelectorAll('main .tabs .item');
let cards = document.querySelectorAll('main .cards .item');
let activeItem = 0;

tabs.forEach((tabs, index) => {
    tabs.addEventListener('click', () => {
        activeItem = index;
        console.log(index);
        showTab();
    })
})

function showTab(){
    let oldCardItem = document.querySelector('main .cards .item.active');
    oldCardItem.classList.remove('active');

    let oldTabItem = document.querySelector('main .tabs .item.active');
    oldTabItem.classList.remove('active');

    tabs[activeItem].classList.add('active');
    cards[activeItem].classList.add('active');
}