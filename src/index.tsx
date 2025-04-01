

import './index.css';

import {createRoot} from "react-dom/client";
import React from 'react';
import CalculateMassagesForm from "./CalculateMassagesForm";

import InitMaterial3 from "./lib/InitMaterial3";
import CardM3 from "./CardM3/CardM3";


// Find all widget divs
const widgetDivs = document.querySelectorAll('.wrap-widget1');

console.log("widgetDivs1",widgetDivs)

const container = document.getElementById('root');
if(container){
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    widgetDivs.forEach((div:any,ii:number) => {
        root.render(
            <React.StrictMode>
                <InitMaterial3/>
                <div
                    style={{ justifyContent:'center',display: "flex", flexDirection: "row", alignItems: "center"}}
                >
                    <CardM3 />
                </div>

                {/*<CalculateMassagesForm symbol={div.dataset.symbol}/>*/}
                {/*<UserPasswordPincodeForm symbol={div.dataset.symbol}/>*/}
                {/*()=>{return( <div key={ii}>{div}</div> )}*/}
            </React.StrictMode>

        )
    }
    )
}


// Inject our React UserPasswordPincodeForm into each class
// widgetDivs.forEach(div => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <UserPasswordPincodeForm symbol={div.dataset.symbol}/>
//       </React.StrictMode>,
//         div
//     );
// });
