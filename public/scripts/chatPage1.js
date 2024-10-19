document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("http://localhost:5000/api/user/sendingmessage?id=12345678911");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();  

        console.log(data);  

        const element = document.getElementById("gettingmessage");
        if (element) {
            element.innerHTML += `
                <br>
                <div class="message-box bg-secondary text-white">
                    ${data.message.message}
                </div>
            `;
        } else {
            console.error('Element with ID "gettingmessage" not found');
        }
    } catch (error) {
        console.error('Fetch error:', error);  
    }
});
