import React, {useState} from "react";

// @ts-ignore
import drawerImage from "./image1.jpg";
import {colorSet} from "./lib/InitMaterial3";

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
                 window.alert("Card1")
             }}
        >

            <div className="mdc-card__media mdc-card__media--16-9"
                 style={{
                     borderTopLeftRadius: "16px",
                     borderTopRightRadius: "16px",
                     backgroundImage: `url(${drawerImage})`,
                     width: '100%',
                     height: 'auto',
                 }}
            >
            </div>

            <div className="mdc-form-field"
                // style={{backgroundColor:"red"}}
            >
                <div className="mdc-checkbox">
                    <input type="checkbox"
                           className="mdc-checkbox__native-control"
                           id="checkbox1"
                           checked={state.checkedAgree}
                           onClick={(e) => {
                               e.stopPropagation();
                           }}
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
                    <div className="mdc-checkbox__background"
                         style={{
                             // backgroundColor:"var(--mdc-theme-color-primary)"
                         }}
                    >
                        <svg className="mdc-checkbox__checkmark"
                             viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark-path"
                                  fill="none"
                                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label htmlFor="checkbox1"
                       style={{
                           verticalAlign: "text-top",
                           // backgroundColor:"white",
                           fontSize: "18px",
                       }}
                       onClick={(e) => {
                           e.stopPropagation()
                       }}
                >
                    I am agree to sevice terms
                </label>
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
