import React, { useEffect } from 'react'
import axios from 'axios'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import './App.styles.css'

function App() {
    useEffect(() => {
        console.log('useEffect')
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
    }, [])

    return (
        <div className="app h-screen">
            <Header />
            <main>hi</main>
        </div>
    )
}

export default App
