import { Grid, MenuItem, Select, Theme, Typography, SxProps } from '@mui/material'
import React from 'react'

const creditBoxStyles: SxProps<Theme> = {
    borderBottomWidth: {
        xs: '0px',
        sm: '1px',
    },
    borderBottomColor: 'secondary.main',
    borderBottomStyle: 'solid',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'secondary.main', // browser BUG
}

interface Props {
    removeBorder: SxProps<Theme>
    credit: number
    setCredit: React.Dispatch<React.SetStateAction<number>>
}

function CreditBox({ removeBorder, credit, setCredit }: Props) {
    const creditsArr = [
        { value: 0, name: 0 },
        { value: 1, name: 1 },
        { value: 2, name: 2 },
        { value: 3, name: 3 },
        { value: 4, name: 4 },
        { value: 5, name: 5 },
        { value: 6, name: 6 },
    ]
    return (
        <Grid item xs={6} sm={3} sx={creditBoxStyles}>
            <Select
                id="outlined-basic"
                variant="standard"
                fullWidth
                sx={removeBorder}
                size="small"
                displayEmpty
                value={credit}
                onChange={(e) => setCredit(+e.target.value)}
            >
                <MenuItem value="" disabled>
                    <Typography style={{ color: 'secondary.main', opacity: 0.8, fontWeight: 500 }}>Credits</Typography>
                </MenuItem>
                {creditsArr.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    )
}

export default CreditBox
