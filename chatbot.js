function sendMessage(){

let input =
document.getElementById("userInput");

let chatBox =
document.getElementById("chatBox");

let userText =
input.value.trim();

if(userText === "") return;

let userMessage =
document.createElement("div");

userMessage.className =
"user-message";

userMessage.innerText =
userText;

chatBox.appendChild(userMessage);

let botMessage =
document.createElement("div");

botMessage.className =
"bot-message";

let reply = "";

let question =
userText.toLowerCase();

if(question.includes("readiness")){

reply =
"Your readiness score can improve by learning Docker, AWS and completing deployment projects.";

}

else if(question.includes("skill")){

reply =
"You should focus on Docker, AWS, Deep Learning and LLM applications.";

}

else if(question.includes("project")){

reply =
"I recommend AI Resume Screening, AI Interview Assistant and Healthcare Diagnosis AI.";

}

else if(question.includes("roadmap")){

reply =
"Start with Docker, then AWS, Cloud Deployment, Deep Learning and finally LLM applications.";

}

else{

reply =
"I recommend improving your technical skills, projects and resume to increase placement readiness.";

}

setTimeout(() => {

botMessage.innerText =
reply;

chatBox.appendChild(botMessage);

chatBox.scrollTop =
chatBox.scrollHeight;

},500);

input.value = "";

}