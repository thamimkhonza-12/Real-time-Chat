const roomName = "general";
const socket = new WebSocket(
  "wss://your-backend-url.onrender.com/ws/chat/general/"
);

const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
const socket = new WebSocket(`${ws_scheme}://...`);

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");


socket.onopen = () => {
    console.log("CONNECTED ✔");
};

socket.onmessage = (e) => {
    const data = JSON.parse(e.data);

    console.log("RECEIVED:", data); // IMPORTANT DEBUG

    const msg = document.createElement("div");

    msg.className = `
        p-3 rounded-xl max-w-xs
        ${data.history
            ? "bg-gray-700 opacity-60"
            : "bg-green-600 ml-auto"}
    `;

    msg.innerText = data.message;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
};



function sendMessage() {
    const message = input.value.trim();

    if (!message) return;

    console.log("SENDING:", message);

    socket.send(JSON.stringify({ message }));

    input.value = "";
}

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// expose for button click
window.sendMessage = sendMessage;