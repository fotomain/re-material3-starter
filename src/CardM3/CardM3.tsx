import React, {useState} from "react";

// @ts-ignore
import drawerImage from "../image1.jpg";
import {colorSet} from "../lib/InitMaterial3";
import CardContentSpecify from "./CardContentSpecify";
import CheckBoxM3 from "../InputM3/CheckBoxM3";
import InputStandardt from "../InputM3/InputStandardt";

const CardM3 = (props:any) => {

    const [state, setState] = useState({
        weeks:1,
        perWeek:2,
        price:15,
        totalSum:1*2*15,
        checkedAgree:true,
    })

    console.log("colorSet1",colorSet)

    return <form
        style={{
            ...colorSet,
            // ...colorButtonFontSize,
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
                style={{marginTop:"12px",gap:"12px",display:"flex", flexDirection:"column", alignItems:"start"}}
            >
                <InputStandardt label={"Username"}/>

                <InputStandardt label={"Phone number"}/>

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
