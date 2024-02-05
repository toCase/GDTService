const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
  scrollerAnimation();
}

function scrollerAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const sInner = scroller.querySelector(".scroller__inner");
    const sContent = Array.from(sInner.children);

    sContent.forEach(item => {
        const newItem = item.cloneNode(true);
        newItem.setAttribute("aria-hidden", true);
        sInner.appendChild(newItem);
    })
  });
}
