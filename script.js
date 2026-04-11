function addToCart() {
  let cart = [];

  // لو في منتجات قديمة في الشنطة
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  // المنتج اللي هيتضاف
  let product = {
    name: "Sweet Pants Black",
    price: 450,
    quantity: 1
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("المنتج اتضاف للشنطة 👜");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
let selectedSize = null;

function selectSize(element) {
  if (element.classList.contains("unavailable")) return;

  document.querySelectorAll(".size").forEach(size => {
    size.classList.remove("active");
  });

  element.classList.add("active");
  selectedSize = element.innerText;
  document.getElementById("selectedSize").innerText = selectedSize;
}
