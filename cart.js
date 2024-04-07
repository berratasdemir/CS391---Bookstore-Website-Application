class ShoppingCart {
    constructor() {
        this.cartItems = [];
    }

    addToCart(productName, author, imageUrl) {
        const newItem = {
            productName: productName,
            author: author,
            imageUrl: imageUrl,
            quantity: 1 
        };

        this.cartItems.push(newItem);
        this.updateCart();
    }

    updateCart() {
        const cartContainer = document.querySelector('.cart-items');
        cartContainer.innerHTML = '';

        let total = 0;
        this.cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="book-info">
                    <img src="${item.imageUrl}" alt="Book Image" class="book-image">
                    <div class="book-details">
                        <p class="book-title">${item.productName}</p>
                        <p class="author">${item.author}</p>
                    </div>
                </div>
                <div class="quantity">
                    <input type="number" min="1" value="${item.quantity}" onchange="shoppingCart.updateQuantity(${this.cartItems.indexOf(item)}, this.value)">
                </div>
                <div class="subtotal">
                    $${item.quantity * 19.99} 
                </div>
            `;
            cartContainer.appendChild(itemElement);
            total += item.quantity * 19.99;
        });

        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    updateQuantity(index, newQuantity) {
        this.cartItems[index].quantity = parseInt(newQuantity);
        this.updateCart();
    }
}

const shoppingCart = new ShoppingCart();

function addToCart(productName, author, imageUrl) {
    shoppingCart.addToCart(productName, author, imageUrl);
}
