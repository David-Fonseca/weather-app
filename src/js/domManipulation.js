

function setGeneralInfo(json,unit){

    document.getElementById('state').textContent=json.current.condition.text;
    document.getElementById('location').textContent=json.location.name;
    document.getElementById('time').textContent=json.location.localtime;
    document.getElementById('current-icon').src = json.current.condition.icon;
    if(unit==='F'){
        document.getElementById('temperature').textContent=`${json.current.temp_f  } °F`;
    }
    else{
        document.getElementById('temperature').textContent=`${json.current.temp_c  } °C`;
    }
}

function setSpecificInfo(json, unit){
    document.getElementById('humidity-value').textContent=`${json.current.humidity  } %`;
    document.getElementById('chance-of-rain-value').textContent= `${json.current.cloud } %`;
    document.getElementById('wind-speed-value').textContent=`${json.current.wind_kph  } km/h`;
    if(unit==='F'){
        document.getElementById('feels-like-value').textContent=`${json.current.feelslike_f  } °F`;
    }
    else{
        document.getElementById('feels-like-value').textContent=`${json.current.feelslike_c  } °C`;
    }
}
function setForecast(json, unit){

    let count = 0;
    const forecastWindow = document.getElementById('forecast');
    json.forecast.forecastday.forEach(element => {
        if(count<7){
            const newDay = document.createElement('div');
            if(unit==='C'){
                newDay.innerHTML=`
                <div class="day">${element.date}</div>
                <img src="${element.day.condition.icon}">
                <div class="day">${element.day.avgtemp_c} °C</div>
                <div class="day">${element.day.mintemp_c} °C</div>
                `}
            else{
                newDay.innerHTML=`
                <div class="day">${element.date}</div>
                <img src="${element.day.condition.icon}">
                <div class="day">${element.day.avgtemp_f} °F</div>
                <div class="day">${element.day.mintemp_f} °F</div>
                `
            }
            forecastWindow.appendChild(newDay);
        }
        count += 1;
    });

}

export {setGeneralInfo, setSpecificInfo, setForecast}