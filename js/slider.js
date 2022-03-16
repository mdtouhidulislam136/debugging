
const images = [
   " Images/Screenshot (104).png",
    "Images/Screenshot (105).png",
    "Images/Screenshot (106).png",
    "Images/Screenshot (107).png",
   " Images/Screenshot (108).png",
    "Images/Screenshot (117).png",
    "Images/Screenshot (119).png"
    
]
const imgElement = document.getElementById('slider-image');
imgIndex = 0;
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;

    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
imgIndex ++;

}, 1000)