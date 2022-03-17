import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import Button from '@mui/material/Button'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import theme from './theme'

function App() {
    useEffect(() => {
        console.log('useEffect')
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
    }, [])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                {/* <AppBar position="static"/>
             */}
                <Header />
                <Button variant="outlined">Hello World</Button>
            </ThemeProvider>
        </div>
    )
}

export default App
