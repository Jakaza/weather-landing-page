
const getLocationBtn = document.getElementById('current-location-btn')
const API_KEY = 'ac5587e23267ee787e4d451fefd6d82a'



getLocationBtn.addEventListener('click' , ()=>{
    navigator.geolocation.getCurrentPosition(success,error);
})

function success(cords){
    fetchWeatherData(cords.coords)
    // console.log();
}

function error(err){

    console.log(err);

}


function fetchWeatherData(cords = [] ) {
    if(cords instanceof Object){
        let {latitude,longitude} = cords

        let url = `https://api.openweathermap.or/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}`
        
        const httpRequest = new XMLHttpRequest()

        httpRequest.onprogress = () =>{
            console.log('loading......');
        }

        httpRequest.onerror = (err)=>{
            console.log("Error " , err);
            return false
        }

        httpRequest.onreadystatechange = ()=>{
            if(httpRequest.readyState === 4 && httpRequest.status === 200){
                const data = JSON.parse(httpRequest.responseText)
                console.log(data);
            }
            return false;
        }
        httpRequest.open('GET', url)
        
        httpRequest.send()
    }
}











