const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const txt = document.getElementById('txt');
const h1 = document.getElementById('h1');
btn.addEventListener('click', function(){
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    txt.classList.toggle('active');
    h1.classList.toggle('active');
});