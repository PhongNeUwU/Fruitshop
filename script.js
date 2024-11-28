// script.js
document.getElementById('priceFilter').addEventListener('input', function() {
    document.getElementById('priceValue').innerText = this.value;
});