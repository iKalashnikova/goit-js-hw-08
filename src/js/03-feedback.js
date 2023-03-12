import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const storageData = localStorage.getItem("feedback-form-state");
   
if (storageData) {
    const parseData = JSON.parse(storageData);
    emailEl.value = parseData.email || "";
    messageEl.value = parseData.message || "";
} else {
    emailEl.value = "";
  messageEl.value = "";
}
    

formEl.addEventListener('input', handleSaveMessage);

function handleSaveMessage (evt) {
    evt.preventDefault();

 const userMessage = {
        email: emailEl.value,
        message: messageEl.value
 };

    throttle(() => localStorage.setItem("feedback-form-state", JSON.stringify(userMessage)),500)();
};

formEl.addEventListener('submit', handleSentMessage);

function handleSentMessage(evt) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    formEl.reset();
    localStorage.removeItem("feedback-form-state");
}
