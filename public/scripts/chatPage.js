document.getElementById("submit").addEventListener("click", () => {
    
    fetch("http://localhost:5000/api/user/sendmessage",  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            id: 1234567890,
            message: document.getElementById("send").value
        })
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})