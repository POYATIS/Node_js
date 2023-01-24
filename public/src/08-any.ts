(() => {
  // cualquier cosa puede ir aqui, no se deberia utilizar
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = 123;
  myDynamicVar = {};
  myDynamicVar = '';

  // 1º forma de hacer un cast
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  // 2º forma de hacer un cast, LOS GENERICOS <>
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);


})();
