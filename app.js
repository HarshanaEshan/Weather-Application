const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',()=>{
  const APIKey = 'c6b88ec3fb8b77f4488c1356ce494d45';
  const city = document.querySelector('.search-box input').value;

  if(city==='')
    return
  

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
  .then(response=>response.json())
  .then(json=>{

    if(json.cod=='404'){
      container.style.height = '400px';
      weatherBox.classList.remove('active');
      weatherDetails.classList.remove('active');
      error404.classList.add('active');
      return;
    }

      container.style.height = '555px';
      container.classList.add('active');
      weatherBox.classList.add('active');
      weatherDetails.classList.add('active');
      error404.classList.remove('active');

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

      
      switch(json.weather[0].main){
        case 'Clear' :
          image.src='assets/img/clear.png';
          document.body.style.backgroundImage = "url('assets/img/clearSun.jpg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        case 'Rain' :
          image.src='assets/img/rain.png';
          document.body.style.backgroundImage = "url('assets/img/rainyday.jpeg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        case 'Snow' :
          image.src='assets/img/snow.png';
          document.body.style.backgroundImage = "url('assets/img/snowbcimg.jpeg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        case 'Clouds' :
          image.src='assets/img/cloud.png';
          document.body.style.backgroundImage = "url('assets/img/cloudysky.jpg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        case 'Mist' :
          image.src='assets/img/mist.png';
          document.body.style.backgroundImage = "url('assets/img/misty.jpeg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        case 'Haze' :
          image.src='assets/img/mist.png';
          document.body.style.backgroundImage = "url('assets/img/misty.jpeg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
          break;
  
        default:
          image.src='assets/img/cloud.png'
          document.body.style.backgroundImage = "url('assets/img/cloudysky.jpg')";
          document.body.style.backgroundSize = "cover"; // To cover the entire body
          document.body.style.backgroundRepeat = "no-repeat"; // To avoid repetition
      }
  
      temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML=`${json.weather[0].description}`;
      humidity.innerHTML=`${json.main.humidity}%`;
      wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
      
  })
})



const dateTime = new Date();
var currentDate = "Date <br/> "+dateTime.getDate()+" - "+dateTime.getMonth()+" - "+dateTime.getFullYear();
var currentTime = " Time <br/> "+dateTime.getHours()+":"+dateTime.getMinutes();
document.getElementById("date").innerHTML = currentDate;
document.getElementById("time").innerHTML = currentTime;
