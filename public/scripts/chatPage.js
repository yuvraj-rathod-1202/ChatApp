// Function to get query parameters
function getQueryparam(param) {
    const urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param);
}

console.log("Receiver (forg) Query Param:", getQueryparam('forg'));

// Send message on button click
// document.getElementById("submit").addEventListener("click", () => {
//     fetch("http://localhost:5000/api/user/sendmessage", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             sender: "yuvraj",
//             message: document.getElementById("send").value,
//             receiver: getQueryparam('forg')  // Make sure 'forg' is the correct param
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// });

// // Fetching messages
// async function fetchMessages() {
//     try {
//         const urlParams = new URLSearchParams(window.location.search);
//         const receiverUsername = urlParams.get("forg");  // Ensure using the correct query param

//         const response = await fetch(`http://localhost:5000/api/user/sendingmessage?receiver=${localStorage.getItem("myusername")}`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }else{

//             const data = await response.json();
//             console.log(data);

//             const element = document.getElementById("gettingmessage");
//             if (element) {
//                 // Assuming 'data.messages' is an array of messages
//                 if (data.messages.sender === receiverUsername) {
//                     element.innerHTML += `
//                         <div class="message-box bg-secondary text-white">
//                             ${data.messages.message}  <!-- Displaying each message -->
//                         </div>
//                     `;

//                     const responsem = await fetch(`http://localhost:5000/api/user/deletemessage?id=${data.messages._id}`)
//                     if (!responsem.ok) {
//                         alert(`HTTP error! Status: ${response.status}`);
//                     }
//                 }
//             } else {
//             console.error('Element with ID "gettingmessage" not found');
//             }
//         }
//     } catch (error) {
//         console.error('Fetch error:', error);  // Log the error if something goes wrong
//     }
// }

// // Call the function to fetch messages
// fetchMessages();

