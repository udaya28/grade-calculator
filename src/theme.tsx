import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    // status: {
    //     danger: '#e53e3e',
    // },
    palette: {
        primary: {
            main: '#2DD4BF',
            dark: '#053e85',
            light: '#2DD4BF',
        },
        secondary: {
            main: '#FFF',
            dark: '#FFF',
            light: '#FFF',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            // dark: '#053e85',
            // light: '#2DD4BF'
        },
        // neutral: {
        //     main: '#64748B',
        //     contrastText: '#fff',
        // },
    },
})

export default theme
