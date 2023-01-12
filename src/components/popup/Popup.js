import React, { useContext } from 'react';
import './Popup.css';
import { TextField } from '@material-ui/core';
import { AppConfigContext } from '../../contexts/index';

const Popup = () => {
  let overlay = {visibility:'hidden', opacity:0};
  const {configStyle, setConfigStyle} = useContext(AppConfigContext);
  let config = configStyle.popup;
  let layerOne = config.layerOne;
  let layerTwo = config.layerTwo;

  const handleOverlay = () => {
    setConfigStyle(prevProps => ({...prevProps, overlay}));
  };

  return (
    <div className="popup-container" style={config}>
      <button  className="button-close" onClick={handleOverlay} style={{position:'absolute', right:'20px', top:'20px'}}>X</button>
      <div className="contente-one" style={layerOne}>
           
        {/* <img src={img} style={imgStyle} alt="imagem de exemplo do popup"/>  */}
      </div>
      <div className="contente-two" style={layerTwo}>
        <h2>Titulo do Popup</h2>
        <h3>Subtitulo do popup</h3>
        <p>Teexto do popup</p>
        <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    </div>
  );
};

export default Popup;