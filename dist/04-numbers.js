"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('Precio del product', productPrice);
    let costumeAge = 28;
    // costumeAge = costumeAge + '1'; // asi lo concatena 281
    costumeAge = costumeAge + 1;
    console.log('Productos en stock', costumeAge);
    let productStock; // con tipado pero sin valor
    console.log(productStock);
    if (productStock > 10) {
        console.log('es mayor a 10');
    }
    //lo convierten en INT si no lo lee dice NaN
    let discount = parseInt('asasa');
    console.log('discount ', discount);
    if (discount <= 200) {
        console.log('aplica');
    }
    else {
        console.log('No aplica');
    }
    let hex = 0x0f124;
    console.log('hex ', hex);
    let binariy = 0b00110101;
    console.log('binario ', binariy);
    let octal = 0o0771234;
    console.log('octales ', octal);
})();
