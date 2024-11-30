document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('customization-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = document.getElementById('quantity').value;
        const size = document.getElementById('size').value;
        const customization = document.getElementById('customization').value;

        const cartItem = {
            name: "Chocolate Cake",
            quantity: quantity,
            size: size,
            customization: customization,
            price: 500 * quantity // Assuming price is Rs. 500 per quantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Thanks for your valuable feedback. Your cake has been added to the cart.');

        form.reset();
    });
});
