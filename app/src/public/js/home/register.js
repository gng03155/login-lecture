"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#register");


const register = (e) => {
    if (!id.value) {
        return alert("아이디를 입력해주세요!");
    }
    if (psword != confirmPsword) {
        return alert("비밀번호가 일치하지 않습니다.");
    }

    e.preventDefault();

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch(err => {
            console.error(err);
        })

};


registerBtn.addEventListener("click", (e) => register(e));