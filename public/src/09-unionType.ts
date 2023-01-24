(() => {

  //union type son un mixed de todos las variables, pero mas acotado que any
  let myDinamicVar: string | number ;

  myDinamicVar = 1212;
  myDinamicVar = 'sandra '

  function greeting(myText: string | number) {
    //JS se puede usar el TYPEOF
    if (typeof myText === 'string') {
      console.log(`STRING ${myText.toLowerCase()}`);
    }else {
      console.log(`numbers ${myText.toFixed(1)}`);
    }
  }
  greeting('hola');
  greeting(123.2525);
})();
