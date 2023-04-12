const cards= [
    {
        id: 1,
        title: `food world`
        rate:`46`
    },{
        id: 2,
        title: `pizza hub`
        rate:`25`
    }
]
const productsGrid = document.querySelector(`.prodocs-grid`);
for(const prodoct of products){
    renderProduct();
}
function renderProduct(prodocts) {
    const productCart = document.createElement(`div`);
    productsGrid.append(productCart);
productCart.outerHTML = `
<div class="productCart"`
}
