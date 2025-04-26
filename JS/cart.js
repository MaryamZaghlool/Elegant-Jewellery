import { deleteProductFromCookie, getCookie, setCookie } from './module.js';

let productsCount = document.getElementsByClassName("products-count")[0]
let products = JSON.parse(getCookie("productSelected"))
let cartEmpty=document.getElementsByClassName("cart-empty")[0]

productsCount.innerText = getCookie("productsCount")

let cartPage = document.querySelector(".cart-page .container")
let totalPrice = 0;
let allCartProducts = JSON.parse(getCookie("productSelected") || "[]");
let modalBtn = document.getElementsByClassName("modal-btn")[0]

console.log(cartEmpty)

if (allCartProducts.length>0) {
    cartEmpty.style.display="none"
    allCartProducts.forEach(product => {
        let parent = document.createElement("div")
        parent.setAttribute("class", "parent")

        let cartImg = document.createElement("img")
        cartImg.setAttribute("src", product.img)

        let productName = document.createElement("p")
        productName.innerText = product.name

        let productPrice = document.createElement("p")
        productPrice.innerText = product.price

        let productQuantity = document.createElement("input")
        productQuantity.setAttribute("type", "number")
        productQuantity.setAttribute("min", 1)
        productQuantity.value = product.quantity

        totalPrice += (parseInt(product.price.split("$")[1]) * product.quantity)

        let close = document.createElement("i")
        close.setAttribute("class", "fa-solid fa-xmark")
        parent.append(cartImg, productName, productPrice, productQuantity, close)
        cartPage.append(parent)

        let deletes = document.getElementsByClassName("fa-xmark");

        for (let i = 0; i < deletes.length; i++) {
            deletes[i].onclick = function () {
                allCartProducts.splice(i, 1);
                deleteProductFromCookie(i)
                let count = parseInt(productsCount.innerText)
                count--
                setCookie("productsCount", count)
                productsCount.innerText = getCookie("productsCount")
                window.location.reload()
            }
        }
        let quantities = document.querySelectorAll(".cart-page input");
        quantities.forEach((input, i) => {
            input.onchange = function () {
                let quantityValue = input.value;
                let existingProduct = products.find(p => p.name === product.name);
                if (existingProduct) {
                    products[i].quantity = quantityValue;
                    setCookie("productSelected", JSON.stringify(products));
                    totalPrice += (parseInt(product.price.split("$")[1]) * product.quantity)
                    window.location.reload()
                }
            }
        });
    });
    calculateTotal()
}else{
    cartEmpty.style.display="flex"
}

function calculateTotal() {
    let total = document.createElement("h4")
    let span = document.createElement("span")
    total.innerText = "Total Price: "
    span.innerText = `$${totalPrice}`
    cartPage.append(total)

    let buyButton = document.createElement("button")
    buyButton.setAttribute("data-bs-toggle", "modal")
    buyButton.setAttribute("data-bs-target", "#myModal")
    buyButton.innerText = "Checkout"
    total.append(span, buyButton)
    modalBtn.onclick = function () {
        setCookie("productSelected", JSON.stringify([]))
        setCookie("productsCount", 0)
        setCookie("quantity", 1)
        window.location.href = "./home.html"
    }
}


