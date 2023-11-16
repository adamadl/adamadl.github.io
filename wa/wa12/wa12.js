const newBtn = document.querySelector("#js-new-quote");
const ansBtn = document.querySelector("#js-ans");
const img = document.querySelector("#image");

const questionTxt = document.querySelector("#js-quote-text");
let answerTxt = document.querySelector("#js-answer-text");

let answer = "";


const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '007fe6a015msh686cda71ffe3822p1d6aa5jsnae33c53fd46b',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

const imageEndpoint = 'https://api.unsplash.com/photos/random';
const unsplashAccessKey = 'TpdyPUvPyE5AC4PUGqI54k9J6yuiE01wylReBk343x4'; // Replace with your Unsplash access key

newBtn.addEventListener("click", getQuoteWithImage);
ansBtn.addEventListener("click", displayAns);

async function getQuoteWithImage() {
    try {
        // Fetch a random quote
        const quoteResponse = await fetch(url,options);
        const jsonData = await quoteResponse.json();
        const setup = jsonData.body[0].setup;
        const punchline = jsonData.body[0].punchline;

        // Fetch a random image from Unsplash
        const imageResponse = await fetch(`${imageEndpoint}?client_id=${unsplashAccessKey}`);
        const imageData = await imageResponse.json();
        const imageUrl = imageData.urls.small;

        //Create a JSON object with both quote and image
        const result = {
            setup: setup,
            punchline: punchline,
            imageUrl: imageUrl,
        };

        displayQuote(result.setup);
        img.innerHTML = `<img src="${result.imageUrl}" alt="Random Image" class="img-container">`;
        answer = result.punchline;
        answerTxt.textContent = "";
        console.log(result);

    } catch (err) {
        console.log(err);
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
getQuoteWithImage();
