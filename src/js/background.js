async function getBackground(prompt){
    try{    
        const weatherPrompt = `${prompt} weather`;
        
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LKSy1VlRQZ7F6EgdseTiSEMQvtJ6ouYb&s=${weatherPrompt}`,{mode:'cors'})

        const imgData = await response.json();
        const body = document.querySelector('body');
        console.log(imgData.data.images.original.url)
        body.style.backgroundImage = imgData.data.images.original.url;
        return 'success';
    }
    catch(error){
        console.log(error);
        return  'error';
    }
    

}

export default getBackground;