async function fetchMessages() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const user = urlParams.get("user");
        const receiver = urlParams.get("forg");

        const response = await fetch(`http://localhost:5000/api/user/sendingmessage?sender=${user}&receiver=${user}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
            const data = await response.json();
            console.log(data);

            const element = document.getElementById("messages");
            if (element && data.messages) {
                data.messages.forEach((msg) => {
                    // Check if the message is between the user and receiver
                    if (msg.sender === receiver && msg.receiver === user) {
                        element.innerHTML += `
                            <div class="col-12 text-start">
                            <div class="message-box bg-secondary text-white col-12 text-start">
                                ${msg.message}
                            </div>
                            </div>
                        `;
                    }
                    else if((msg.sender === user && msg.receiver === receiver)){
                        element.innerHTML += `
                            <div class="col-12 text-end">
                            <div class="message-box bg-primary text-white col-12 text-end">
                                ${msg.message}
                            </div>
                            </div>
                        `;
                    }
                });
            } else {
                console.log('Element with ID "messages" not found or data.messages is missing');
            }
        }
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

// Call the function to fetch messages
fetchMessages();
