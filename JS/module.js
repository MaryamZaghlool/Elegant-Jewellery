export function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        if (key === name) return value;
    }
    return null;
}

export function deleteProductFromCookie(indexToDelete, cookieName = "productSelected") {

    let allProducts = JSON.parse(getCookie(cookieName));

    allProducts.splice(indexToDelete, 1);

    document.cookie = `${cookieName}=${JSON.stringify(allProducts)};`;

    return allProducts;
}

export function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

export function setCookiePresistent(name, value, days = 7) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}



