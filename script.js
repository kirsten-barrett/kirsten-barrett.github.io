// add & remove "responsive" class for burger menu
const responsiveNav = () => {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}