import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { Box } from '@mui/material'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import { darkTheme, lightTheme } from './theme/Themes'
import themeContext from './theme/ThemeHandler'
import Main from './components/Main/Main'

function App() {
    const theme = useContext(themeContext)

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        console.log(darkMode)
        axios.get(`${URL.FULL_URL}/data`).then((data) => console.log(data))
        if (localStorage.getItem('preferred-theme') === 'dark') {
            setDarkMode(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleThemeChange = () => {
        if (darkMode) {
            localStorage.setItem('preferred-theme', 'light')
            setDarkMode(false)
        } else {
            localStorage.setItem('preferred-theme', 'dark')
            setDarkMode(true)
        }
    }

    return (
        <BrowserRouter>
            <themeContext.Provider value={theme}>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    <Box sx={{ pb: '50vh', backgroundColor: 'background.default' }}>
                        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
                        <Box sx={{ pt: '80px' }} />
                        <Main />
                    </Box>
                </ThemeProvider>
            </themeContext.Provider>
        </BrowserRouter>
    )
}

export default App
