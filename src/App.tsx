import React, { useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import { URL } from './constants/config'
import Header from './components/Header/Header'

function App() {
    useEffect(() => {
        console.log('useEffect')
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
    }, [])

    return (
        <div className="App">
            {/* <AppBar position="static"/>
             */}
            <Header />
            <Button variant="outlined">Hello World</Button>
        </div>
    )
}

export default App
