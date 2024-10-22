// Task 2 - Add Event Listener for Product Selection 

// Grab necessary elements from the DOM
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Function to calculate total price
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value); // Get product price
    const quantity = parseInt(quantityInput.value); // Get quantity entered
    const totalPrice = productPrice * quantity; // Calculate total price
    
    // Update the total price in the UI
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listeners for product selection and quantity input changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

