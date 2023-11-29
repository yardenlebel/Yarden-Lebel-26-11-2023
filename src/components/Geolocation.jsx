import React,{useState,useEffect} from 'react'

export default function Geolocation(props) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
   
    var city={name:'Tel Aviv',id:'215854',fav:false,weather:{temp:'',desc:'',iconSrc:''}};

    const findLoc=()=>{
        navigator.geolocation.getCurrentPosition(success, error);
      
        function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude( position.coords.longitude)
        }
        function error(){
          props.setCity(city)
      }
    }
     

    useEffect(() => {
        if(props.city==''){
            
            if(latitude!=''&&longitude!=''){
                try {
            
                    fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=NGBkAiMlFGldtzYt2HLNQ9ew12Wr5qx6&q=${latitude}%2C${longitude}`).then((res)=>{return res.json()}).then((data)=>{
                        if (data) { //if we got data from api
                        
                        city={name:data.LocalizedName,id:data.Key,fav:false,weather:{temp:'',desc:'',iconSrc:''}};
                       
                        props.setCity(city)
                        }
                        
                    });
                }
                catch (error) {
                    console.error('Error fetching current weather:', error);
                    props.setCity(city)
                //   error();
                }
        }
        else{findLoc()}
    }
           
          
          
       
    }, [latitude]);//only at the beggining

    return (
    <div>
        {findLoc()}
    </div>
  )
}
