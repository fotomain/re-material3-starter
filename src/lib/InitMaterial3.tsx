import React from "react";
import {RunDivPlugin} from "../CalculateMassagesForm";

const InitMaterial3 = () => {
    return (
        <>

            <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/>

            {/*<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>*/}
            {/*<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>*/}
            {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>*/}

            {/*<link type="text/html" href="./css1/light.css" rel="stylesheet"/>*/}
        </>
    )
}

export default InitMaterial3;

declare global {
    interface Window {
        InitMaterial3:any;
    }
}

if (typeof window !== 'undefined') {
    window.InitMaterial3 = InitMaterial3;
}
