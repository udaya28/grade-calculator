import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { URL } from './constants/config'
import Header from './components/Header/Header.jsx'
// import test from './test.svg'

function App() {
    useEffect(() => {
        console.log('useEffect')
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
    }, [])

    return (
        <div>
            <Header />
            <header>
                <h1>Logo</h1>
            </header>
            <main>
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold underline fill-red-700">Hello world!</h1>
                </div>
            </main>
        </div>
    )
}

export default App
