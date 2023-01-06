import { useEffect, useState } from "react"
import Popup from "./Popup.js"

const Overlay = () => {

const [configStyle, setConfigStyle] = useState({})

useEffect(() => {
  const config = {
    overlay: {
        width:'100vw',
        height:'100vh',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        position:'fixed',
        top:0
    },
    popup: {
        width:'80%',
        height:'80%',
        color:'green',
        backgroundColor:'#fff',
        position:'absolute',
        left:'50%',
        top:'50%',
        transform:'translate(-50%, -50%)'
    }
  } 

  setConfigStyle(config)
}, [])
  
  return (
    <>
      {configStyle && 
        <div className="overlay" style={configStyle.overlay}>
            <Popup config={configStyle.popup} useStateConfigStyle={setConfigStyle}/>
        </div>
      }
    </>
  ) 
}

export default Overlay