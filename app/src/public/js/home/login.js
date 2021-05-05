"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#login");


const login = (e) => {

    e.preventDefault();

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
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch(err => {
            console.error(err);
        })

};


loginBtn.addEventListener("click", (e) => login(e));