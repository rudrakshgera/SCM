function addToCart(id, title, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = '/cart.html';
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        const title = this.getAttribute('data-title');
        const price = this.getAttribute('data-price');
        addToCart(id, title, price);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('inputbar');
    const searchIcon = document.querySelector('.search-icon'); // Select the search icon button
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Function to filter books based on search input
    function filterBooks(query) {
        // Convert the query to lowercase to ensure case-insensitive comparison
        query = query.trim().toLowerCase();

        // Iterate through each carousel item
        carouselItems.forEach(item => {
            const cards = item.querySelectorAll('.card');
            let found = false; // Track if any card matches the search

            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const price = card.querySelector('.card-text').textContent.toLowerCase(); // You can also search by price

                // Check if title or price matches the search query
                if (title.includes(query) || price.includes(query)) {
                    card.style.display = ''; // Show the matching card
                    found = true;
                } else {
                    card.style.display = 'none'; // Hide the non-matching card
                }
            });

            // Show or hide the entire carousel item based on matching cards
            if (found) {
                item.style.display = ''; // Show carousel item
            } else {
                item.style.display = 'none'; // Hide carousel item
            }
        });
    }

    // Event listener for search input (typing)
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim(); // Get and trim the input query
        filterBooks(query); // Filter books based on the query
    });

    // Event listener for search icon click
    searchIcon.addEventListener('click', function () {
        const query = searchInput.value.trim(); // Get the search query from the input field
        filterBooks(query); // Filter books based on the query when search icon is clicked
    });
});

