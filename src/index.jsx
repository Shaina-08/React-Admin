import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from './context/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmVCeUx0THxbf1xzZFdMYF9bR3NPMyBoS35RdUVlW3ZecnVUQmBVWE1x');

ReactDOM.render(
    <ContextProvider>

        <App />
    </ContextProvider>,
    document.getElementById('root'));