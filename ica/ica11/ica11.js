console.log("test");

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random() * number);
}

function random2(number){
    return (Math.random() * number);
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<500; i++){
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+","+green+","+blue+","+alpha+")";
        console.log(color);
        ctx.fillStyle = color;
        ctx.font = "30px Ariel"
        ctx.fillText("Crazy? I was crazy once...", random(canvas.width), random(canvas.height), )
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(300),
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);