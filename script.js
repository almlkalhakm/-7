async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<p><strong>أنت:</strong> ${userInput}</p>`;
    document.getElementById("user-input").value = "";

    const response = await fetch("/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ prompt: userInput})
});

    const data = await response.json();
    chatBox.innerHTML += `<p><strong>الذكاء الاصطناعي:</strong> ${data.reply}</p>`;
}
