import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Temp from './Temp';
import Theme from './Theme';
import Title from './Title';

export default function Header(props) {
  const nev=useNavigate();

//favoriteButton
  const toggleFavButton = () => {
    props.setFavIsOn(!props.FavIsOn);
    if(props.FavIsOn) //go to homepage
      nev('/favorites');
    else nev('/')

  };
  //tempretureFormatButton
  const changeTemp = state => {
    props.setTempFormat(!props.tempFormat)
  }
  //ThemeToggle
  const changeMode = state => {
    props.setTheme(props.theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div id='header'>
       <div id='goToFavB'><button className={`app ${props.theme === 'dark' ? 'app-dark' : ''}`} id='gotofavB' onClick={toggleFavButton}>{props.FavIsOn ? 'Go To Favorites' : 'Go To HomePage'}</button></div>
       <Title FavIsOn={props.FavIsOn}/>
       <div id='toggles'>
          <div id='TempDiv'>
              <label className='temp Lable'>temp format</label>
              <Temp lable='change temp metric' toggled={true} onClick={changeTemp}/>
          </div>  
          <div id='themeD'>
              <label className='temp Lable'>dark/light mode</label>
              <Theme lable='change dark/light mode' toggled={true} onClick={changeMode}/>
          </div>
       </div>
       
    </div>
  )
}
