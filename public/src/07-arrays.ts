(() => {

  let price = [1,2,2,15,8,59,21, 'hola', true]
  price.push(2121);

  //explicitamente le puedes decir que tenga nº y luego añadirlos
  let mixed: (number | string | boolean | Object)[] = ['hola', true]
  mixed.push(12);
  mixed.push({});
  // si añades {} con objetos tb te añade arrays
  mixed.push([]);

  let numbers = [1,2,2,15,8,59,21];

  numbers.map(item => item*2);


})();
