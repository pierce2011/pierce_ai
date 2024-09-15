const products = [
    { name: "Smartphone X", price: 599.99, image: "https://via.placeholder.com/300x200.png?text=Smartphone+X" },
    { name: "Laptop Pro", price: 1299.99, image: "https://via.placeholder.com/300x200.png?text=Laptop+Pro" },
    { name: "Wireless Earbuds", price: 129.99, image: "https://via.placeholder.com/300x200.png?text=Wireless+Earbuds" },
    { name: "4K Smart TV", price: 799.99, image: "https://via.placeholder.com/300x200.png?text=4K+Smart+TV" },
    { name: "Gaming Console", price: 499.99, image: "https://via.placeholder.com/300x200.png?text=Gaming+Console" },
    { name: "Fitness Tracker", price: 79.99, image: "https://via.placeholder.com/300x200.png?text=Fitness+Tracker" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productName) {
    alert(`Added ${productName} to cart!`);
    // Implement actual cart functionality here
}

// Display products when the page loads
window.onload = displayProducts;