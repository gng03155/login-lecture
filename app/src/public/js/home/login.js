"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#login");


const login = () => {
    const req = {
        id: id.value,
        pw: pw.value,
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });

};


loginBtn.addEventListener("click", login);