import React, { useEffect } from 'react'
import axios from 'axios'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import './App.styles.css'
import Main from './components/Main/Main'

function App() {
    useEffect(() => {
        console.log('useEffect')
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
    }, [])

    return (
        <div className="app min-h-screen">
            <Header />
            <div className="mx-4 md:mx-8 lg:mx-12 my-5">
                <Main />
            </div>
        </div>
    )
}

export default App
