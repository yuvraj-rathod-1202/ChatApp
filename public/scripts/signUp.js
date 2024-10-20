//const express = require('express')
console.log("sending")
document.getElementById("signUpDone").addEventListener("click", () => {
    console.log("fetch succes")
    fetch("http://localhost:5000/api/user/storeuserdata", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: `${document.getElementById('username').value}-${Date.now()}`,
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            gender: document.getElementById('gender').value,
            age: document.getElementById('age').value,
            country: document.getElementById('country').value
        })

    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})