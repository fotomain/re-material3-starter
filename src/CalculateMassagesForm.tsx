
// ==== INSTALL npm
// cd wp-content/plugins/wp-elementor-react1
// npm i material-components-web
// npm run build

// import {MDCRipple} from 'material-components-web/dist/material-components-web'

import './index.css';
// @ts-ignore
import drawerImage from "./image1.jpg";

import React, {useEffect, useRef, useState} from "react";

//import {ThemeProvider} from '@material/theme';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
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
        checkedAgree:true,
    })


    useEffect(() => {

        setTimeout(()=>{
            let el:any=document.querySelector('.username')
            if(null!==el) {
                const username = new MDCTextField(el);
            }
            el=document.querySelector('.phone')
            if(null!==el) {
                const username = new MDCTextField(el);
            }
            //!!! chrome => no label appear without timeout


            el=document.querySelector('.cancel')
            if(null!==el) {
                new MDCRipple(el);
            }
            el=document.querySelector('.next')
            if(null!==el) {
                new MDCRipple(el);
            }

            el = document.querySelector('.mdc-form-field')
            if(null!==el) {
                const formField = new MDCFormField(el);
            }

            el = document.querySelector('.mdc-checkbox')
            const checkbox = new MDCCheckbox(el);
            // formField.input = checkbox;
            // checkbox.initialize()
        },200)

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
    // console.log("colorSetArray0",colorSetArray)
    for (let i = 0; i < colorSetArray.length; i++) {
        let el = colorSetArray[i]
        el = el.replace(/\n/g, '')
        el = el.split(": ")
        el[0] = el[0].replaceAll(" ", '')
        el[0] = el[0].replaceAll("--md-sys-color", '--mdc-theme')
        colorSetArray[i]= {[el[0]]: el[1]}
        colorSet[el[0]]=el[1]
    }
    // console.log("colorSetArray1",colorSetArray)
    // console.log("colorSet",colorSet)

    //works const colorButtonFontSize:any= {"--mdc-typography-button-font-size": "14px"}

    useEffect(() => {
            setState((prevState)=>{
                return {...prevState,
                    totalSum: prevState.weeks*prevState.perWeek,
                }
            })

    }, [state.weeks,state.perWeek]);


    const refTotal:any = useRef(null)

    return (
        <div
            style={{
                ...colorSet,
                // ...colorButtonFontSize,
            }}
        >
         {/*https://react.dev/reference/react-dom/components/form*/}
            <form
                name={'calculator1'}
                style={{
                    backgroundColor: "var(--mdc-theme-background)",
                    marginTop: "42px",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onChange={(e: any) => {

                    console.log("form1", e.target.value);
                    console.log("form1", e);

                    localStorage.setItem("appDemo_"+e.target.name, JSON.stringify(e.target.value));

                }}
            >

                <div
                    className={"mdc-card mdc-card--outlined adopt-a-pup-card"}
                    style={{
                        borderTopLeftRadius:"16px",
                        borderTopRightRadius:"16px",
                    }}
                >

                <div className="mdc-card__media mdc-card__media--16-9"
                     style={{
                         borderTopLeftRadius:"16px",
                         borderTopRightRadius:"16px",
                         backgroundImage: `url(${drawerImage})` ,
                     }}
                >
                </div>
                    <div
                        style={{
                            flexDirection: "column", display: "flex",
                            // gap: "20px",
                            backgroundColor: "white", paddingLeft: "4px", paddingRight: "4px", paddingTop: "12px"
                        }}
                    >

                        <div className="mdc-card__media-content"
                             style={{paddingLeft: "8px", paddingRight: "8px"}}
                        >
                            <div style={{fontWeight: "lighter"}} className="mdc-typography--headline4">
                                You can specify Variant!
                            </div>
                            <div className="mdc-typography--headline6">spin up to 4 gap:</div>
                            <div className="mdc-typography--headline6">spin up to 5 per week</div>
                        </div>

                        <div style={{gap: "20px", flexDirection: "column", display: "flex"}}>

                            <label className="mdc-text-field mdc-text-field--outlined username">
                                <span className="mdc-text-field__ripple"></span>
                                <input type="text" className="mdc-text-field__input" aria-labelledby="username-label"
                                       name="username"
                                       required
                                    // value={"111"}
                                       onChange={(e: any) => {
                                       }}
                                />

                                <span className="mdc-floating-label" id="username-label"
                                      style={{color: 'var(--mdc-theme-primary)'}}
                                >
                       Username
                    </span>

                                <span className="mdc-line-ripple"></span>
                            </label>

                            <label className="mdc-text-field mdc-text-field--outlined phone">
                                <span className="mdc-text-field__ripple"></span>
                                <input type="text" className="mdc-text-field__input" aria-labelledby="username-label"
                                       name="phone"
                                       required
                                    // style={{backgroundColor:'var(--md-sys-color-primary)'}}
                                       onChange={(e: any) => {
                                       }}
                                />
                                <span className="mdc-floating-label" id="username-label"
                                      style={{color: 'var(--mdc-theme-primary)'}}
                                >
                        Phone number
                    </span>
                                <span className="mdc-line-ripple"></span>
                            </label>

                        </div>

                        <div style={{
                            marginTop:"30px",
                            maxWidth: '300px', display: "flex", flexDirection: "row", alignItems: "center"}}>

                            <InputOutlinedM3 labelText="weeks"
                                             min="1" max="4"
                                             name="weeks"
                                             type={"number"}
                                             style={{minWidth: "65px", textAlign: "center", WebkitAppearance: "none"}}
                                             value={state.weeks}
                                             step={1}
                                             onChange={(e: any) => {
                                                 let newValue = e.target.value
                                                 if (newValue < 0) newValue = 1
                                                 if (newValue > 4) newValue = 4
                                                 setState((prevState) => {
                                                     return {
                                                         ...prevState,
                                                         weeks: newValue,
                                                     }
                                                 })
                                             }}
                                             autoFocus={true}
                            />


                            <button className="mdc-icon-button material-icons"
                                    style={{fontSize: "18px", padding: "4px"}}
                            >
                                {/*<div className="mdc-icon-button__ripple"></div>*/}
                                close
                            </button>


                            <InputOutlinedM3 labelText="per 1"
                                             min="1" max="5"
                                             name="perWeek"
                                             type={"number"}
                                             style={{minWidth: "55px", textAlign: "center", WebkitAppearance: "none"}}
                                             value={state.perWeek}
                                             step={1}
                                             onChange={(e: any) => {

                                                 let newValue = e.target.value
                                                 if (newValue < 0) newValue = 1
                                                 if (newValue > 5) newValue = 5

                                                 setState((prevState) => {
                                                     return {
                                                         ...prevState,
                                                         perWeek: newValue,
                                                     }
                                                 })
                                             }}

                            />

                            <div style={{padding: "8px"}}>=</div>

                            <InputOutlinedM3 labelText="Total"
                                             name="totalCalculated"
                                             type={"number"}
                                             style={{
                                                 textAlign: "center",
                                                 WebkitInnerSpinButton: "appearance-none",
                                                 MozAppearance: "textfield",
                                             }}

                                             value={state.totalSum}
                                             onChange={(e: any) => {
                                             }}
                                             refInput={refTotal}
                                             onFocus={(e: any) => {
                                                 if (null !== refTotal.current) {
                                                     setTimeout(() => refTotal.current?.blur(), 500)
                                                 }
                                             }}
                            />

                        </div>

                        <div className="mdc-card__actions">
                            <div className="mdc-card__action-buttons"
                                 style={{
                                     width: "100%",
                                     backgroundColor: "transparent",
                                     justifyContent: "space-between",
                                     flexDirection: "column",
                                     alignItems: "center"
                                 }}
                            >

                                <div
                                    style={{
                                        width: "100%",
                                        backgroundColor: "transparent",
                                        justifyContent: "space-between",
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <div className="mdc-checkbox">
                                        <input type="checkbox"
                                               className="mdc-checkbox__native-control"
                                               id="checkbox1"
                                               checked={state.checkedAgree}
                                               onChange={(e: any) => {
                                                   console.log("checkbox1", e.target.checked);
                                                   setState((prevState) => {
                                                       return {
                                                           ...prevState,
                                                           checkedAgree: e.target.checked,
                                                       }
                                                   })
                                               }}

                                        />
                                        <div className="mdc-checkbox__background">
                                            <svg className="mdc-checkbox__checkmark"
                                                 viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path"
                                                      fill="none"
                                                      d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                            </svg>
                                            <div className="mdc-checkbox__mixedmark"></div>
                                        </div>
                                    </div>

                                    <div
                                        // type="button"
                                        onClick={() => {
                                            console.log("333")
                                            setState((prevState) => {
                                                return {
                                                    ...prevState,
                                                    checkedAgree: !prevState.checkedAgree,
                                                }
                                            })
                                        }}

                                        className="mdc-button mdc-card__action mdc-card__action--button cancel"
                                        style={{
                                            fontSize: "12px",
                                            color: "var(--primary)",
                                        }}
                                    >
                                        I am agree to sevice terms
                                    </div>
                                </div>
                                {/*check*/}


                                <div
                                    style={{
                                        width: "100%",
                                        backgroundColor: "transparent",
                                        display:"flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                <button type="button"
                                        className="mdc-button mdc-card__action mdc-card__action--button cancel">
                                    <div className="mdc-button__ripple"></div>
                                    <span className="mdc-button__label">
                                  Back
                                </span>
                                </button>

                                <button
                                    disabled={!state.checkedAgree}
                                    className="mdc-button mdc-button--raised mdc-card__action mdc-card__action--button next">
                                    <div className="mdc-button__ripple"></div>
                                    <span className="mdc-button__label">
                                  Next
                                </span>
                                </button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/*card*/}

                <div className="button-container">


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

