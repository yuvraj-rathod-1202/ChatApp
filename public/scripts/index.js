document.getElementById("signUp").addEventListener("click", () => {
    window.location.href = ""
})

document.getElementById("login").addEventListener("click", () => {
    fetch(`http://localhost:5000/api/user/getuserdata`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

