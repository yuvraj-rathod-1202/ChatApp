
function getQueryparam(param){
    const urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param)
}

function renderPage(buttonEl) {
    window.location.href=`http://127.0.0.1:5500/views/chatPage.html?forg=${buttonEl.textContent}&user=${getQueryparam("user")}`
}

document.getElementById("myusername").innerHTML = `
    <button type="button" class="chat-item friend" id =${getQueryparam("user")}>${getQueryparam("user")}</button>
`;



// diaplay friends

function displayFriend() {
    const friends = JSON.parse(localStorage.getItem(`friends${getQueryparam("user")}`)) || [];

    const friendsContainer = document.getElementById("friendsList");
    friendsContainer.innerHTML = "";
    
    // Clear previous content
    

    // Build HTML content
    
    
    friends.forEach(friend => {
        
        const button = document.createElement("button");
        button.type = "button";
        button.className = "chat-item friend";
        button.id = friend;
        button.textContent = friend;

        // Attach event listener
        button.addEventListener("click", () => renderPage(button));

        friendsContainer.appendChild(button);

    });

    // Insert HTML content
   
}




document.getElementById("searchicon").addEventListener("click", async ()=>{
    
    const searchFriend = document.getElementById("searchinput").value;
    try{
        const response = await fetch(`http://localhost:5000/api/user/findfriend?friend=${searchFriend}`);
        
        if (response.status === 404){
            
            alert("user not found", response);
            
        }else{
            
            let friends = JSON.parse(localStorage.getItem(`friends${getQueryparam("user")}`)) || [];
            
            if(!friends.includes(searchFriend)){
                friends.push(searchFriend);
                localStorage.setItem(`friends${getQueryparam("user")}`, JSON.stringify(friends));
                displayFriend()
                
            }
            document.getElementById("searchinput").value = "";
        }
    }catch(error){
        
        alert(error);
    }
})

displayFriend()






// clear friend list

document.getElementById("clearFriendList").addEventListener("click", ()=>{
    localStorage.removeItem(`friends${getQueryparam("user")}`);
    const friendsContainer = document.getElementById("friendsList");
    friendsContainer.innerHTML = "";
})