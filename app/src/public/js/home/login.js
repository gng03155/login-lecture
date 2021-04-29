"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#login");


const login = () => {
    const req = {
        id: id.value,
        psword: pw.value,
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then(res => {
            console.log(res.clone().json());
            return res.json()
        })
        .then(res => console.log(res))
        .catch(err => {
            console.error(err);
        })

};


loginBtn.addEventListener("click", login);