

function setGeneralInfo(json){

}

function setSpecificInfo(json){

    document.getElementById('feels-like-value').textContent=json.current.feelslike_c;
    document.getElementById('humidity-value').textContent=json.current.humidity;
    document.getElementById('chance-of-rain-value').textContent=json.current.cloud;
    document.getElementById('wind-speed-value').textContent=json.current.wind_kph;

    
    // (json.current.feelslike_c,json.current.humidity,json.current.cloud,json.current.wind_kph))
   
}

export {setGeneralInfo, setSpecificInfo}