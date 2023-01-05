import React from "react"
import Button from '@material-ui/core/Button';

const Popup = (props) => {
    let closedPopup = {overlay:{visibility:'hidden', opacity:0}}
    return (
        <div className="popup-container" style={props.config}>
            <Button variant="contained" color="primary" onClick={()=>{props.useStateConfigStyle(closedPopup)}} style={{position:'absolute', right:'100px', top:'100px'}}>Fechar</Button>
            Popup !!!
            <form>
            </form>
        </div>
    )
}

export default Popup