import React,{useState,useEffect} from 'react'
import AutoCompleteInput from './AutoCompleteInput '
import CurrentWeather from './CurrentWeather';
import WeeklyW from './WeeklyW';
import Favorite from './Favorite';



export default function HomePage(props) {
  
  return (
    <div id='allBodyD' >
      <div id='firstMiddle'>
      <AutoCompleteInput city={props.city} setCity={props.setCity} favoritesArr={props.favoritesArr}/>
            <Favorite city={props.city}  setCity={props.setCity} favoritesArr={props.favoritesArr} addToFav={props.addToFav} DeleteFromFav={props.DeleteFromFav}/>
      </div>
           
    <div id='middleD' >
    <div><h1 id='titleCurrent'>Current Weather</h1></div>
            <CurrentWeather  city={props.city} setCity={props.setCity} tempFormat={props.tempFormat}/>
    </div>
    <div>
       
        <WeeklyW city={props.city} tempFormat={props.tempFormat}/>
    </div>
    </div>
  )
}
