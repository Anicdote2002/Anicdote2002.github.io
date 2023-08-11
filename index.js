const chatContainer = document.getElementById('chat-container');

async function sendMessageToChatGPT(message) {
    // Call the ChatGPT API to send a message and receive a response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
        }),
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}

// Function to display a message in the chat container
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
}

// Example interaction
async function startChat() {
    const initialMessage = "Hello, chatbot!";
    displayMessage('User: ' + initialMessage);
    const botResponse = await sendMessageToChatGPT(initialMessage);
    displayMessage('Chatbot: ' + botResponse);
}

startChat(); // Start the chat when the page loads