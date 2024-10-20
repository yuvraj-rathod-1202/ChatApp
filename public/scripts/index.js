document.getElementById("signUp").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/ChatApp/views/signUp.html";
});

document.getElementById("login").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    fetch(`http://localhost:5000/api/user/getuserdata`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        // Check if the response status is OK before parsing JSON
        if (response.ok) {
            return response.json();  // Parse JSON if successful
        } else {
            return response.json().then(data => {
                // Handle login failure by showing an error message
                alert(data.message || "Invalid username or password.");
                throw new Error("Login failed");
            });
        }
    })
    .then(data => {
        // Only runs if login is successful (response was ok)
        console.log("Login successful:", data);
        localStorage.setItem("myusername", username);  // Store username in localStorage
        window.location.href = "http://127.0.0.1:5500/ChatApp/views/friendsAndGroups.html";  // Navigate to the friends and groups page
    })
    .catch(error => {
        console.error("Error during login process:", error);
        // Don't show another alert here since the error is already handled
    });
});
