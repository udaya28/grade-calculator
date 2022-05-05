import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBMK5628PFsr5Gnq8BGvVCf3xxvp9gf6AQ',
    authDomain: 'gradecalculators.firebaseapp.com',
    projectId: 'gradecalculators',
    storageBucket: 'gradecalculators.appspot.com',
    messagingSenderId: '181352571009',
    appId: '1:181352571009:web:d3cf2d144b4507e0006d80',
    measurementId: 'G-BE71ZMCGML',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
