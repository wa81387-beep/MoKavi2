let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

if (cart.length === 0) {
  cartItems.innerHTML = "<p>Your cart is empty</p>";
} else {
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>Size: ${item.size}</p>
        <p>Quantity: ${item.qty}</p>
        <p>Price: ${item.price * item.qty} LE</p>
      </div>
    `;
  });
}
