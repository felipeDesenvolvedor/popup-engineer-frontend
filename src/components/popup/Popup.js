import React from "react";
import Button from '@material-ui/core/Button';
import img from "../../img/bebe-inteligente.webp";
import './Popup.css';
import { TextField } from "@material-ui/core";

const Popup = (props) => {
    let closedPopup = {overlay:{visibility:'hidden', opacity:0}}

    return (
        <div className="popup-container" style={props.config}>
            <button  className="button-close" onClick={()=>{props.useStateConfigStyle(closedPopup)}} style={{position:'absolute', right:'20px', top:'20px'}}>X</button>
            <div className="contente-one">
                <h2>Titulo do Popup</h2>
                <h3>Subtitulo do popup</h3>
                <p>Teexto do popup</p>
                <img src={img} width={600} alt="imagem de exemplo do popup"/> 
            </div>
            <div className="contente-two">
                <form>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </div>
        </div>
    )
}

export default Popup