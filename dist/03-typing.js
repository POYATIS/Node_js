"use strict";
(() => {
    //funcion anonima autoejecutada, para que JS no choque con otro .ts
    let myProductName = 'Producto 1';
    let myProductPrice = 123;
    myProductName = ' change';
    myProductName.toLowerCase();
    myProductPrice.toFixed();
    // con el const no puedes reasignar el valor, te da el valor
    const myProductStock = 1000;
})();
