

const getWeatherJson = async (location) =>new Promise((resolve, reject)=>{    
    const api = `https://api.weatherapi.com/v1/current.json?key=7ba2e9ca5941458abf8185444232306&q=${location}`;
    console.log(api);
    fetch(api,{mode:'cors'})
        .then((response) =>response.json())
        .then((response) =>{
            if(response.error){
                reject(new Error('Invalid location'))
            } else{
                resolve(response);
            }
        })
        .catch(()=>{
            reject(new Error('error fetching weather data'))
        })
    })

export default getWeatherJson;