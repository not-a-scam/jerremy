const tpose = document.getElementById("tpose");

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

const setTPose = function(imgPath) {
    if(!mobile.matches){
        tpose.src = imgPath;
    }
}


faceBox.addEventListener("click", () => {displayCard(faceCard)});
faceBox.addEventListener("mouseenter", () => setTPose("./images/head.png"));
faceBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
chestBox.addEventListener("click", () => {displayCard(chestCard)});
chestBox.addEventListener("mouseenter", () => setTPose("./images/torso.png"));
chestBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
rightArmBox.addEventListener("click", () => {displayCard(rightArmCard)});
rightArmBox.addEventListener("mouseenter", () => setTPose("./images/rightarm.png"));
rightArmBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
leftArmBox.addEventListener("click", () => {displayCard(leftArmCard)});
leftArmBox.addEventListener("mouseenter", () => setTPose("./images/leftarm.png"));
leftArmBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
absBox.addEventListener("click", () => {displayCard(absCard)});
absBox.addEventListener("mouseenter", () => setTPose("./images/torso.png"));
absBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
thighsBox.addEventListener("click", () => {displayCard(thighsCard)});
thighsBox.addEventListener("mouseenter", () => setTPose("./images/legs.png"));
thighsBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));
    
feetBox.addEventListener("click", () => {displayCard(feetCard)});
feetBox.addEventListener("mouseenter", () => setTPose("./images/legs.png"));
feetBox.addEventListener("mouseout", () => setTPose("./images/t-pose.png"));