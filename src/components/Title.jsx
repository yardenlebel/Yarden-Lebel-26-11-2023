import React from 'react'

export default function Title(props) {
  const chooseTitle=()=>{
    if(props.FavIsOn)
      return  <h1>Welcome to weather forecast</h1>;
    else return <h1>Favorites</h1>
  }
  return (
    <div>
      {chooseTitle()}
       
    </div>
  )
}
