function displayProducts(element, products) {
    // Clear the inner HTML before appending new products
    element.innerHTML = '';

    if (products.length === 0) {
        element.innerHTML = '<div>No product.</div>';
        return;
    }

    for (const product of products)
        element.innerHTML += displayProductCard(product);
}


function displayProductCard(product) {
    const formattedPrice = formatCurrency(product.price);

    return `
    <div class='col-6 col-lg-4 col-xl-3 mt-3'>
        <div class='card'>
            <img src='${product.image}' class='card-img-top' alt='${product.name} Image' height='200px' style='object-fit: cover;'>
            
            <div class='card-body'>
                <h5 class='card-title'>${product.name}</h5>
                <p class='card-text text-muted'>${formattedPrice}</p>
                <p class='card-text'>${product.description}</p>
                <p class='card-text'>${product.category}</p>
                
                <div class='text-center'>
                    <a class='btn btn-primary' onclick='addCart("${product.id}");'>Add to cart</a>
                </div>
            </div>
        </div>
    </div>`;
}
