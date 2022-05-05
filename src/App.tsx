import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { Box } from '@mui/material'
// import { setDoc, doc } from 'firebase/firestore'
import { URL } from './constants/config'
import Header from './components/Header/Header'
import { darkTheme, lightTheme } from './theme/Themes'
import themeContext from './theme/ThemeHandler'
import Main from './components/Main/Main'
import LoginDialog from './components/LoginDialog/LoginDialog'
// import { firestoreDB } from './firebaseSetup'

import AuthProvider from './provider/AuthProvider'

// const test = async () => {
//     console.log('test')
//     try {
//         const document = doc(firestoreDB, 'users', '1234')
//         await setDoc(document, { details: { name: 'udaya' } }, { merge: true })
//         console.log('Document written with ID: ')
//     } catch (e) {
//         console.error('Error adding document: ', e)
//     }

    // const querySnapshot = await getDocs(collection(firestoreDB, 'data'))
    // console.log('querySnapshot',querySnapshot)
    // querySnapshot.forEach((doc: any) => {
    //     console.log(`${doc.id} => ${doc.data()}`)
    // })
// }

function App() {
    const theme = useContext(themeContext)

    const [darkMode, setDarkMode] = useState(false)
    const [loginDialogOpen, setLoginDialogOpen] = useState(false)

    useEffect(() => {
        console.log(process.env.REACT_APP_ENV_NAME)
        console.log(darkMode)
        axios.get(`${URL.FULL_URL}/data`).then((data) => console.log(data))
        if (localStorage.getItem('preferred-theme') === 'dark') {
            setDarkMode(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // test()
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
            <AuthProvider>
                <themeContext.Provider value={theme}>
                    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                        <Box sx={{ pb: '50vh', backgroundColor: 'background.default' }}>
                            <Header
                                darkMode={darkMode}
                                handleThemeChange={handleThemeChange}
                                setLoginDialogOpen={setLoginDialogOpen}
                            />
                            <Box sx={{ pt: '80px' }} />
                            <Main />
                            <LoginDialog loginDialogOpen={loginDialogOpen} setLoginDialogOpen={setLoginDialogOpen} />
                        </Box>
                    </ThemeProvider>
                </themeContext.Provider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
