// script.js

// Calculates total based on all items in cart
function updateTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;

    cartItems.forEach(item => {
        const unitPrice = parseFloat(item.querySelector(".unit-price").textContent);
        const quantity = parseInt(item.querySelector(".qty").textContent);
        total += unitPrice * quantity;
    });

    document.getElementById("total-price").textContent = total.toFixed(2);
}

document.querySelectorAll(".increment").forEach(button => {
    button.addEventListener("click", () => {
        const qtySpan = button.parentElement.querySelector(".qty");
        let quantity = parseInt(qtySpan.textContent);
        qtySpan.textContent = ++quantity;
        updateTotal();
    });
});

document.querySelectorAll(".decrement").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.closest(".cart-item");
        const qtySpan = item.querySelector(".qty");
        let quantity = parseInt(qtySpan.textContent);
        if (quantity > 1) {
            qtySpan.textContent = --quantity;
        } else {
            item.remove(); // Remove the item from cart if quantity hits 0
        }
        updateTotal();
    });
});

// Initialize total on load
updateTotal();

