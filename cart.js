document.addEventListener('DOMContentLoaded', function() {
    function displayCart() {
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        cartItems.innerHTML = '';
        
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>Price: Rs. ${item.price}</p>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(itemElement);

            total += item.price;
        });

        totalPriceElement.innerText = total;

        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-from-cart');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                removeFromCart(button.getAttribute('data-index'));
            });
        });
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    function checkout() {
        alert('Thank you for your purchase!');
        localStorage.removeItem('cart');
        displayCart();
    }

    displayCart();
    window.checkout = checkout;  // Make checkout function accessible in the global scope
});
