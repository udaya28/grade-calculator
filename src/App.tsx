import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { Box, Typography } from '@mui/material'
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
        <themeContext.Provider value={theme}>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <Box sx={{ height: '100vh', backgroundColor: 'background.default' }}>
                    <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
                    <Typography variant="h3">Hello World</Typography>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. Neque dolor dolore voluptatibus
                        corpor is, iusto quod assumenda alias quos. Id nobis aspernatur quos delectus possimus exercita
                        tionem ipsa, molestiae omnis voluptas cumque! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque consectetur c umque consequatur vero corporis, repella t ratione iste vel qui
                        inventore unde por ro quibusdam maxime repudiandae perferendis veritatis reprehenderit?
                        Voluptatibus, rem.
                    </Typography>
                </Box>
            </ThemeProvider>
        </themeContext.Provider>
    )
}

export default App
