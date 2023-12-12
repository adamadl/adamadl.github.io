// console.log("connected")

const slider = document.getElementById("slider");
const advanced = document.getElementById("advanced_slider");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const checkbox = document.getElementById("checkbox");

let value = slider.value;

let tiltAngle = advanced.value;

let speed = 0;

function formatPhoneNumber(number){
    let formattedNumber = number.toString().padStart(10, '0');
    return '(' + formattedNumber.substring(0,3) + ') ' + formattedNumber.substring(3,6) + '-' + formattedNumber.substring(6);
}

submit.addEventListener("click", function(){
    alert("You Submitted: " + formatPhoneNumber(slider.value));
});

checkbox.addEventListener("change", function(){
    if (checkbox.checked){
        advanced.style.display = "inline";
    }
    else{
        advanced.style.display = "none";
        advanced.value = 0;
        slider.style.transform = `rotate(0deg)`;
    }
});

function UpdatePhone(){

    tiltAngle = Number(advanced.value);

    value = Number(slider.value);

    speed += tiltAngle * 10;

    speed *= 0.9;

    value += speed*100000

    slider.value = value;

    let phoneNumber = formatPhoneNumber(slider.value);
    output.innerHTML = "Selected Phone Number: " + phoneNumber;
}


advanced.oninput = function(){
    tiltAngle = Number(advanced.value);
    slider.style.transform = `rotate(${tiltAngle}deg)`;
    slider.classList.add("tilted");
};

setInterval(UpdatePhone, 10);