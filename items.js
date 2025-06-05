// items.js

// Increment and decrement buttons
document.addEventListener('DOMContentLoaded', function () {
    const increaseBtn = document.querySelector('.increase');
    const decreaseBtn = document.querySelector('.decrease');
    const quantityDisplay = document.getElementById('quantity');
    const unitPriceDisplay = document.getElementById('unit-price');
    const totalPriceDisplay = document.getElementById('total-price');

    let quantity = 1;
    const unitPrice = parseFloat(unitPriceDisplay.textContent);

    function updateTotal() {
        quantityDisplay.textContent = quantity;
        totalPriceDisplay.textContent = (unitPrice * quantity).toFixed(2);
    }

    increaseBtn.addEventListener('click', () => {
        quantity++;
        updateTotal();
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateTotal();
        }
    });

    updateTotal(); // initial total
});
