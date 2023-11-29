import React,{useState,useEffect} from 'react'
import { FcSearch } from "react-icons/fc";
export default function AutoCompleteInput (props) {
    const [suggestions, setSuggestions] = useState([]);
    const [cityLocal, setCityLocal] = useState('');//for the text input
  
    useEffect(() => {
        const fetchSuggestions = async () => {
          try {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=	NGBkAiMlFGldtzYt2HLNQ9ew12Wr5qx6&q=${cityLocal}&language=en-us`).then((res)=>{return res.json()}).then((data)=>{
                if (data) { 
                setSuggestions(data);}
            });
        }
          catch (error) {
            console.error('Error fetching suggestions:', error);
          }
        };
    
        if (cityLocal.length > 2) {
          fetchSuggestions();
        } 
        else {
          setSuggestions([]);
        }
      }, [cityLocal]);//only if city name changes the fetch will start
  
        const check=(event)=>{  //check there are only english letters in search field
                const updatedValue = event.target.value.replace(/[^a-zA-Z ]/g, '');
                
                setCityLocal(updatedValue);
        }
        
        const handleBlur = () => {//after clicking to search 
         
            if(cityLocal!=''){//to find the city key
              try {
                      fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=	NGBkAiMlFGldtzYt2HLNQ9ew12Wr5qx6&q=${cityLocal}`).then((res)=>{return res.json()}).then((data)=>{
                      if (data) { 
                        let c=[];
                        if(props.favoritesArr.length>0){//if there are favorites
                          c=props.favoritesArr.filter((val)=>(val.id==data[0].Key));//to check if this city is fav 
                          if(c.length!=0)//in favs
                            props.setCity(c[0]);
                        }
                        if(props.favoritesArr.length==0||c.length==0){
                          let city={name:cityLocal,id:data[0].Key,fav:false,weather:{}};
                          props.setCity(city); 
                        }  
                          }});
                      }
              catch (error) {
                      console.error('Error fetching suggestions:', error);}
              }
              
              setCityLocal('');
         };
       
    return (
      <div id='search'>
         <input id='searchI'  list="citySuggestions" onChange={(e)=>{setCityLocal(e.target.value);check(e)}}  type='search' placeholder='search' value={cityLocal}   />
      
         {cityLocal.length > 2 && (
        <datalist id="citySuggestions" >
          {suggestions.map((suggestion) => (
            <option key={suggestion.key} value={suggestion.LocalizedName} />
          ))}
        </datalist>
      )}
      <button id='searchI' onClick={()=>{handleBlur()}}><FcSearch /></button>
      </div>
    );
  }

