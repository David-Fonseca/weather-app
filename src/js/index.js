import '../style.css';
import getWeatherJson from './api';
import getLocation from './location';
import getForecastJson from './forecast';
import getBackground from './background';






document.querySelector('#search-location').addEventListener('click',(event)=>{
    event.preventDefault();

    Promise.all([getWeatherJson(getLocation()), getForecastJson(getLocation())])
    .then(values => {
        getBackground(values[0].current.condition.text)
        console.log(values[0])
        console.log(values[1])
    })
})