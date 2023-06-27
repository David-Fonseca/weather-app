import '../style.css';
import humidityIcon from '../icons/humidity.png'
import rainIcon from '../icons/rain.png'

import thermoIcon from '../icons/thermostat.png'
import windIcon from '../icons/wind.png'
import getWeatherJson from './api';
import getLocation from './location';
import getForecastJson from './forecast';
import getBackground from './background';
import { setGeneralInfo, setSpecificInfo, setForecast } from './domManipulation';


let unitFlag = 'C';

document.querySelector('#feels-like-icon').src = thermoIcon;
document.querySelector('#humidity-icon').src = humidityIcon;
document.querySelector('#chance-of-rain-icon').src = rainIcon;
document.querySelector('#wind-speed-icon').src = windIcon;

document.querySelector('#search-location').addEventListener('click',(event)=>{
    event.preventDefault();
    
    Promise.all([getWeatherJson(getLocation()), getForecastJson(getLocation())])
    .then(values => {

        getBackground(values[0].current.condition.text);
        setGeneralInfo(values[0], unitFlag);
        setSpecificInfo(values[1], unitFlag);
        setForecast(values[1], unitFlag);

    })
})

Promise.all([getWeatherJson('london'), getForecastJson('london')])
.then(values => {

    getBackground(values[0].current.condition.text);
    setGeneralInfo(values[0]);
    setSpecificInfo(values[1]);
    setForecast(values[1]);

})

document.querySelector('#F').addEventListener('click',()=>{
    if(unitFlag !== 'F'){
        unitFlag='F';

    }
})

document.querySelector('#C').addEventListener('click',()=>{
    if(unitFlag!=='C'){
        unitFlag='C';
    }
})