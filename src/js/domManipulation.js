

function setGeneralInfo(json){
    console.log(json)
    document.getElementById('state').textContent=json.current.condition.text;
    document.getElementById('location').textContent=json.location.name;
    document.getElementById('time').textContent=json.location.localtime;
    document.getElementById('temperature').textContent=`${json.current.temp_c  } °C`
    document.getElementById('current-icon').src = json.current.condition.icon;
}

function setSpecificInfo(json){
    document.getElementById('feels-like-value').textContent=`${json.current.feelslike_c  } °C`;
    document.getElementById('humidity-value').textContent=`${json.current.humidity  } %`;
    document.getElementById('chance-of-rain-value').textContent= `${json.current.cloud } %`;
    document.getElementById('wind-speed-value').textContent=`${json.current.wind_kph  } km/h`;
}

function setForecast(json){
    console.log(json);
    let count = 0;
    const forecastWindow = document.getElementById('forecast');
    json.forecast.forecastday.forEach(element => {
        if(count<7){
            const newDay = document.createElement('div');
            newDay.innerHTML=`
                <div class="day">${element.date}</div>
                <img src="${element.day.condition.icon}">
                <div class="day">${element.day.avgtemp_c}</div>
                <div class="day">${element.day.mintemp_c}</div>
                `
            forecastWindow.appendChild(newDay);
        }
        count += 1;
    });

}

export {setGeneralInfo, setSpecificInfo, setForecast}