const inputs = document.querySelectorAll("input[id^='user-']");
const errorDisplays = document.querySelectorAll(".error");

const inputFirstName = document.querySelector("#user-first-name");
const inputLastName = document.querySelector("#user-last-name");
const inputEmail = document.querySelector("#user-email");
const inputPhone = document.querySelector("#user-phone");
const inputPassword = document.querySelector("#user-pw");
const inputConfirmPassword = document.querySelector("#user-cpw");

const submitBtn = document;

let count = [0, 0, 0, 0, 0, 0];

function validate(inputField, errorField, errorMessage, boolean, orderNumber){
    errorField.textContent = errorMessage;
    if(boolean){
        inputField.className = "valid";
        count[orderNumber] = 1;
    }else{
        if(inputField.value.length == 0){
            inputField.className = "";
        }else{
            inputField.className = "invalid";
        }
        count[orderNumber] = 0;
    }

    if(errorMessage == ""){
        errorField.style.display = "none";
    }else{
        errorField.style.display = "inline";
    }
}

inputFirstName.addEventListener('input', (e) => {
    if(e.target.value.length >=3 && e.target.value.length <=25){
        validate(inputFirstName, errorDisplays[0], "", true, 0);
    }else if(e.target.value.length == 0){
        validate(inputFirstName, errorDisplays[0], "*This field is required", false, 0);
    }else{
        validate(inputFirstName, errorDisplays[0], "*Please enter at least 3 characters and not more than 20 characters", false, 0);
    }
});

inputLastName.addEventListener('input', (e) => {
    if(e.target.value.length >=3 && e.target.value.length <=25){
        validate(inputLastName, errorDisplays[1], "", true, 1);
    }else if(e.target.value.length == 0){
        validate(inputLastName, errorDisplays[1], "*This field is required", false, 1);
    }else{
        validate(inputLastName, errorDisplays[1], "*Please enter at least 3 characters and not more than 20 characters", false, 1);
    }
});

inputEmail.addEventListener('input', (e) => {
    if(e.target.value.includes("@") && e.target.value.includes(".com")){
        validate(inputEmail, errorDisplays[2], "", true, 2);
    }else if(e.target.value.length == 0){
        validate(inputEmail, errorDisplays[2], "*This field is required", false, 2);
    }else{
        validate(inputEmail, errorDisplays[2], "*Please enter a valid email", false, 2);
    }
});

inputPhone.addEventListener('input', (e) => {
    if(e.target.value != "" && e.target.value == e.target.value.replace(/\D/g,"")){
        validate(inputPhone, errorDisplays[3], "", true, 3);
    }else if(e.target.value.length == 0){
        validate(inputPhone, errorDisplays[3], "*This field is required", false, 3);
    }else{
        validate(inputPhone, errorDisplays[3], "*Please enter a valid phone number", false, 3);
    }
});

inputPassword.addEventListener('input', (e) => {
    if(e.target.value.length >= 8){
        validate(inputPassword, errorDisplays[4], "", true, 4);
    }else if(e.target.value.length == 0){
        validate(inputPassword, errorDisplays[4], "*This field is required", false, 4);
    }else{
        validate(inputPassword, errorDisplays[4], "*Password must have at least 8 characters", false, 4);
    }

    if(inputConfirmPassword.value != ""){
        if(inputConfirmPassword.value == e.target.value){
            validate(inputConfirmPassword, errorDisplays[5], "", true, 5);
        }else{
            validate(inputConfirmPassword, errorDisplays[5], "*Password did not match", false, 5);
        }
    }
});

inputConfirmPassword.addEventListener('input', (e) => {
    if(e.target.value == inputPassword.value && e.target.value != ""){
        validate(inputConfirmPassword, errorDisplays[5], "", true, 5);
    }else if(e.target.value.length == 0){
        validate(inputConfirmPassword, errorDisplays[5], "*This field is required", false, 5);
    }else{
        validate(inputConfirmPassword, errorDisplays[5], "*Password did not match", false, 5);
    }
});

submitBtn.addEventListener("click", (e) => {
    let sum = count.reduce((total, value)=> total + value, 0);
    if(sum < 6){
        e.preventDefault();
    }
});