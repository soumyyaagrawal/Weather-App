var apikey= "c7d1fa63964de12efb26b925b002b40b";
var input = document.querySelector(".search-bar");
var inputvalue = "london";
var weatherIcon = document.querySelector(".weather-icon");
var url=  `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apikey}&units=metric` ;




async function checkweather(){
    const resp = await fetch(url);
    document.querySelector(".weather").style.display = "block";
    if(resp.status == 404){
         
        alert("City not found");
       


        return;
    } 
    else{
    var respData = await resp.json();
    console.log(respData);
    document.querySelector(".city").innerText= respData.name;
    document.querySelector(".temp").innerText= respData.main.temp+"°C";
    document.querySelector(".humidity").innerText= respData.main.humidity+"%";
    document.querySelector(".Wind").innerText= respData.wind.speed+"m/s"; 
    var weather = respData.weather[0].main;
    weatherIcon.src = "images/" + weather + ".png";
    console.log(weatherIcon.src);
    
    

    }
}

var srchbtn = document.querySelector("button");

srchbtn.addEventListener("click",()=>{
    inputvalue = input.value;
    url=  `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apikey}&units=metric` ;
    checkweather();
});

