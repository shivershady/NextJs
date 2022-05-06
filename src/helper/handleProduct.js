export const incrementProductToCart = (product, quantityProd) => {
    let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    let check = false;
    let tmp = carts?.map(c => {
        if (c?.id === product.id) {
            check = true;
            if(c.currentFilter){
                return {...c, quantity: c.quantity + quantityProd, currentFilter: product.currentFilter};
            }
            return {...c, quantity: c.quantity + quantityProd};
        } else {
            return c;
        }
    });
    if (check === false) {
        localStorage.setItem('carts', JSON.stringify([...carts, {...product, quantity: quantityProd}]))
    } else {
        localStorage.setItem('carts', JSON.stringify(tmp))
    }
}

export const decrementProductToCart = (product, quantityProd) => {
    let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    let check = false;
    let tmp = carts?.map(c => {
        if (c?.id === product.id) {
            check = true;
            if(c.quantity > 1){
                return {...c, quantity: c.quantity - quantityProd}
            }else{
                return c;
            }
        } else {
            return c;
        }
    });
    if (check === false) {
        localStorage.setItem('carts', JSON.stringify([...carts, {...product, quantity: quantityProd}]))
    } else {
        localStorage.setItem('carts', JSON.stringify(tmp))
    }
}

export const removeProductToCart = (product,index) => {
    let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    carts.splice(index,1)
    localStorage.setItem('carts', JSON.stringify(carts))
}
