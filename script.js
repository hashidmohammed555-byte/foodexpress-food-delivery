// Buttons
const orderBtn = document.querySelector(".btn");
const menuBtn = document.querySelector(".hero-btn");

// Order Now Button
orderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("🍔 Thank you for choosing FoodExpress! Your order page will open soon.");
});

// Explore Menu Button
menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("🍕 Welcome! Explore our delicious menu.");
});