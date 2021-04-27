"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#login");


const login = () => {
    const req = {
        id: id.value,
        pw: pw.value,
    }

    console.log(req);


};


loginBtn.addEventListener("click", login);