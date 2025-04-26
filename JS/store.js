import { setCookie } from './module.js';

let filterButtons = document.querySelectorAll(".filter-buttons .btn")
let productCards = document.querySelectorAll('.card');
let filterName = document.getElementsByClassName("filter-name")[0]
let filter2 = document.querySelectorAll(".select2 select")
let filter1 = document.querySelectorAll(".select1 select")
let filterValue, filterPrice, filterColor;



filterButtons.forEach((btn) => {
    btn.onclick = function () {
        filterName.innerText = btn.innerText
        filterButtons.forEach((button) => {
            button.classList.remove("btn-active");
        });
        btn.classList.add("btn-active")
        filterValue = btn.getAttribute('data-filter');
        console.log("filterButton", filterValue)
        filter();
    }
});


filter2.forEach((select) => {
    select.addEventListener('change', function () {
        filterColor = select.value;
        console.log("filterColor", filterValue)
        filter();
    });
});


filter1.forEach(select => {
    select.addEventListener("change", function () {
        filterPrice = select.value;
        console.log(filterPrice)
        filter();
    })
});

function filter() {
    productCards.forEach(card => {
        let categories = card.getAttribute('data-category').split(/[ ,]+/);
        let price = parseInt(card.getAttribute('price'));
        let show = true;
        if (filterValue && filterValue !== 'all' && !categories.includes(filterValue)) {
            show = false;
        }
        if (filterColor && !categories.includes(filterColor)) {
            show = false;
        }

        if (filterPrice) {
            if (filterPrice === "$50-$100" && (price < 50 || price > 100)) {
                show = false;
            }
            else if (filterPrice === "$100-$200" && (price <= 100 || price > 200)) {
                show = false;
            }
            else if (filterPrice === "$201-$300" && (price <= 200 || price > 300)) {
                show = false;
            }
            else if (filterPrice === "$301-$400" && (price <= 300 || price > 400)) {
                show = false;
            }
            else if (filterPrice === "$401-$500" && (price <= 400 || price > 500)) {
                show = false;
            }
            else if (filterPrice === "more than $500" && price <= 500) {
                show = false;
            }
        }

        card.style.display = show ? "block" : "none";
    })
}

productCards.forEach((card) => {
    card.onclick = function () {
        let img = card.querySelector("img").getAttribute("src")
        let name = card.querySelector(".card-title").innerText
        let price = card.querySelector(".store .card-text").innerText
        let [category, color] = card.getAttribute("data-category").split(",")
        let productData = {
            img: img,
            name: name,
            price: price,
            category: category,
            quantity:1
        };
        localStorage.setItem("product", JSON.stringify(productData));
        setCookie("quantity","1")
        location.href = "product.html";
    }
})