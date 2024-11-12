
// document.getElementById("friendName").innerText = forg;

// async function fetchMessages() {
//     try {


//         const response = await fetch(`http://localhost:5000/api/myusername/sendingmessage?sender=${myusername}&forg=${myusername}`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         } else {
//             const data = await response.json();
//             console.log(data);

//             const element = document.getElementById("messages");
//             if (element && data.messages) {
//                 data.messages.forEach((msg) => {
//                     // Check if the message is between the myusername and forg
//                     if (msg.sender === forg && msg.forg === myusername) {
//                         element.innerHTML += `
//                             <div class="col-12 text-start">
//                             <div class="message-box bg-secondary text-white col-12 text-start">
//                                 ${msg.message}
//                             </div>
//                             </div>
//                         `;
//                     }
//                     else if ((msg.sender === myusername && msg.forg === forg)) {
//                         element.innerHTML += `
//                             <div class="col-12 text-end">
//                             <div class="message-box bg-primary text-white col-12 text-end">
//                                 ${msg.message}
//                             </div>
//                             </div>
//                         `;
//                     }
//                 });
//             } else {
//                 console.log('Element with ID "messages" not found or data.messages is missing');
//             }
//         }
//     } catch (error) {
//         console.log('Fetch error:', error);
//     }
// }




// document.getElementById("clearChat").addEventListener("click", async () => {
//     if (confirm("Are you sure you want to delete the chat?")) {
//         try {
//             const response = await fetch(`http://localhost:5000/api/myusername/deleteallchat?sender=${myusername}&forg=${myusername}`);
//             console.log(response);
//             if (!response.ok) {
//                 alert("error in deletion", response);
//             }else{
//                 console.log("message deleted sucessfully", response);
//             }

//         } catch (error) {
//             alert("error", error);
//         }
//     }
// })


// // Call the function to fetch messages
// fetchMessages();