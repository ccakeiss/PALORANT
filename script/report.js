const report = document.querySelector("form");

const usernameElement = document.getElementById('username');
const countryElement = document.getElementById('country');
const emailElement = document.getElementById('email');
const subjectElement = document.getElementById('subject');
const descriptionElement = document.getElementById('desc');
const followUpElement = document.getElementById('follow-up');

report.addEventListener('submit', function(e){
    e.preventDefault();

    let username = usernameElement.value;
    let country = countryElement.value;
    let email = emailElement.value;
    let subject = subjectElement.value;
    let description = descriptionElement.value;
    let followUp = followUpElement.value;

    validInput = validation(username, email, country, subject, description, followUp);
})

function resetPage(){
    usernameElement.innerHTML = "";
    countryElement.innerHTML = "";
    emailElement.innerHTML = "";
    sub
}

function validation(username, email, country, subject, description, followUp){
    if(username == "" || country== "" || email == "" || subject == "" || description == ""){
        alert("Please fill all fields");
        return false;
    }

    if(isEmptyInput(username) || isEmptyInput(email) || isEmptyInput(subject) || isEmptyInput(description)){
        alert("Cannot recieve empty input");
        return false;
    }

    if(haveSpace(username)){
        alert("Username cannot contain space");
        return false;
    }

    if(emailValid(email) == false || haveSpace(email)){
        alert("Input valid email");
        return false;
    }

    if(subject.length < 5){
        alert("Subject must be contain 5 character or more");
        return false;
    }

    if(descMinWord(description) < 3){
        alert("Description must be 3 words or more");
        return false;
    }

    if(followUp.checked == false){
        alert("Please checked the follow up statement bellow");
        return false;
    }

    alert("your report has been submited");
    resetPage();
}

function isEmptyInput(data) {
    
    for(let i=0 ; i<data.length ; i++){
        if(data[i] != ' '){
            return false;
        }
    }

    return true;
}

function haveSpace(data) {
    
    for(let i=0 ; i<data.length ; i++){
        if(data[i] == ' '){
            return true;
        }
    }

    return false;
}

function emailValid(email){

    let suffix = ["@gmail.com", "@yahoo.com"]

    let index = -1;
    for(let i=email.length-1 ; i>= 0 ; i--){
        if(email[i] == '@'){
            index = i;
            break;
        }
    }

    if(index == -1) return false;

    let emailSuffix = email.substring(index, email.length);

    let isSame = 0;
    for(let i=0 ; i<suffix.length ; i++){
        if(emailSuffix == suffix[i]){
            isSame = 1;
            break;
        }
    }

    if(isSame == 0) return false;

    let countPrefix = 0;
    for(let i=0 ; i<index ; i++){
        if(email[i] != ' ') countPrefix++;
    }

    if(countPrefix < 4) return false;

    return true;
}

function descMinWord(description){
    
    let countWord = 0;
    let startIndex = -1;
    let activeWord = 0;
    
    for(let i=0 ; i<description.length ; i++){
        if(description[i] != ' '){
            startIndex = i;
            activeWord = 1;
        }

        if(activeWord == 1 && description[i] == ' '){
            countWord++;
            activeWord = 0;
        }
    }

    if(activeWord == 1) countWord++;

    return countWord;
}