const response = await fetch("http://localhost:5000/api/user/sendingmessage?id=1234567890");
const data = await response.json();  

console.log(data)
const element = document.getElementById("gettingmessage");

if (element) {
    element.innerHTML += `
        <div class="message-box bg-secondary text-white">
            ${data.message.message}
        </div>
    `;
} else {
    console.error('Element with ID "gettingmessage" not found');
}
