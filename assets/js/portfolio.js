let items = document.querySelectorAll('.slider .item');
let thumb = document.querySelectorAll('.thumbnail .item');
let but_next = document.getElementById('next');
let but_prev = document.getElementById('prev');

let countItems = thumb.length;
let itemActive = 0;

but_next.onclick = function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItems){
        itemActive = 0;
    }
    showSlider();
}

but_prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0){
        itemActive = countItems - 1;
    }
    showSlider();
}

thumb.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

function showSlider(){
    let oldItem = document.querySelector('.slider .list .item.active');
    oldItem.classList.remove('active');

    let oldThumb = document.querySelector('.thumbnail .item.active');
    oldThumb.classList.remove('active');

    items[itemActive].classList.add('active');
    thumb[itemActive].classList.add('active');
}