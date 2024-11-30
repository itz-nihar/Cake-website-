
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has already visited the site
    if (!localStorage.getItem('firstVisit')) {
        // Show the welcome message
        alert("Welcome to Bake'n! Discover our best-selling cakes and special offers.");
        // Set an item in localStorage to mark the first visit
        localStorage.setItem('firstVisit', 'true');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to add items to the cart
    function addToCart(event) {
        const button = event.target;
        const item = button.closest('.cake-card');
        const name = item.querySelector('h3').innerText;
        const price = item.querySelector('p').innerText.replace('Price: Rs.', '').trim();

        const cartItem = {
            name: name,
            price: parseInt(price)
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to your cart`);
    }

    // Attach event listeners to all add-to-cart buttons only once
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.removeEventListener('click', addToCart);  // Remove existing event listener
        button.addEventListener('click', addToCart);    // Attach new event listener
    });
});



document.addEventListener('DOMContentLoaded', function() {
    function addToCart(event) {
        const button = event.target;
        const item = button.closest('.cake');
        const name = item.querySelector('h3').innerText;
        const price = item.querySelector('button').getAttribute('data-price');

        const cartItem = {
            name: name,
            price: parseInt(price)
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to your cart`);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.removeEventListener('click', addToCart);  // Remove existing event listener if any
        button.addEventListener('click', addToCart);    // Attach new event listener
    });
});


