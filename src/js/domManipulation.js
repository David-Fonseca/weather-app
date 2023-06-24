

function setGeneralInfo(json){
    console.log(json)
    document.getElementById('state').textContent=json.current.condition.text;
    document.getElementById('location').textContent=json.location.name;
    document.getElementById('time').textContent=json.localtime;
    document.getElementById('temperature').textContent=`${json.current.temp_c  } °C`
}

function setSpecificInfo(json){
    document.getElementById('feels-like-value').textContent=`${json.current.feelslike_c  } °C`;
    document.getElementById('humidity-value').textContent=`${json.current.humidity  } %`;
    document.getElementById('chance-of-rain-value').textContent= `${json.current.cloud } %`;
    document.getElementById('wind-speed-value').textContent=`${json.current.wind_kph  } km/h`;
}

export {setGeneralInfo, setSpecificInfo}