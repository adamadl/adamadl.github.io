// console.log("connected")

const slider = document.getElementById("slider");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const checkbox = document.getElementById("checkbox");

slider.addEventListener("input", function() {
    let phoneNumber = formatPhoneNumber(slider.value);
    output.innerHTML = "Selected Phone Number: " + phoneNumber;

    if (checkbox.checked){
        let tiltAngle = (slider.value / slider.max) * 10;
        slider.style.transform = `rotate(${tiltAngle}deg)`;
        slider.classList.add("tilted");
    }
    else{
        slider.style.transform = `rotate(0deg)`;
        slider.classList.remove("tilted");
    }
});

function formatPhoneNumber(number){
    let formattedNumber = number.toString().padStart(10, '0');
    return '(' + formattedNumber.substring(0,3) + ') ' + formattedNumber.substring(3,6) + '-' + formattedNumber.substring(6);
}

submit.addEventListener("click", function(){
    alert("You Submitted: " + formatPhoneNumber(slider.value));
});

checkbox.addEventListener("change", function(){
    if (checkbox.checked){
        slider.style.width = "80%";
    }
    else{
        slider.style.width = "10%";
        slider.classList.remove("tilted");
    }
});