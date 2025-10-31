import './Microphone.css'
import { microphonesvg } from './microphonesvg'
import{useState} from 'react'


export const Microphone = () => {

  const [active, setActive] = useState(false) 
   const handleClick = () => {
    setActive(!active)
   }
  return (
    <button className={`round-btn ${active ? 'active' : ''}`} onClick={handleClick}>
  
      {microphonesvg()}
    </button>
  )
}
