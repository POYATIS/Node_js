(function () {
    var isEnable = true;
    //tipado de forma explicita
    var isNew = false;
    // saca un numero entre 0 y 1
    var random = Math.random();
    console.log(random);
    isNew = random >= 0.5 ? true : false;
    console.log(isNew);
})();
