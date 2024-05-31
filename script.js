function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        newMessage.classList.add("message");
        chatBox.appendChild(newMessage);
        
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}