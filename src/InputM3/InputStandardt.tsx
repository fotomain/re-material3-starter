import React, {useEffect} from "react";
import uuid4_custom from "../lib/uuid4_custom";
import {MDCTextField} from "@material/textfield";

const InputStandardt = (props:any) => {

    const {refInput,min,max,type, labelText, classGUID,...other} = props;

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

    useEffect(() => {
        const el1:any=document.querySelector("."+classText)

        if(null!==el1) {
            setTimeout(()=>{
                //!!! chrome => no label appear without timeout
                const username = new MDCTextField(el1);

            },200)
        }
    }, []);

    return <label className={"mdc-text-field mdc-text-field--outlined "+classText}
                  style={{width: "100%"}}
    >
          <span className="mdc-text-field__ripple"></span>
          <input type={inputTypeText} className="mdc-text-field__input" aria-labelledby="username-label"
                 name="username"
                 required

                 onFocus={(e)=>{
                     // TODO no click on form
                     e.preventDefault()
                     e.stopPropagation()
                 }}

                 onBlur={(e)=>{
                     e.preventDefault()
                     e.stopPropagation()
                 }}

                 onChange={(e: any) => {
                     e.preventDefault()
                     e.stopPropagation()
                 }}
          />

          <span className="mdc-floating-label" id="username-label"
                style={{color: 'var(--mdc-theme-primary)'}}
          >
             {props.label}
          </span>

          <span className="mdc-line-ripple"></span>
      </label>

}

export default InputStandardt;
