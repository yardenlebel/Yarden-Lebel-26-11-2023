import React,{useState,useEffect} from 'react'

export default function WeeklyW(props) {
    const [weekArr, setWeekArr] = useState([]);

    useEffect(() => {
      if(props.city!=''){
        try {
          fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.city.id}?apikey=	NGBkAiMlFGldtzYt2HLNQ9ew12Wr5qx6&metric=${props.tempFormat}`).then((res)=>{return res.json()}).then((data)=>{
              if (data) { //if we got data from api
              
              setWeekArr(data.DailyForecasts)
              }
          });
      }
        catch (error) {
          console.error('Error fetching current weather:', error);
        }}
    }, [props.city.id,props.tempFormat]);//only if city key changes the fetch will start

    const setImg=(src)=>{//if the icon is 1 digit add 0 before
        if(src<10)
             return <img src={`https://developer.accuweather.com/sites/default/files/0${src}-s.png`} alt='Weather Icon'/>
        
       
        else 
            return <img src={`https://developer.accuweather.com/sites/default/files/${src}-s.png`} alt='Weather Icon'/>
    }
    const getDayName=(dateString)=> {//check day name
      const date = new Date(dateString);
      const options = { weekday: 'long' }; // or use 'short' for abbreviated names
    
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  return (
    <div id='weeklyD' >
        {weekArr.map((val) => (
              <div className='weekD'>
                {getDayName(val.Date)}<br/>
                {val.Temperature.Maximum.Value}{'\u00b0'}{val.Temperature.Maximum.Unit}/{val.Temperature.Minimum.Value}{'\u00b0'}{val.Temperature.Maximum.Unit}<br/>
                {val.Day.IconPhrase}
                {setImg(val.Day.Icon)}
                
                </div>
            ))}
    </div>
  )
}
