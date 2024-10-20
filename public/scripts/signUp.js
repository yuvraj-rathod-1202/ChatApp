console.log("sending");

document.getElementById("signUpDone").addEventListener("click", (event) => {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;

    if (!name || !username || !password || !gender || !age || !country) {
        alert("Please fill in all the fields before signing up.");
        return;
    }

    console.log("fetching...");

    fetch("http://localhost:5000/api/user/storeuserdata", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: `${username}-${Date.now()}`,
            name: name,
            username: username,
            password: password,
            gender: gender,
            age: age,
            country: country
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        window.location.href = "http://127.0.0.1:5500/ChatApp/views/index.html";
    })
    .catch(error => {
        console.error("Error during sign-up process:", error);
    });
});
