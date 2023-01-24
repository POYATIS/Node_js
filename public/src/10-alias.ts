(() => {
  // solo en ts, para crear nuestro propio tipado EN CAMELCASE
  // SI QUIERES AMplicarlo puede añadirlo en este type
  type UserID = string | number | boolean;

  let userID: UserID;

  function greeting(userID: string | number | boolean) {
    //JS se puede usar el TYPEOF
    if (typeof userID === 'string') {
      console.log(`STRING ${userID.toLowerCase()}`);
    }
  }
  // literal types: DEBE SER EL MISMO VALOR QUE HAYAMOS ASIGNADO
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'S';



})();
