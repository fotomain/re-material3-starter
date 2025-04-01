import React, {useEffect, useRef, useState} from "react";

// @ts-ignore
import drawerImage from "../image1.jpg";
import {colorSet} from "../lib/InitMaterial3";
import CardContentSpecify from "./CardContentSpecify";
import CheckBoxM3 from "../InputM3/CheckBoxM3";
import InputStandardt from "../InputM3/InputStandardt";
import InputOutlinedM3 from "../InputM3/InputOutlinedM3";


const CardM3 = (props:any) => {

    const [state, setState] = useState({
        weeks:1,
        perWeek:2,
        price:15,
        totalSum:1*2*15,
        checkedAgree:true,
    })


    const refTotal:any = useRef(null)

    useEffect(() => {
        setState((prevState)=>{
            return {...prevState,
                totalSum: prevState.weeks*prevState.perWeek*prevState.price,
            }
        })

    }, [state.weeks,state.perWeek]);

    return <form
        style={{
            ...colorSet,
            // ...colorButtonFontSize,
            backgroundColor:"white",
        }}
    >

        <div className="mdc-card mdc-card--outlined mdc-card__media--16-9"
             style={{
                 minWidth: '300px',
                 display: "flex", flexDirection: "column", alignItems: "center",
                 borderTopLeftRadius: "16px",
                 borderTopRightRadius: "16px",
             }}
             onClick={() => {
                 // window.alert("Card1")
             }}
        >

            <div className="mdc-card__media mdc-card__media--16-9"
                 style={{
                     position:"relative",
                     borderTopLeftRadius: "16px",
                     borderTopRightRadius: "16px",
                     backgroundImage: `url(${drawerImage})`,
                     width: '100%',
                     height: 'auto',
                 }}
                 onClick={() => {
                     window.alert("Image1")
                 }}
            >
                <div
                    style={{
                        top:0,
                        position:"absolute",
                        paddingLeft: "8px", paddingRight: "8px"
                    }}
                >
                    <CardContentSpecify/>
                </div>

            </div>

            <div
                style={{paddingLeft:"4px",paddingRight:"4px",marginTop: "12px", gap: "12px", display: "flex", flexDirection: "column", alignItems: "start"}}
            >
                <InputStandardt label={"Username"}/>

                <InputStandardt label={"Phone number"}/>

                <div style={{
                    marginTop: "12px",
                    width: "100%",
                    display: "flex", flexDirection: "row", alignItems: "center"
                }}>

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

                <CheckBoxM3 state={state} setState={setState}/>

            </div>

        </div>
        {/*checkbox*/}


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
                        display: "flex",
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
    </form>

}

export default CardM3

declare global {

    interface Window {
        CalculateMassagesForm: any;
    }

}

if (typeof window !== 'undefined') {
    window.CalculateMassagesForm = CardM3;
}
