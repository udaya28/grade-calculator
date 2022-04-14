import { Grid, Input, MenuItem, Select, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
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

function SubjectDetails() {
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
                    p: '16px',
                },
                '& div, li': {
                    textAlign: 'center',
                },
                my: { xs: '10px', sm: 0, md: 0, lg: 0, xl: 0 },
                border: {
                    xs: '1px solid #e0e0e0',
                    sm: '0px solid #e0e0e0',
                    md: '0px solid #e0e0e0',
                    lg: '0px solid #e0e0e0',
                    xl: '0px solid #e0e0e0',
                },
                borderRadius: '5px',
            }}
        >
            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    borderBottom: {
                        xs: '1px solid #e0e0e0',
                        sm: '1px solid #e0e0e0',
                        md: '1px solid #e0e0e0',
                        lg: '1px solid #e0e0e0',
                        xl: '1px solid #e0e0e0',
                    },
                    borderRight: {
                        xs: '0px solid #e0e0e0',
                        sm: '1px solid #e0e0e0',
                        md: '1px solid #e0e0e0',
                        lg: '1px solid #e0e0e0',
                        xl: '1px solid #e0e0e0',
                    },
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
                        xs: '0px solid #e0e0e0',
                        sm: '1px solid #e0e0e0',
                        md: '1px solid #e0e0e0',
                        lg: '1px solid #e0e0e0',
                        xl: '1px solid #e0e0e0',
                    },
                    borderRight: '1px solid #e0e0e0',
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
                        xs: '0px solid #e0e0e0',
                        sm: '1px solid #e0e0e0',
                        md: '1px solid #e0e0e0',
                        lg: '1px solid #e0e0e0',
                        xl: '1px solid #e0e0e0',
                    },
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

export default SubjectDetails
