
function getQueryparam(param){
    const urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param)
}



// diaplay friends

function displayFriend() {
    const friends = JSON.parse(localStorage.getItem("friends")) || [];
    const friendsContainer = document.getElementById("friendsList");
    
    // Clear previous content
    friendsContainer.innerHTML = "";

    // Build HTML content
    
    let friendsHTML = "";
    friends.forEach(friend => {
        
        friendsHTML += `
            <button type="button" class="chat-item friend" id="${friend}" onclick="renderPage(this)">
                ${friend}
            </button>
        `;
    });

    // Insert HTML content
    friendsContainer.innerHTML = friendsHTML;
}


function renderPage(buttonEl) {
    window.location.href=`http://127.0.0.1:5500/views/chatPage.html?forg=${buttonEl.textContent}&user=${getQueryparam("user")}`
}


document.getElementById("searchicon").addEventListener("click", async ()=>{
    
    const searchFriend = document.getElementById("searchinput").value;
    try{
        const response = await fetch(`http://localhost:5000/api/user/findfriend?friend=${searchFriend}`);
        
        if (!response){
            
            alert(response);
            
        }else{
            
            let friends = JSON.parse(localStorage.getItem("friends")) || [];
            
            if(!friends.includes(searchFriend)){
                friends.push(searchFriend);
                localStorage.setItem("friends", JSON.stringify(friends));
                displayFriend()
                
            }
            document.getElementById("searchinput").value = "";
        }
    }catch(error){
        
        alert(error);
    }
})

displayFriend()


// you
document.getElementById("yuvraj").addEventListener("click", function (){
    renderPage(this)
})



// clear friend list

document.getElementById("clearFriendList").addEventListener("click", ()=>{
    localStorage.removeItem("friends");
    displayFriend()
})