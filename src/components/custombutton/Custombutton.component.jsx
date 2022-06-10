import React from "react";
import './custombutton.style.css'
const CustomButton = ({children,invert, google,...otherprops}) =>{
    return(
        <button className={ `${invert ? "invert" : ""} ${google ? "google" : ""} custom-button`} {...otherprops}> {children} </button>
    )
}


export default CustomButton;