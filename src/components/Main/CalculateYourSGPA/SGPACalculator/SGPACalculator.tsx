import { Grid, Input, MenuItem, TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { border } from '@mui/system'

const removeBorder = {
    '&&&:before': {
        borderBottom: 'none',
    },
    '&&:after': {
        borderBottom: 'none',
    },
    height: '100%',
    py: '10px',
}

function SubjectDetails() {
    return (
        <Grid
            container
            sx={{
                '& > div': {
                    border: '1px solid #e0e0e0',
                    // borderWidth: '0px',
                    // borderStyle: 'solid',
                    // borderColor: 'rgba(24, 26, 27, 0.8)',
                    // borderRightWidth: '1px',
                    // // borderLeftWidth: '1px',
                    // borderTopWidth: 'none',
                    // borderBottomWidth: '1px',
                },
                // '& > div:first-child':{
                //     borderLeftWidth: '1px',
                // },
                // '& > div:first-column':{
                //     borderTopWidth: '1px',
                // },
                // '& input, div':{
                //     textAlign: 'center',
                // }
            }}
        >
            <Grid item xs={12} sm={6}>
                <Input id="outlined-basic" fullWidth sx={removeBorder} size="small" />
            </Grid>
            <Grid item xs={6} sm={3}>
                <TextField
                    select
                    id="outlined-basic"
                    variant="standard"
                    fullWidth
                    sx={{ height: '100%' }}
                    size="small"
                    InputProps={{
                        sx: removeBorder,
                    }}
                >
                    <MenuItem key={1} value={1}>
                        1
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                        2
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                        3
                    </MenuItem>
                    {/* {colleges.map((college) => (
                                    <MenuItem key={college.id} value={college.id}>
                                        {college.name}
                                    </MenuItem>
                                ))} */}
                </TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
                <TextField
                    select
                    id="outlined-basic"
                    size="small"
                    variant="standard"
                    fullWidth
                    sx={{ height: '100%' }}
                    InputProps={{
                        sx: removeBorder,
                    }}
                >
                    <MenuItem key={1} value={1}>
                        1
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                        2
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                        3
                    </MenuItem>
                    {/* {colleges.map((college) => (
                                    <MenuItem key={college.id} value={college.id}>
                                        {college.name}
                                    </MenuItem>
                                ))} */}
                </TextField>
            </Grid>
        </Grid>
    )
}

function SGPACalculator() {
    return (
        <Grid item xs={12}>
            <Grid
                container
                sx={{
                    p: { xs: '6px', sm: '10px', lg: '20px' },
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(24, 26, 27, 0.8)',
                    borderRadius: '5px',
                }}
            >
                <Grid item xs={12}>
                    <Accordion square elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Semester 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SubjectDetails />
                            <SubjectDetails />
                            <SubjectDetails />
                            <SubjectDetails />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SGPACalculator
