// const cart = new Cart($('#cartModal'));
// const productList = new ProductList('products.json', $('.products-list'), cart);

const menu = document.querySelector('.menu li');

menu.forEach( addEventListener('click', menuPressed) );
//menu.forEach( option => option.addEventListener('click', menuPressed)); 

function menuPressed(e){

    if (e.target.innerText == 'Shoes'){
        const productList = new ProductList('shoes.json', $('.product-list'));
    }
    if (e.target.innerText == 'Equipment'){
        const productList = new ProductList('equipment.json', $('.product-list'));
    }
}

