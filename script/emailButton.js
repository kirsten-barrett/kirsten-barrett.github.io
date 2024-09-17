const emailBtn = document.querySelector('#email-btn');
const copyright = document.querySelector('#copyright')

if (window.screen.width < 470) {
    emailBtn.innerHTML = "kirsten.barrett25<br>@gmail.com";
    copyright.innerHTML = "© 2024 <br>Kirsten Barrett";
}

function copyEmail() {
    navigator.clipboard.writeText("kirsten.barrett25@gmail.com");
    alert("Copied!");
}