const form = document.querySelector("#message-form");
const messageList = document.querySelector("#message-list");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const message = form.message.value;

  // Send message to the server
  fetch("post_message.php", {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    // Clear the form and update the message list
    form.message.value = "";
    fetchMessages();
  })
  .catch(error => console.error(error));
});

// Function to fetch messages from the server
function fetchMessages() {
  fetch("get_messages.php")
  .then(response => response.json())
  .then(data => {
    // Clear the message list and populate it with messages
    messageList.innerHTML = "";
    data.forEach(message => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `
        <strong>${message.username}:</strong> ${message.message}
      `;
      messageList.appendChild(messageElement);
    });
  })
  .catch(error => console.error(error));
}

// Fetch messages on page load
fetchMessages();