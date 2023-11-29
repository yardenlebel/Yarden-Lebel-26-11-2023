import React,{useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Title from './components/Title';
import Favorites from './components/Favorites';
import Geolocation from './components/Geolocation';

//css
import './App.css'
import './components/styles/header.css'
import './components/styles/middleSection.css'
import './components/styles/favorites.css'
import './components/styles/weekly.css'

function App() {
  const [favoritesArr, setFavoritesArr] = useState([]);
  const [FavIsOn, setFavIsOn] = useState(true);//for nevigation to favorites. true=home
  const [city, setCity] = useState('');
  const [tempFormat, setTempFormat] = useState(true);//true=c
  const [theme, setTheme] = useState('light');
  const[startGeo,setStartGeo]= useState(true);    

  const addToFav=(city)=>{
    city.fav=true;
    setFavoritesArr([...favoritesArr,city])
  }
  const DeleteFromFav=(city)=>{
    city.fav=false;
    let favs=favoritesArr.filter((val)=>(val.id!=city.id));
    setFavoritesArr(favs)
  }
  const setFirstCity=()=>{
    // if(city==''){
    //   setStartGeo(false);
   return 

    } 
  
  return (    
    <div className={`App app ${theme === 'dark' ? 'app-dark' : ''}`} >
      {/* {setFirstCity()} */}

      <BrowserRouter>
      <Geolocation city={city} setCity={setCity} setStartGeo={setStartGeo} startGeo={startGeo}/>
      <Header  theme={theme} setTheme={setTheme} setFavIsOn={setFavIsOn} FavIsOn={FavIsOn} setTempFormat={setTempFormat} tempFormat={tempFormat}/>
      {/* <Title FavIsOn={FavIsOn}/> */}
        <Routes>
          <Route path='/' element={<HomePage startGeo={startGeo} tempFormat={tempFormat} setCity={setCity} city={city} addToFav={addToFav} DeleteFromFav={DeleteFromFav} favoritesArr={favoritesArr}/>}/>
          <Route path='/favorites' element={<Favorites theme={theme} tempFormat={tempFormat} setFavIsOn={setFavIsOn} setCity={setCity} city={city} addToFav={addToFav} favoritesArr={favoritesArr} DeleteFromFav={DeleteFromFav}/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

class City{
  weather;
   constructor(name,key){
     this.key=key;
     this.name=name;
   }
 }
 class Weather{
   constructor(temp,type,iconSrc){
     this.temp=temp;
     this.type=type;
     this.iconSrc=iconSrc;
   }
 }