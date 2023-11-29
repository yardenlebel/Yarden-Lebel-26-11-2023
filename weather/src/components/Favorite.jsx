import React,{useState,useEffect} from 'react'
import Heart from "react-animated-heart";

export default function Favorite(props) {
    const [isClick, setClick] = useState();//heart button

    useEffect(() => {
        if(props.city.fav)
            document.getElementById('favP').innerHTML='Delete from favorites'
        else 
            document.getElementById('favP').innerHTML='Add to favorites'
        return setClick(props.city.fav);
    }, [props.city.id]);

    const changeFav=()=>{
        
       
            if(!isClick){
                props.addToFav(props.city);
                document.getElementById('favP').innerHTML='Delete from favorites'
            }
                
            else {
                props.DeleteFromFav(props.city);
                document.getElementById('favP').innerHTML='Add to favorites'
            }
            setClick(!isClick);
       
    }

  return (
    <div id='favD' >
        <div id='favP'><p></p></div>
        <div id='favB'><Heart  isClick={isClick} onClick={()=>{changeFav()}} /></div>
    </div>
  )
}
