
let cartCount = 0;


const addToCartButtons = document.querySelectorAll('.add-to-cart');


addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    });
});


document.getElementById('profile-btn').addEventListener('click', () => {
    alert("Profile button clicked!");
});

document.getElementById('wishlist-btn').addEventListener('click', () => {
    alert("Wishlist button clicked!");
});

document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('p').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
        let product = event.target.parentElement;
        let productName = product.querySelector("p:first-of-type").innerText;
        let productPrice = parseFloat(product.querySelector("p:nth-of-type(2)").innerText.replace("$", ""));
        let productImg = product.querySelector("img").src;

        let item = { name: productName, price: productPrice, img: productImg, quantity: 1 };

        let existingItem = cart.find(p => p.name === productName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    });
});

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

updateCartCount();

displayCart();



