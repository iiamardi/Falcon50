
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const suggestions = document.querySelectorAll('.suggestion');

 
const responses = {
    "përshëndetje": "Përshëndetje, si mund t'ju ndihmoj?",
    "çka është falcon50.com": "Falcon50 është platformë e shitjes online, e krijuar nga Falcon, Inc. Është dyqan online i specializuar në shitjen e pajisjeve më të fundit të teknologjisë.",
    "pse falcon50": "Falcon50 është dyqani më i madh online i produkteve teknologjike në rajon që ofron mbi 100,000 produkte.",
    "ku gjindet falcon50": "Falcon50.com është dyqan online dhe si i tillë nuk posedon dyqan fizik. Por kemi Showroom-in tonë në Prishtinë.",
    "garancioni i produkteve": "Garancioni mbulon vetëm defektet që janë si rezultat i prodhuesit dhe në përputhje me instruksionet.",
    "kthimi i porosive": "Porosia duhet të kthehet brenda 14 ditësh së bashku me paketimin, kuponin fiskal dhe aksesorët.",
    "kontakti": "Mund të na kontaktoni përmes telefonit: +383 45 101 953 ose email-it: contact@falcon50.com.",
    "orari i punës": "Orari ynë është nga e hëna deri të premten: 08:00-21:00, dhe të shtunën 09:00-18:00."
};

 
function addMessage(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

 
function processMessage() {
    const message = userInput.value.trim().toLowerCase(); 
    if (message === "") return;

    addMessage(userInput.value, 'user');
    userInput.value = "";

     
    let response = "Me vjen keq, nuk e kuptova pytjen tuaj.";  

    for (let question in responses) {
        if (message.includes(question)) {
            response = responses[question];
            break;
        }
    }

    setTimeout(() => addMessage(response, 'bot'), 500);
}

 
sendButton.addEventListener('click', processMessage);


userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') processMessage();
});

 
suggestions.forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        userInput.value = suggestion.textContent;
        processMessage();
    });
});
