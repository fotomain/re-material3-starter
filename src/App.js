import React, {useEffect, useState} from 'react';

// import {MDCRipple} from 'material-components-web/dist/material-components-web'
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';


const App = (props) => {

    console.log("props", props);

    const onChangeForm = (params) => {
        console.log("params", params);
    }

    const [state, setState] = useState({
        isFocused: true
    })


    useEffect(() => {

        const username = new MDCTextField(document.querySelector('.username'));
        const password = new MDCTextField(document.querySelector('.password'));
        const pincode = new MDCTextField(document.querySelector('.pincode'));

        new MDCRipple(document.querySelector('.cancel'));
        new MDCRipple(document.querySelector('.next'));

    }, []);

    return (
        <div style={{
            gap: "32px",
            marginTop: "42px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center"
        }}>

            <label className="mdc-text-field mdc-text-field--outlined username">
                <span className="mdc-text-field__ripple"></span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="username-label" name="username"
                       required/>
                <span className="mdc-floating-label" id="username-label">Username</span>
                <span className="mdc-line-ripple"></span>
            </label>

            <label className="mdc-text-field mdc-text-field--filled password">
                <span className="mdc-text-field__ripple"></span>
                <input type="password" className="mdc-text-field__input" aria-labelledby="password-label"
                       name="password" required minLength="8"/>
                <span className="mdc-floating-label" id="password-label">Password</span>
                <span className="mdc-line-ripple"></span>
            </label>


            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
            <label className="mdc-text-field mdc-text-field--outlined pincode">
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch" style={{borderLeft:"none", borderRight:"none"}}>
                  <span className="mdc-floating-label" id="my-label-id">Pincode</span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
                <input type="text" className="mdc-text-field__input"
                       aria-labelledby="my-label-id"
                       aria-controls="my-helper-id"
                       aria-describedby="my-helper-id"
                />
            </label>
            </div>


            {/*<label*/}
            {/*    className="pincode mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">*/}
            {/*      <span className="mdc-notched-outline">*/}
            {/*        <span className="mdc-notched-outline__leading"></span>*/}
            {/*        <span className="mdc-notched-outline__trailing"></span>*/}
            {/*      </span>*/}
            {/*                    <span className="mdc-text-field__resizer">*/}
            {/*        <textarea className="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>*/}
            {/*      </span>*/}
            {/*</label>*/}

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

            {/*<label className="password mdc-text-field mdc-text-field--outlined">*/}
            {/*    <span className="mdc-notched-outline">*/}
            {/*      <span className="mdc-notched-outline__leading"></span>*/}
            {/*      <span className="mdc-notched-outline__notch">*/}
            {/*        <span className="mdc-floating-label" id="my-label-id">Your Name</span>*/}
            {/*      </span>*/}
            {/*      <span className="mdc-notched-outline__trailing"></span>*/}
            {/*    </span>*/}
            {/*    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id"/>*/}
            {/*</label>*/}
        </div>
    );
}

export default App;
