(function () {
    //union type son un mixed de todos las variables, pero mas acotado que any
    var myDinamicVar;
    myDinamicVar = 1212;
    myDinamicVar = 'sandra ';
    function greeting(myText) {
        //JS se puede usar el TYPEOF
        if (typeof myText === 'string') {
            console.log("STRING ".concat(myText.toLowerCase()));
        }
        else {
            console.log("numbers ".concat(myText.toFixed(1)));
        }
    }
    greeting('hola');
    greeting(123.2525);
})();
