(() => {

  // let myNumber: number;
  let myString: string;

  // asi queda tipo any
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  function hola(nombre: string | null) {
    let hi:string = "Hola ";
    //option change, verificar si algo es null o undefined
    // hi += name?.toLowerCase() || 'nobody'
    hi += nombre ?? "nadie"
    console.log(hi)
  }
  hola("san")
  hola(null)




})();
