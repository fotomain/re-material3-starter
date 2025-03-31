
// ==== INSTALL npm
// cd wp-content/plugins/wp-elementor-react1
// npm i material-components-web
// npm run build

// import {MDCRipple} from 'material-components-web/dist/material-components-web'

import './index.css';

import React,{useEffect, useState} from "react";

//import {ThemeProvider} from '@material/theme';

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
        weeks:1,
        perWeek:2,
        price:15,
        totalSum:1*2*15,
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


        el=document.querySelector('.cancel')
        if(null!==el) {
            new MDCRipple(el);
        }
        el=document.querySelector('.next')
        if(null!==el) {
            new MDCRipple(el);
        }

    }, []);

    //DOC https://glitch.com/edit/#!/material-example-app-shrine?path=_variables.scss%3A1%3A0
    const colorSet:any = {}
    const colorSetText:any= `--md-sys-color-primary: rgb(73 57 113);
    --md-sys-color-surface-tint: rgb(101 85 143);
    --md-sys-color-on-primary: rgb(255 255 255);
    --md-sys-color-primary-container: rgb(123 107 167);
    --md-sys-color-on-primary-container: rgb(255 255 255);
    --md-sys-color-secondary: rgb(73 57 113);
    --md-sys-color-on-secondary: rgb(255 255 255);
    --md-sys-color-secondary-container: rgb(124 107 167);
    --md-sys-color-on-secondary-container: rgb(255 255 255);
    --md-sys-color-tertiary: rgb(107 47 69);
    --md-sys-color-on-tertiary: rgb(255 255 255);
    --md-sys-color-tertiary-container: rgb(165 95 119);
    --md-sys-color-on-tertiary-container: rgb(255 255 255);
    --md-sys-color-error: rgb(110 47 44);
    --md-sys-color-on-error: rgb(255 255 255);
    --md-sys-color-error-container: rgb(170 95 90);
    --md-sys-color-on-error-container: rgb(255 255 255);
    --md-sys-color-background: rgb(253 247 255);
    --md-sys-color-on-background: rgb(29 27 32);
    --md-sys-color-surface: rgb(253 247 255);
    --md-sys-color-on-surface: rgb(28 27 32);
    --md-sys-color-surface-variant: rgb(230 224 236);
    --md-sys-color-on-surface-variant: rgb(68 65 74);
    --md-sys-color-outline: rgb(97 94 103);
    --md-sys-color-outline-variant: rgb(125 121 131);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(50 47 53);
    --md-sys-color-inverse-on-surface: rgb(245 239 247);
    --md-sys-color-inverse-primary: rgb(207 189 254);
    --md-sys-color-primary-fixed: rgb(123 107 167);
    --md-sys-color-on-primary-fixed: rgb(255 255 255);
    --md-sys-color-primary-fixed-dim: rgb(98 83 140);
    --md-sys-color-on-primary-fixed-variant: rgb(255 255 255);
    --md-sys-color-secondary-fixed: rgb(124 107 167);
    --md-sys-color-on-secondary-fixed: rgb(255 255 255);
    --md-sys-color-secondary-fixed-dim: rgb(98 83 140);
    --md-sys-color-on-secondary-fixed-variant: rgb(255 255 255);
    --md-sys-color-tertiary-fixed: rgb(165 95 119);
    --md-sys-color-on-tertiary-fixed: rgb(255 255 255);
    --md-sys-color-tertiary-fixed-dim: rgb(137 71 94);
    --md-sys-color-on-tertiary-fixed-variant: rgb(255 255 255);
    --md-sys-color-surface-dim: rgb(222 216 224);
    --md-sys-color-surface-bright: rgb(253 247 255);
    --md-sys-color-surface-container-lowest: rgb(255 255 255);
    --md-sys-color-surface-container-low: rgb(247 242 250);
    --md-sys-color-surface-container: rgb(242 236 244);
    --md-sys-color-surface-container-high: rgb(236 230 238);
    --md-sys-color-surface-container-highest: rgb(230 225 233);`
    let colorSetArray = colorSetText.split(';');
    console.log("colorSetArray0",colorSetArray)
    for (let i = 0; i < colorSetArray.length; i++) {
        let el = colorSetArray[i]
        el = el.replace(/\n/g, '')
        el = el.split(": ")
        el[0] = el[0].replaceAll(" ", '')
        el[0] = el[0].replaceAll("--md-sys-color", '--mdc-theme')
        colorSetArray[i]= {[el[0]]: el[1]}
        colorSet[el[0]]=el[1]
    }
    console.log("colorSetArray1",colorSetArray)
    console.log("colorSet",colorSet)
    colorSet['--mdc-floating-label']='red'

    //works const colorButtonFontSize:any= {"--mdc-typography-button-font-size": "14px"}

    useEffect(() => {
            setState((prevState)=>{
                return {...prevState,
                    totalSum: prevState.weeks*prevState.perWeek,
                }
            })

    }, [state.weeks,state.perWeek]);

    let el=document.querySelector('.pincode')
    if(null!==el) {
        const pincode = new MDCTextField(el);
    }


    return (
        <div
            style={{
                ...colorSet,
                // ...colorButtonFontSize,
            }}
        >
        // https://react.dev/reference/react-dom/components/form
            <form
                name={'calculator'}
                style={{
                    backgroundColor: "var(--mdc-theme-background)",
                    gap: "32px",
                    marginTop: "42px",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onChange={(e: any) => {
                    console.log("form1", e.target.value);
                    console.log("form1", e);

                }}
            >

                <div style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
                    <label className="mdc-text-field mdc-text-field--outlined pincode">
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch" style={{borderLeft: "none", borderRight: "none"}}>
                  <span className="mdc-floating-label" id="my-label-id">Pincode</span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
                        <input type="text" className="mdc-text-field__input"
                               aria-labelledby="my-label-id"
                               aria-controls="my-helper-id"
                               aria-describedby="my-helper-id"
                               value={10}
                        />
                    </label>
                </div>

                    <label className="mdc-text-field mdc-text-field--outlined username">
                        <span className="mdc-text-field__ripple"></span>
                        <input type="text" className="mdc-text-field__input" aria-labelledby="username-label"
                               name="username"
                               required
                               value={"111"}
                               defaultValue={"111"}
                        />
                        <span className="mdc-floating-label" id="username-label">Username</span>
                        <span className="mdc-line-ripple"></span>
                    </label>

                    <label className="mdc-text-field mdc-text-field--outlined phone">
                        <span className="mdc-text-field__ripple"></span>
                        <input type="text" className="mdc-text-field__input" aria-labelledby="username-label"
                               name="username"
                               required
                            // style={{backgroundColor:'var(--md-sys-color-primary)'}}
                        />
                        <span className="mdc-floating-label" id="username-label">Phone number</span>
                        <span className="mdc-line-ripple"></span>
                    </label>


                    <div style={{maxWidth: '300px', display: "flex", flexDirection: "row", alignItems: "center"}}>

                        <InputOutlinedM3 labelText="weeks"
                                         name="weeks"
                                         type={"number"}
                                         style={{textAlign: "center", "-webkit-appearance": "none"}}
                                         defaultValue={state.weeks}
                                         value={state.weeks}
                                         step={1}
                                         onChange={(e: any) => {
                                             setState((prevState) => {
                                                 return {
                                                     ...prevState,
                                                     weeks: e.target.value,
                                                 }
                                             })
                                         }}
                                         autofocus={true}
                        />
                        <div>X</div>

                        <InputOutlinedM3 labelText="per 1"
                                         name="perWeek"
                                         type={"number"}
                                         style={{textAlign: "center", "-webkit-appearance": "none"}}
                                         value={state.perWeek}
                                         step={1}
                                         onChange={(e: any) => {
                                             setState((prevState) => {
                                                 return {
                                                     ...prevState,
                                                     perWeek: e.target.value,
                                                 }
                                             })
                                         }}

                        />

                        <div>=</div>

                        <InputOutlinedM3 labelText="Total"
                                         name="totalCalculated"
                                         type={"number"}
                                         style={{
                                             textAlign: "center",
                                             "-webkit-inner-spin-button": "appearance-none",
                                             MozAppearance: "textfield",
                                         }}
                                         disabled
                                         value={state.totalSum}
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
        </div>
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
        CalculateMassagesForm: any;
    }

}

if (typeof window !== 'undefined') {
    window.CalculateMassagesForm = RunDivPlugin;
}

