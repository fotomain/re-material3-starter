import React, {useEffect, useState} from "react";
import {MDCTextField} from "@material/textfield";
import uuid4_custom from "./lib/uuid4_custom";

import '../src/lib/css1/light.css'

const InputOutlinedM3 = (props:any) => {

    const {type, labelText, classGUID,...other} = props;

    let classText=''
    if(!classGUID) {
        classText = "c"+uuid4_custom();
    }else {
        classText = classGUID;
    }

    let inputTypeText=''
    if(type) {
        inputTypeText = type
    }else {
        inputTypeText = "text";
    }

    // console.log("inputTypeText1",inputTypeText)

    const [state, setState] = useState({
        value:props.value,
        labelText:props.labelText,
    });

    useEffect(() => {

        const el=document.querySelector("."+classText)
        if(null!==el) {
            const username = new MDCTextField(el);
        }

    }, []);

    useEffect(() => {
        setState((prevState:any)=>{return({ ...prevState,
            value:props.value,
            labelText:labelText,
        })})

        const el=document.querySelector("."+classText)
        if(null!==el) {
            const username = new MDCTextField(el);
        }

    }, [props.value,props.labelText]);

    console.log("state.labelText1",state.labelText)

  return (
      <label className={"mdc-text-field mdc-text-field--outlined " + classText + " "}>
                  <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch" style={{borderLeft: "none", borderRight: "none"}}>
                      <span className="mdc-floating-label" id="my-label-id"
                            style={{
                                paddingBottom: "4px",
                                color:'var(--mdc-theme-primary)'
                            }} // fix for WP display
                      >
                         {state.labelText}
                      </span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                  </span>

          <input type={inputTypeText}
                 className="mdc-text-field__input"
                 aria-labelledby="my-label-id"
                 {...other}
                  value={state.value}
          />

      </label>

  )
}

export default InputOutlinedM3
