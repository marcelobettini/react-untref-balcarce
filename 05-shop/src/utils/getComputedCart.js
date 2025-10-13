export function getComputedCart(cart) {
    const computedCart = [];
    cart.forEach(product => {
        const existingProduct = computedCart.find(computedProduct => computedProduct.id === product.id);
        if (!existingProduct) {
            computedCart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                totalPrice: product.price
            });
        } else {
            existingProduct.quantity += 1;
            existingProduct.totalPrice += product.price;
        }
    });
    return computedCart;
}