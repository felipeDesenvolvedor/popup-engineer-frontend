import { useEffect, useState } from "react"
import Popup from "./Popup.js"

let i = 0;
const Overlay = () => {

const [configStyle, setConfigStyle] = useState({})

useEffect(() => {
  const config = {
    overlay: {
        width:'100vw',
        height:'100vh',
        opacity:0.5,
        backgroundColor:'#000',
        position:'absolute',
        top:0
    },
    popup: {
        width:500,
        height:500,
        color:'green'
    }
  } 

  setConfigStyle(config)
  document.querySelector('h1').textContent = `State Alterado ${i++}`
}, [])
  
  return (
    <div className="overlay" style={configStyle.overlay}>
        <Popup config={configStyle.popup} useStateConfigStyle={setConfigStyle}/>
    </div>
  ) 
}

export default Overlay