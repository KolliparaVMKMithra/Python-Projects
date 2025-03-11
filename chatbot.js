const API_KEY = "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"; // Add your API key here

// Open Chatbot Pop-up
function openChatbot() {
    document.getElementById("chatbot-popup").classList.remove("hidden");
}

// Close Chatbot Pop-up
function closeChatbot() {
    document.getElementById("chatbot-popup").classList.add("hidden");
}

// Send Message to API
async function sendMessage() {
    const userInput = document.getElementById("chat-input").value;
    if (!userInput.trim()) return;

    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += `<div><b>You:</b> ${userInput}</div>`;

    document.getElementById("chat-input").value = "";  // Clear input field

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: userInput }]
            })
        });

        const result = await response.json();
        const botReply = result.choices[0].message.content;

        chatDisplay.innerHTML += `<div><b>Mano Mitra:</b> ${botReply}</div>`;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;  // Auto-scroll to latest message

    } catch (error) {
        chatDisplay.innerHTML += `<div style="color: red;"><b>Error:</b> Failed to connect with the chatbot.</div>`;
    }
}
