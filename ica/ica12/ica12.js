const newBtn = document.querySelector("#js-new-quote");
const ansBtn = document.querySelector("#js-tweet");

const questionTxt = document.querySelector("#js-quote-text");
let answerTxt = document.querySelector("#js-answer-text");

let answer = "";

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

newBtn.addEventListener("click", getQuote);
ansBtn.addEventListener("click", displayAns);

async function getQuote(){
    //console.log("the button was clicked");
    
    //code we try to run
    try {
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }

        /* JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value */
        const json = await response.json();

        console.log(json);
        displayQuote(json["question"]);
        answer = json["answer"];
        answerTxt.textContent = "";
    }
    //run if something goes wrong
    catch(err){
        console.log(err);
        alert("Failed to fetch new quote");
    }
}

//Shows question
function displayQuote(question){
    questionTxt.textContent = question;
}

//Shows answer
function displayAns(){
    answerTxt.textContent = answer;
}

//Runs getQuote on load to populate question when page is loading
getQuote();