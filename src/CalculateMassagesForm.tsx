
// ==== INSTALL npm
// cd wp-content/plugins/wp-elementor-react1
// npm i material-components-web
// npm run build

// import {MDCRipple} from 'material-components-web/dist/material-components-web'

import React,{useEffect, useState} from "react";

import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {createRoot} from 'react-dom/client';
import InputOutlinedM3 from "./InputOutlinedM3";


const CalculateMassagesForm = (props:any) => {

    console.log("props", props);

    const onChangeForm = (params:any) => {
        console.log("params", params);
    }

    const [state, setState] = useState({
        isFocused: true
    })


    useEffect(() => {

        let el:any=document.querySelector('.username')
        if(null!==el) {
            const username = new MDCTextField(el);
        }
        el=document.querySelector('.phone')
        if(null!==el) {
            const username = new MDCTextField(el);
        }


        el=document.querySelector('.weeks')
        if(null!==el) {
            const username = new MDCTextField(el);
        }

        el=document.querySelector('.perWeek')
        if(null!==el) {
            const username = new MDCTextField(el);
        }

        el=document.querySelector('.totalCalculated')
        if(null!==el) {
            const username = new MDCTextField(el);
        }

        el=document.querySelector('.cancel')
        if(null!==el) {
            new MDCRipple(el);
        }
        el=document.querySelector('.next')
        if(null!==el) {
            new MDCRipple(el);
        }

    }, []);

    return (
        // https://react.dev/reference/react-dom/components/form
        <form
            name={'calculator'}
            style={{
            gap: "32px",
            marginTop: "42px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center"
            }}
            onChange={(e:any)=>
            {
                console.log("form1",e.target.value);
                console.log("form1",e);

            }}
        >

            <label className="mdc-text-field mdc-text-field--outlined username">
                <span className="mdc-text-field__ripple"></span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="username-label" name="username"
                       required/>
                <span className="mdc-floating-label" id="username-label">Username</span>
                <span className="mdc-line-ripple"></span>
            </label>

            <label className="mdc-text-field mdc-text-field--outlined phone">
                <span className="mdc-text-field__ripple"></span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="username-label" name="username"
                       required/>
                <span className="mdc-floating-label" id="username-label">Phone number</span>
                <span className="mdc-line-ripple"></span>
            </label>


            <div style={{maxWidth: '300px', display: "flex", flexDirection: "row", alignItems: "center"}}>

               <InputOutlinedM3 labelText="weeks"
                                name="weeks"
                                type={"number"}
               />
                <div>X</div>

                <InputOutlinedM3 labelText="per week"
                                 name="perWeek"
                                 type={"number"}
                />

                <div>=</div>

                <InputOutlinedM3 labelText="Total"
                                 name="totalCalculated"
                                 type={"number"}
                />

            </div>


            <div className="button-container">

                <button type="button" className="mdc-button cancel">
                <div className="mdc-button__ripple"></div>
                    <span className="mdc-button__label">
                  Cancel
                </span>
                </button>

                <button className="mdc-button mdc-button--raised next">
                    <div className="mdc-button__ripple"></div>
                    <span className="mdc-button__label">
                  Next
                </span>
                </button>

            </div>

        </form>
    );
}

export default CalculateMassagesForm;

export const RunDivPlugin = (props: any) => {

    const rootElement = document.getElementById("root2");
    if (rootElement) {
        createRoot(rootElement).render(
            <React.StrictMode>
                <div style={{backgroundColor: "blue"}}>RunDiv result!!!</div>
                <div style={{backgroundColor: "blue"}}>{JSON.stringify(props)}</div>
            </React.StrictMode>,
        );
    }

}

declare global {
    interface Window {
        CalculateMassagesForm:any;
    }
}

if (typeof window !== 'undefined') {
    window.CalculateMassagesForm = RunDivPlugin;
}

