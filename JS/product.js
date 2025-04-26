import { getCookie } from './module.js';

document.addEventListener("DOMContentLoaded", function () {
    let productDetails = document.querySelector(".product-info");
    let product = JSON.parse(localStorage.getItem("product"));
    let count = parseInt(getCookie("productsCount"))
    let products =JSON.parse(getCookie("productSelected"))
    let quantityValue=getCookie("quantity")
    if (product) {
        let productHTML = `
            <div class="d-flex container">
                <img src="${product.img}" alt="${product.name}">
                <div class="card-body p-2 w-50 d-flex flex-column justify-content-center ps-5">
                    <h5 class="card-title card-text">
                        <span class="me-2">Name: </span>
                        <span class="product-details">${product.name}</span>
                    </h5>
                    <p class="card-text my-4">
                        <span class="me-2">Price: </span>
                        <span class="product-details">${product.price}</span>
                    </p>
                    <p class="card-text">
                        <span class="me-2">Quantity: </span>
                        <span class="product-details d-inline-block quantity">
                            <input type="number" min=1 value=${quantityValue}>
                        </span>
                    </p>
                    <p class="card-text my-4">
                        <span class="me-2">Category: </span>
                        <span class="product-details">${product.category}</span>
                    </p>
                    <a href="#" class="add-cart text-center mt-5">Add to cart</a>
                </div>
            </div>
        `;
        productDetails.insertAdjacentHTML('beforeend', productHTML);

        let quantity = document.querySelector(".quantity input")
        let addToCart = document.querySelector(".add-cart")
        quantity.onchange = function () {
            let quantityValue = quantity.value;
            setCookie("quantity", quantityValue)
            let existingProduct = products.find(p => p.name === product.name);
            let index = products.indexOf(existingProduct)
            if (existingProduct) {
                existingProduct.quantity = quantityValue;
                products[index] = existingProduct
                setCookie("productSelected", JSON.stringify(products));
            }
        };
        
        addToCart.addEventListener("click", function () {
            window.location.reload();
            let quantityValue = getCookie("quantity");
            let existingProduct = products.find(p => p.name === product.name);
            if (existingProduct) {
                existingProduct.quantity = quantityValue;
            } else {
                count++
                let cartProduct = {
                    img: product.img,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    quantity: quantityValue,
                };
                products.push(cartProduct);
                console.log(products)
                setCookie("productSelected", JSON.stringify(products))
                setCookie("productsCount", count)
            }
        });
    }
});

function setCookie(cookieName, cookie) {
    document.cookie = `${cookieName}=${cookie};`;
}