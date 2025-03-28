import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import AppForm from './AppForm';
import {createRoot} from "react-dom/client";

// Setup Axios once here
axios.defaults.headers = { Accept: 'application/json' };
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
export default axiosInstance;

// Find all widget divs
const widgetDivs = document.querySelectorAll('.wrap-widget1');

console.log("widgetDivs1",widgetDivs)

const container = document.getElementById('root');
if(container){
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    widgetDivs.forEach((div,ii) => {
        root.render(
            <React.StrictMode>
                <AppForm symbol={div.dataset.symbol}/>
                {/*()=>{return( <div key={ii}>{div}</div> )}*/}
            </React.StrictMode>

        )
    }
    )
}


// Inject our React AppForm into each class
// widgetDivs.forEach(div => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <AppForm symbol={div.dataset.symbol}/>
//       </React.StrictMode>,
//         div
//     );
// });
