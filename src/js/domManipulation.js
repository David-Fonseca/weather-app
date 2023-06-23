function setBackground(backgroundUrl){
    console.log(backgroundUrl);
    const body = document.querySelector('body');
    body.style.backgroundImage = backgroundUrl;
}

export default setBackground;