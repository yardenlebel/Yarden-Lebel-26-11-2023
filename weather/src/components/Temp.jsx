import React,{useState,useEffect} from 'react'

export default function Temp({ label, toggled, onClick }) {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
        
    }
  return (
    <div>
        <label>
            <input id='toggleI' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
    </div>
  )
}
