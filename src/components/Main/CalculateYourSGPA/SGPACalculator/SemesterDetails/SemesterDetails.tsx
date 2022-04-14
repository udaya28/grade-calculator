import { Box, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import SubjectDetails from '../SubjectDetails/SubjectDetails'

interface Props {
    semesterNumber: number
}

function SemesterDetails({ semesterNumber }: Props) {
    return (
        <Grid item xs={12}>
            <Accordion square elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{`Semester ${semesterNumber}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            border: {
                                xs: '0px solid #e0e0e0',
                                sm: '1px solid #e0e0e0',
                                md: '1px solid #e0e0e0',
                                lg: '1px solid #e0e0e0',
                                xl: '1px solid #e0e0e0',
                            },
                            borderRadius: '5px',
                            '& > div:last-child > div': {
                                borderBottom: {
                                    xs: '0px solid #e0e0e0',
                                },
                            },
                        }}
                    >
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default SemesterDetails
