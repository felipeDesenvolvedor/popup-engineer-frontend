import { useState } from 'react';
import Popup from './Popup.js';
import imgPath from '../../img/img-2.jfif';
import { AppConfigContext } from '../../contexts/index';

const Overlay = () => {

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
      height:'90%',
      color:'green',
      backgroundColor:'#fff',
      position:'absolute',
      left:'50%',
      top:'50%',
      transform:'translate(-50%, -50%)',
      layerOne: {
        height:'100%',
        width:'50%',
        backgroundImage:`url(${imgPath})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center bottom'
      },
      layerTwo:{
        width:'50%'
      }
    }
  }; 

  const [configStyle, setConfigStyle] = useState(config);


  return (
    <>
      {configStyle && 
      <AppConfigContext.Provider value={{configStyle, setConfigStyle}}>
        <div className="overlay" style={configStyle.overlay}>
          <Popup />
        </div>
      </AppConfigContext.Provider>
      }
    </>
  ); 
};

export default Overlay;