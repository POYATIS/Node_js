(() => {

  let productTitle = 'my amazing product';
  productTitle = ' cambiado';
  console.log(productTitle);

  const productDescription = " tambien se puede usar doble";


  let isNew: boolean = false;
  let productPrice = 100;

  //back tick pàra concatenar como si fuera un template
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    precio: ${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);
})();
