
import React from "react";

import {colorSetText0} from "./colorSetText0";

export const colorSet:any = {}
const colorSetText:any=colorSetText0;
let colorSetArray = colorSetText.split(';');
for (let i = 0; i < colorSetArray.length; i++) {
    let el = colorSetArray[i]
    el = el.replace(/\n/g, '')
    el = el.split(": ")
    el[0] = el[0].replaceAll(" ", '')
    el[0] = el[0].replaceAll("--md-sys-color", '--mdc-theme')
    colorSetArray[i]= {[el[0]]: el[1]}
    colorSet[el[0]]=el[1]
}

const InitMaterial3 = (props:any) => {


    return (
        <>

            <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/>

            {/*<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>*/}
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
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
