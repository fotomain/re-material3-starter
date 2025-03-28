
// ==== INSTALL npm
// cd wp-content/plugins/wp-elementor-react1
// npm i material-components-web
// npm run build

import React, {useEffect, useState} from 'react';

// import {MDCRipple} from 'material-components-web/dist/material-components-web'
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';


const AppForm = (props) => {

    console.log("props", props);

    const onChangeForm = (params) => {
        console.log("params", params);
    }

    const [state, setState] = useState({
        isFocused: true
    })


    useEffect(() => {

        let el:any=document.querySelector('.username')
        if(null!==el) {
            const username = new MDCTextField(el);
        }
        el=document.querySelector('.password')
        if(null!==el) {
            const username = new MDCTextField(el);
        }
        el=document.querySelector('.pincode')
        if(null!==el) {
            const username = new MDCTextField(el);
        }

        let el2:any=null
        el2=document.querySelector('.cancel')
        if(null!==el) {
            new MDCRipple(el2);
        }
        el2=document.querySelector('.next')
        if(null!==el) {
            new MDCRipple(el2);
        }

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
            <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
                  rel="stylesheet"/>
            <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>

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
                       name="password" required minLength={8}/>
                <span className="mdc-floating-label" id="password-label">Password</span>
                <span className="mdc-line-ripple"></span>
            </label>


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
                    />
                </label>
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

        </div>
    );
}

export default AppForm;
