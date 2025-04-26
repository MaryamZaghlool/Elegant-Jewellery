/************************ navbar **************************/

let contact = document.getElementsByClassName("contact")[0];
contact.onclick = function () {
    contact.classList.add("active");
}


/*****************************arrow up*******************************/

window.addEventListener("scroll", function () {
    if (window.scrollY < 100) {
        contact.classList.remove("active");
    }
});

let arrow = document.getElementsByClassName("fa-arrow-up")[0];
window.addEventListener('scroll', function () {

    if (window.scrollY >= 200) {
        arrow.style.animationName = " arrow-come";
    }
    else {
        arrow.style.animationName = " arrow-go";
    }
});
arrow.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


