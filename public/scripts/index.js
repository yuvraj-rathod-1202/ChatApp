document.getElementById("signUp").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/ChatApp/views/signUp.html";
});
console.log("click on button");
document.getElementById("login").addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    try{
        const response = await fetch(`http://localhost:5000/api/user/getuserdata?username=${username}&password=${password}`);
        if(!response.ok){
            alert(`HTTP error! Status: ${response.status} username or password is incorrect`);
        }else{

        const data = await response.json();

        console.log(data);
        localStorage.setItem("myusername",data.data.username);
        console.log(localStorage.getItem("myusername"));
        window.location.href = "http://127.0.0.1:5500/ChatApp/views/friendsAndGroups.html";
        }
    }
    catch (error) {
        console.error('Fetch error:', error);
    }

})
