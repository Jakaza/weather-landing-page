
const getLocationBtn = document.getElementById('current-location-btn')
const API_KEY = 'ac5587e23267ee787e4d451fefd6d82a'



getLocationBtn.addEventListener('click' , ()=>{
    navigator.geolocation.getCurrentPosition(success,error);
})

function success(cords){
    fetchWeatherData(API_KEY ,cords.coords)
    // console.log();
}

function error(err){

    console.log(err);

}


function fetchWeatherData(api , cords = [] ) {
    if(cords instanceof Object){
        console.log('TRUE', cords);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${api}`
    }
    return
}











