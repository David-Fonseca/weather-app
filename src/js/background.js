async function getBackground(prompt){
    const body = document.querySelector('body');
    try{    
        const weatherPrompt = `${prompt} weather image`;
        console.log(weatherPrompt)        
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LKSy1VlRQZ7F6EgdseTiSEMQvtJ6ouYb&s=${weatherPrompt}`,{mode:'cors'})

        const imgData = await response.json();
        body.style.backgroundImage=`url('${imgData.data.images.original.url}')`;

        
        return imgData;
    }
    catch(error){
        console.log(error);
        return  'error';
    }
    

}

export default getBackground;