const { param } = require("../../routes/userRoute");

function getQueryparam(param){
    const urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param);
}




document.getElementById("submit").addEventListener("click", () => {
    
    fetch("http://localhost:5000/api/user/sendmessage",  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            sender: localStorage.getItem("myusername"),
            message: document.getElementById("send").value,
            receiver: getQueryparam('forg')
        })
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

try{
    const urlParams = new URLSearchParams(window.location.search);
    const receiverUsername = urlParams.get("receiver");

    const response = await fetch(`http://localhost:5000/api/user/sendmessage?receiver=${localStorage.getItem("myusername")}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data)

    const element = document.getElementById("gettingmessage");
        if (element) {
            data.messages.array.forEach(message => {
                if(message.sender == receiverUsername){
                    element.innerHTML += `
                        <div class="message-box bg-secondary text-white">
                        ${data.messages.message}
                        </div>
                    `;
                }
            });
        } else {
            console.error('Element with ID "gettingmessage" not found');
        }
    }
    catch (error) {
        console.error('Fetch error:', error);  // Log the error if something goes wrong
    }

