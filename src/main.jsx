import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./css/style.css";
import "./css/style.css";
import myColorContext from './Context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<myColorContext >
    <App />
</myColorContext>

)
