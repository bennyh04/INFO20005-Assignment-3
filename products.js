// products.js

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';
        }
    });
});