const products = [
    { id: 1, name: "Product-1", price: 100, quantity: 0 },
    { id: 2, name: "Product-2", price: 200, quantity: 0 },
    { id: 3, name: "Product-3", price: 300, quantity: 0 },
];

function updateCart() {
    let cartItemsDiv = document.getElementById("cart-items");
    let totalPriceDiv = document.getElementById("total-price");
    let total = 0;
    let cartContent = "";

    products.forEach(product => {
        if (product.quantity > 0) {
            cartContent += `<div class="cart-item">${product.name} &nbsp; ${product.quantity} × ${product.price}</div>`;
            total += product.quantity * product.price;
        }
    });

    cartItemsDiv.innerHTML = cartContent || "No Product added to the cart";
    totalPriceDiv.innerText = total;
}

function updateProducts() {
    let productList = document.getElementById("product-list");

    productList.innerHTML = "<h3>Products</h3>";
    
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} ${product.price}</span>
            <div class="buttons">
                <button onclick="updateQuantity(${product.id}, -1)">-</button>
                <span>${product.quantity}</span>
                <button onclick="updateQuantity(${product.id}, 1)">+</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function updateQuantity(productId, change) {
    let product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = Math.max(0, product.quantity + change);
        updateProducts();
        updateCart();
    }
}

updateProducts();
