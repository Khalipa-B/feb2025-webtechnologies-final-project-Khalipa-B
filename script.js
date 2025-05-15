let cart = [];
const cartSidebar = document.getElementById("cart-sidebar");
const cartCount = document.querySelector(".cart-count");
const cartItemsContainer = document.querySelector(".cart-items");

// Toggle Cart Sidebar
function toggleCart() {
  cartSidebar.classList.toggle("open");
}

// Add Item to Cart
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// Update Cart UI
function updateCart() {
  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart items
  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.name} - R${item.price}</p>
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
}

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear Cart
function clearCart() {
  cart = [];
  updateCart();
}

// Proceed to Checkout
function proceedToCheckout() {
  alert("Proceeding to checkout...");
  // Add your checkout logic here
}

// Example: Add product to cart
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = productCard
      .querySelector(".price")
      .textContent.replace("R", "");
    addToCart({ name: productName, price: productPrice });
  });
});
