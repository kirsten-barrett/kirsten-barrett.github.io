/* COPY EMAIL ADDRESS FUNCTION */
function copyEmail() {
    navigator.clipboard.writeText("kirsten.barrett25@gmail.com");
    alert("Copied!");
}

/* TWO LINE FOOTER ON MOBILE */
const copyright = document.querySelector('#copyright')
if (window.screen.width < 470) {
    copyright.innerHTML = "© 2024 <br>Kirsten Barrett";
}