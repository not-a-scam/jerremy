const submitBtn = document.getElementById("submit-application");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const instagramInput = document.getElementById("instagram");
const writeupInput = document.getElementById("writeup");
const reasonInput = document.getElementById("reason");
const yesRiskInput = document.getElementById("yes-risk");
const yesCertainInput = document.getElementById("yes-certain");

const textInputList = [nameInput, ageInput, instagramInput, writeupInput, reasonInput];

const submitClick = function(e) {
    let check = true;
    e.preventDefault();

    textInputList.forEach((input, index) => {
        if(input.value === ""){
            document.getElementsByClassName("warning")[index].style.display = "inline";
            check = false;
        } else {
            document.getElementsByClassName("warning")[index].style.display = "";
        }
    });

    if(!yesRiskInput.checked){
        document.getElementsByClassName("warning")[5].style.display = "inline";
        check = false;
    } else {
        document.getElementsByClassName("warning")[5].style.display = "";
    }

    if(!yesCertainInput.checked){
        document.getElementsByClassName("warning")[6].style.display = "inline";
        check = false;
    }else {
        document.getElementsByClassName("warning")[6].style.display = "";
    }

    if(check){
        window.location.replace("./index.html");
    }
}

submitBtn.addEventListener("click", submitClick);