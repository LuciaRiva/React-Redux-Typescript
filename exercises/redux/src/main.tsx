import React from "react";
import App from './App';
import './index.css';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from './store/store';

ReactDOM.render(
    <React.StrictMode>

        /*Proveedor de nuestra fuente de la verdad */
        <Provider store={store}>
             <App />
        </Provider>
        
    </React.StrictMode>,
    document.getElementById('root')
);
