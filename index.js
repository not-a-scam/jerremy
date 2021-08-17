const faceBox = document.getElementsByClassName("face")[0];
const chestBox = document.getElementsByClassName("chest")[0];
const rightArmBox = document.getElementsByClassName("rightarm")[0];
const leftArmBox = document.getElementsByClassName("leftarm")[0];
const absBox = document.getElementsByClassName("abs")[0];
const thighsBox = document.getElementsByClassName("thighs")[0];
const feetBox = document.getElementsByClassName("feet")[0];

const faceCard = document.getElementById("face");
const chestCard = document.getElementById("chest");
const rightArmCard = document.getElementById("rightarm");
const leftArmCard = document.getElementById("leftarm");
const absCard = document.getElementById("abs");
const thighsCard = document.getElementById("thighs");
const feetCard = document.getElementById("feet");

const tablet = window.matchMedia("(max-width: 1250px) and (min-width: 672px)");
const mobile = window.matchMedia("(max-width: 672px)");

const removeCards = function () {
    const cards = document.getElementsByClassName("card");
    for(let i = 0; i < cards.length; i++){
        cards[i].style.display = "";
    }
}

const displayCard = function (card) {
    if(!mobile.matches){
        if(tablet.matches){
            removeCards();
        }
        if (card.style.display === ""){
            card.style.display = "block";
        } else {
            card.style.display = "";
        }
    }
}


faceBox.addEventListener("click", () => {displayCard(faceCard)});
    
chestBox.addEventListener("click", () => {displayCard(chestCard)});
    
rightArmBox.addEventListener("click", () => {displayCard(rightArmCard)});
    
leftArmBox.addEventListener("click", () => {displayCard(leftArmCard)});
    
absBox.addEventListener("click", () => {displayCard(absCard)});
    
thighsBox.addEventListener("click", () => {displayCard(thighsCard)});
    
feetBox.addEventListener("click", () => {displayCard(feetCard)});