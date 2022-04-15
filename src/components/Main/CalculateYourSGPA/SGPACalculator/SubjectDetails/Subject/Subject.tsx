import { Grid, Input, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const removeBorder = {
    '&&&:before': {
        borderBottom: 'none',
    },
    '&&:after': {
        borderBottom: 'none',
    },
    height: '100%',
    // p: '16px',
    color: 'secondary.main',
    '& div:focus': { backgroundColor: 'inherit' },
    '& .MuiSvgIcon-root': {
        color: 'secondary.main',
        opacity: 0.9,
    },
}

function Subject() {
    const creditsArr = [
        { value: 1, name: 1 },
        { value: 2, name: 2 },
        { value: 3, name: 3 },
        { value: 4, name: 4 },
        { value: 5, name: 5 },
        { value: 6, name: 6 },
    ]
    const gradeArr = [
        { value: 10, name: 'O' },
        { value: 9, name: 'A+' },
        { value: 8, name: 'A' },
        { value: 7, name: 'B+' },
        { value: 6, name: 'B' },
        { value: 0, name: 'RA' },
    ]
    const [credit, setCredit] = useState('')
    const [grade, setGrade] = useState('')
    return (
        <Grid
            container
            sx={{
                '& > div': {
                    padding: '10px 16px',
                },
                '& div, li': {
                    textAlign: 'center',
                },
                my: { xs: '10px', sm: 0, md: 0, lg: 0, xl: 0 },
                borderWidth: {
                    xs: '1px',
                    sm: '0px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                },
                borderStyle: 'solid',
                borderColor: 'secondary.main',
                borderRadius: '5px',
            }}
        >
            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    borderBottomWidth: {
                        xs: '1px',
                        sm: '1px',
                        md: '1px',
                        lg: '1px',
                        xl: '1px',
                    },
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'secondary.main',
                    borderRightWidth: {
                        xs: '0px',
                        sm: '1px',
                        md: '1px',
                        lg: '1px',
                        xl: '1px',
                    },
                    borderRightStyle: 'solid',
                    borderRightColor: 'secondary.main',
                }}
            >
                <Input
                    id="outlined-basic"
                    fullWidth
                    size="small"
                    placeholder="Subject"
                    sx={[
                        removeBorder,
                        {
                            '& > input::placeholder': {
                                color: 'secondary.main',
                                fontWeight: 500,
                                fontSize: '1rem',
                                lineHeight: 1.5,
                                opacity: 0.8,
                            },
                        },
                    ]}
                />
            </Grid>
            <Grid
                item
                xs={6}
                sm={3}
                sx={{
                    borderBottom: {
                        xs: '0px',
                        sm: '1px',
                        md: '1px',
                        lg: '1px',
                        xl: '1px',
                    },
                    borderBottomColor: 'secondary.main',
                    borderBottomStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: 'secondary.main',
                }}
            >
                <Select
                    id="outlined-basic"
                    variant="standard"
                    fullWidth
                    sx={[removeBorder, {}]}
                    size="small"
                    displayEmpty
                    value={credit}
                    onChange={(e) => setCredit(e.target.value)}
                >
                    <MenuItem value="" disabled>
                        <Typography style={{ color: 'secondary.main', opacity: 0.8, fontWeight: 500 }}>
                            Credits
                        </Typography>
                    </MenuItem>
                    {creditsArr.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid
                item
                xs={6}
                sm={3}
                sx={{
                    borderBottom: {
                        xs: '0px',
                        sm: '1px',
                        md: '1px',
                        lg: '1px',
                        xl: '1px',
                    },
                    borderBottomColor: 'secondary.main',
                    borderBottomStyle: 'solid',
                    // borderRightWidth: '1px',
                    // borderRightStyle: 'solid',
                    // borderRightColor: 'secondary.main',

                    borderRightWidth: {
                        xs: '0px',
                        sm: '1px',
                        md: '1px',
                        lg: '1px',
                        xl: '1px',
                    },
                    borderRightStyle: 'solid',
                    borderRightColor: 'secondary.main',
                }}
            >
                <Select
                    id="outlined-basic"
                    variant="standard"
                    fullWidth
                    sx={removeBorder}
                    size="small"
                    displayEmpty
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                >
                    <MenuItem value="" disabled>
                        <Typography style={{ color: 'secondary.main', opacity: 0.8, fontWeight: 500 }}>
                            Grade
                        </Typography>
                    </MenuItem>
                    {gradeArr.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {`${item.name}`}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </Grid>
    )
}

export default Subject
