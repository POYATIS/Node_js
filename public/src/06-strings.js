(function () {
    var productTitle = 'my amazing product';
    productTitle = ' cambiado';
    console.log(productTitle);
    var productDescription = " tambien se puede usar doble";
    var isNew = false;
    var productPrice = 100;
    //back tick pàra concatenar como si fuera un template
    var summary = "\n    title: ".concat(productTitle, "\n    description: ").concat(productDescription, "\n    precio: ").concat(productPrice, "\n    isNew: ").concat(isNew, "\n  ");
    console.log(summary);
})();
