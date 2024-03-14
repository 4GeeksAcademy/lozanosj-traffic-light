import React, { useEffect, useState } from "react";


/* let color = "red"; */

const SelectedLight = () => {
// COLOR ROJO
    const [lightRed, setLightRed] = useState(false);

    const lightStateRed = () => {
        setLightRed(!lightRed)
    }

    const [lightYellow, setLightYellow] = useState(false);

    const lightStateYellow = () => {
        setLightYellow(!lightYellow)
    }

    const [lightGreen, setLightGreen] = useState(false);

    const lightStateGreen = () => {
        setLightGreen(!lightGreen)
    }


    return (
        <div className="container-fluid bg-black col-4" id="trafficLight">

            <div className={`circle col-4  ${lightRed ? "redSelected" : "red"}`} onClick={lightStateRed} id="light"> 
            </div>

            <div className={`circle col-4  ${lightYellow ? "yellowSelected" : "yellow"}`} onClick={lightStateYellow} id="light">    
            </div>

            <div className={`circle col-4  ${lightGreen ? "greenSelected" : "green"}`} onClick={lightStateGreen} id="light">    
            </div>

        </div>

    )
}

export default SelectedLight

/*  */

