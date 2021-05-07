"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#login");


const login = (e) => {

    if (!id.value) {
        return alert("아이디를 입력해주세요!");
    }
    if (!psword.value) {
        return alert("비밀번호를 입력해주세요.");
    }

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
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch(err => {
            console.error(err);
        })

};


loginBtn.addEventListener("click", (e) => login(e));