const initialModify = document.getElementById("myContent");
initialModify.textContent = "FEATURED CONTENT";

const oldStyle = document.querySelector(".normalContent");
oldStyle.classList.remove("clase removida");

const newStyle = document.querySelector(".featuredContent");
newStyle.classList.add("clase añadida");

console.log(initialModify, oldStyle, newStyle);