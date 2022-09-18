const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const output = document.querySelector("#output");

function checkBirthDateIsLucky(){
    if (!(dateOfBirth.value && luckyNumber.value)){
        output.innerText = "Please enter both the fields";
        return;
    }

    if((calculateSum(dateOfBirth.value))%luckyNumber.value === 0){
        console.log("You are lucky");
        output.innerText= "Your Birthday is Lucky! 🥳";
    } else {
        output.innerText="Your Birthday is not Lucky Enough";
    }
}

function calculateSum(dob){
    var dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i =0;i<dob.length;i++){
        sum = sum + Number(dob[i]);
    }
    return sum;
}

checkButton.addEventListener("click",checkBirthDateIsLucky)
