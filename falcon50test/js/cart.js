const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartItemsContainer = document.getElementById("cart-items");

if (cartItems.length > 0) {
    cartItems.forEach(item => {
        // Shto artikullin në shportë
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.price}</p> <!-- Shfaq çmimin ashtu siç është -->
                <button class="remove-item" data-id="${item.id}">
                    <i class="fa-solid fa-trash"></i> Hiq
                </button>
                <button class="pay-item" data-id="${item.id}">
                    <i class="fa-solid fa-shopping-cart"></i> Paguaj
                </button>
            </div>
        `;
    });

    // Shto ngjarje për butonat "Hiq"
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'), 10);
            const updatedCartItems = cartItems.filter(item => item.id !== itemId);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            window.location.reload(); // Rifresko faqen
        });
    });

    // Shto ngjarje për butonat "Paguaj"
    const payButtons = document.querySelectorAll('.pay-item');
    payButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'), 10);
            window.location.href = `product.html?id=${itemId}`; // Ndryshoni URL-në sipas nevojës
        });
    });
} else {
    // Nëse shporta është bosh
    cartItemsContainer.innerHTML = `<p>Shporta juaj është bosh!</p>`;
}

// Ngjarja për butonin "Paguaj" për të gjithë shportën
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
        if (cartItems.length > 0) {
            const firstProductId = cartItems[0].id; // Merr ID-në e produktit të parë
            window.location.href = `product.html?id=${firstProductId}`; // Ndryshoni URL-në sipas nevojës
        } else {
            alert("Nuk ka produkte në shportë për të paguar!");
        }
    });
}