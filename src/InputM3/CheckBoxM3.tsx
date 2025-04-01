import React from "react";

const CheckBoxM3 = (props:any) => {

    const {state,setState} = props;

    return <div className="mdc-form-field"
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
                       setState((prevState:any) => {
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
                   userSelect: "none",
               }}
               onClick={(e) => {
                   e.stopPropagation()
                   console.log("555")
               }}
        >
            I am agree to sevice terms
        </label>
    </div>

}

export default CheckBoxM3
