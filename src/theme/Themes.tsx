import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
    },
    //   type: "light",
    palette: {
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: 'rgba(24, 26, 27, 0.6);',
        },
        background: {
            default: '#FFFFFF',
        },
    },
})
const darkTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
    },
    //   type: "dark",
    palette: {
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: 'rgba(24, 26, 27, 1)'
        },
    },
})

export { darkTheme, lightTheme }
