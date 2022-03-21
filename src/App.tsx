import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import Button from '@mui/material/Button'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import { darkTheme, lightTheme } from './theme/Themes'
import themeContext from './theme/ThemeHandler'

function App() {
    const theme = useContext(themeContext)

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        console.log(darkMode)
        axios.get(`${URL.BASE_URL_DEV}/.netlify/functions/hello`).then((data) => console.log(data))
        if (localStorage.getItem('preferred-theme') === 'dark') {
            setDarkMode(true)
        }
    }, [])

    // const handleThemeChange = () => {
    //     if (darkMode) {
    //         localStorage.setItem("preferred-theme", "light")
    //         setDarkMode(false)
    //     } else {
    //         localStorage.setItem("preferred-theme", "dark")
    //         setDarkMode(true)
    //     }
    // }

    return (
        <div className="App">
            <themeContext.Provider value={theme}>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    <Header />
                    <Button variant="outlined">Hello World</Button>
                </ThemeProvider>
            </themeContext.Provider>
        </div>
    )
}

export default App
