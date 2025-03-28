import React, {useState} from 'react';

import * as mdc from 'material-components-web/dist/material-components-web'
import {MDCTextField} from '@material/textfield';

mdc.autoInit();


const App = (props) => {

    console.log("props", props);

    const onChangeForm = (params) => {
        console.log("params", params);
    }

    const [state, setState] = useState({
        isFocused: true
    })


    var parentElement = document.getElementById('root');


    if (parentElement) {
        // const textField = new MDCTextField(parentElement.querySelector('.mdc-text-field'));
    }

    return (
        <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
            <h3>Wrapped {props.symbol}</h3>
            {/*<div>{JSON.stringify(mdc)}</div>*/}

            <form onChange={(e) => onChangeForm(e)}>

                <div>inputValue {JSON.stringify(state.inputValue)}</div>
                <div>isFocused {JSON.stringify(state.isFocused)}</div>


                <label
                    className="mdc-text-field mdc-text-field--outlined"
                >
                  <span
                      className={(!state.showLabelAbove)
                          ? "mdc-notched-outline mdc-notched-outline--upgraded"
                          : "mdc-notched-outline mdc-notched-outline--upgraded mdc-notched-outline--notched"
                      }
                  >
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                      <span
                          className={
                              (state.showLabelAbove)
                                  ? "mdc-floating-label mdc-floating-label--float-above"
                                  : "mdc-floating-label "
                          }
                          id="my-label-id">Your Name</span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                  </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id"

                           onChange={(e) => {
                               setState((prevState) => {
                                   return {
                                       ...prevState,
                                       inputValue: e.target.value,
                                   }
                               })
                           }
                           }

                           onFocus={() => {

                               setState((prevState) => {
                                   return {
                                       ...prevState,
                                       isFocused: false,
                                       showLabelAbove: true
                                   }
                               })

                           }}
                           onBlur={() => {

                               let tShowAbove = true
                               if (state.inputValue === "") {
                                   tShowAbove = false
                                   console.log("tShowAbove1", tShowAbove)
                               }

                               setState((prevState) => {
                                   return {
                                       ...prevState,
                                       isFocused: false,
                                       showLabelAbove: tShowAbove
                                   }
                               })


                           }}
                    />
                </label>

                <div className="group">
                    <button className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface"
                            data-mdc-auto-init="MDCRipple" type="button">
                        Submit
                    </button>

                </div>
            </form>
        </div>
    );
}

export default App;

//
// <label className="mdc-text-field mdc-text-field--filled">
//     <span className="mdc-text-field__ripple"></span>
//     <span className="mdc-floating-label" id="my-label-id">Hint text</span>
//     <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
//     <span className="mdc-line-ripple"></span>
// </label>
