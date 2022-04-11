import { Grid } from '@mui/material'
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
        <Grid item xs={12} sx={{ borderBottom: '1px solid rgba(24, 26, 27, 0.3)' }}>
            <Accordion square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{`Semester ${semesterNumber}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SubjectDetails />
                    <SubjectDetails />
                    <SubjectDetails />
                    <SubjectDetails />
                    <SubjectDetails />
                    <SubjectDetails />
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default SemesterDetails
