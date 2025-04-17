const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function sendMessage(){
    const message = userInput.value;
    if(message==""){
        alert("Error! Enter input message");
        userInput.focus();
    }

    displayLog('user',message);
    
    getChatbotResponse(message);
    

}

function displayLog(sender,message){
    const div = document.createElement('div');
    div.classList.add('message', sender);
    const p = document.createElement('p');
    p.innerText = message;
    div.appendChild(p);
    chatLog.append(div);

    userInput.value = '';
    userInput.focus();
}


function getChatbotResponse(userMessage) {
    fetch('/getChatbotResponse',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userMessage}),
    })
    .then(response=> response.json())
    .then(data =>{
        displayLog('chatbot', data.getChatbotResponse)
    })
    .catch(error => console.log('Error:', error));
}

