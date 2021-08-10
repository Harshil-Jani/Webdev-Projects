const btn = document.getElementById('btn');
const container = document.getElementById('container');
var txt = "Submission Acccepted.\nEvalution Running.";

btn.addEventListener('click',()=>{
    createNotification();
})

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = txt;
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    },2000);
}