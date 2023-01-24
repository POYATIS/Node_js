"use strict";
(() => {
    let isEnable = true;
    //tipado de forma explicita
    let isNew = false;
    // saca un numero entre 0 y 1
    const random = Math.random();
    console.log(random);
    isNew = random >= 0.5 ? true : false;
    console.log(isNew);
})();
