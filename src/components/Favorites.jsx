import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Favorite from './Favorite';

export default function Favorites(props) {
  const nev=useNavigate();

  const renderCities=()=>{
      return props.favoritesArr.map((val) => {
        return <button  className={`fav fav ${props.theme === 'dark' ? 'app-dark' : ''}`} onClick={()=>{move(val)}} >
              {val.name}<br/>
              {setTemp(val.weather)}<br/>
              {val.weather.desc}
              <img className='favImg' src={val.weather.icon} alt='Weather Icon'/>
              </button>
    })
    
   }
   
   const setTemp=(weatherData)=>{
    if(props.tempFormat)
      return(`${weatherData.tempC}${'\u00b0'}${weatherData.unitC}`)
    else return(`${weatherData.tempF}${'\u00b0'}${weatherData.unitF}`)
    
  }
  const move=(city)=>{
    props.setCity(city);props.setFavIsOn(!props.FavIsOn);nev('/')
  }
     
  return (
    <div id='favoritesRender' >
      {renderCities()}
    </div>
  )
}
