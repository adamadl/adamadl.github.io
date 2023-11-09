const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ['img/pic1.jpg', 'img/pic2.webp', 'img/pic3.jpg', 'img/pic4.webp', 'img/pic5.webp'];

/* Declaring the alternative text for each image file */
const altArr = ['sunset painting', 'holding hands painting', 'red tree painting', 'snowy landscape painting', 'red spiral painting'];

/* Looping through images */
for(let i = 0; i < imgArr.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArr[i]);
    newImage.setAttribute('alt', altArr[i]);

    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', imgArr[i]);
        displayedImage.setAttribute('alt', altArr[i]);
    })

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
    if(btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
