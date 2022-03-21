import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        //   type: "light",
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: '#E5E5E5',
        },
    },
})
const darkTheme = createTheme({
    //   type: "dark",
    palette: {
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: 'rgba(24, 26, 27, 0.6)',
        },
        background: {
            default: '#181A1B',
        },
    },
})

export { darkTheme, lightTheme }
