import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
        allVariants: {
            color: 'rgba(24, 26, 27, 0.8)',
        },
    },
    //   type: "light",
    palette: {
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: 'rgba(24, 26, 27, 0.8)',
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
        },
    },
})
const darkTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
        allVariants: {
            color: '#FFFFFF',
        },
    },
    // components:{
    //     MuiIn
    // },
    //   type: "dark",
    palette: {
        primary: {
            main: '#2DD4BF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: 'rgba(24, 26, 27, 1)',
            paper: 'rgba(35, 38, 39, 1)',
        },
    },
})

export { darkTheme, lightTheme }
