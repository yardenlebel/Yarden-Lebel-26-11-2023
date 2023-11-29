import React,{useState,useEffect} from 'react'

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if(props.city!=''){
      try {
        fetch(`https://dataservice.accuweather.com/currentconditions/v1/${props.city.id}?apikey=	NGBkAiMlFGldtzYt2HLNQ9ew12Wr5qx6`).then((res)=>{return res.json()}).then((data)=>{
            if (data) { //if we got data from api
            var src='';
            if(data[0].WeatherIcon<10)
             src=`https://developer.accuweather.com/sites/default/files/0${data[0].WeatherIcon}-s.png`; 
            else src=`https://developer.accuweather.com/sites/default/files/${data[0].WeatherIcon}-s.png`;

              setWeatherData({tempC:data[0].Temperature.Metric.Value,desc:data[0].WeatherText,icon:src,unitC:data[0].Temperature.Metric.Unit,tempF:data[0].Temperature.Imperial.Value,unitF:data[0].Temperature.Imperial.Unit});
            
            let city={name:props.city.name,id:props.city.id,fav:props.city.fav,weather:{tempC:data[0].Temperature.Metric.Value,desc:data[0].WeatherText,icon:src,unitC:data[0].Temperature.Metric.Unit,tempF:data[0].Temperature.Imperial.Value,unitF:data[0].Temperature.Imperial.Unit}};
            props.setCity(city); 
        }});
    }
      catch (error) {
        console.error('Error fetching current weather:', error);
      }
    }
    
  }, [props.city.id]);//only if city key changes/the temp format -the fetch will start
  const setTemp=()=>{
    if(props.tempFormat)
      return(<h6>{weatherData.tempC}{'\u00b0'}{weatherData.unitC}</h6>)
    else return(<h6>{weatherData.tempF}{'\u00b0'}{weatherData.unitF}</h6>)
    
  }
  
  return (
    <div id='currentD' > 
      <div id='currentImgDiv'><img id='currentImg'  width='75' height='45' src={weatherData.icon}alt='Weather Icon'/></div>
      <div id='currentT'>
        <h6>{props.city.name}</h6>
        {setTemp()}
      <h6>{weatherData.desc}</h6>
      </div>
    </div>
  )
}
