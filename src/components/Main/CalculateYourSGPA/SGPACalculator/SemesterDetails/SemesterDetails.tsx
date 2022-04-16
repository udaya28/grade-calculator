import { Box, Button, Grid, IconButton } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { SxProps, Theme } from '@mui/system'
import SubjectDetails from '../SubjectDetails/SubjectDetails'

interface Props {
    semesterNumber: number
}

const boxStyles: SxProps<Theme> = {
    '& > div > div> div:last-child > div': {
        borderBottom: {
            xs: '0px',
        },
        borderBottomColor: { xs: 'secondary.main' },
        borderBottomStyle: { xs: 'solid' },
    },
    '&  > div > div> div:last-child > div:first-child': {
        borderBottomWidth: {
            xs: '1px',
            sm: '0px',
            md: '0px',
            lg: '0px',
            xl: '0px',
        },
        borderBottomStyle: 'solid',
        borderBottomColor: 'secondary.main',
    },
    '& > div > div': {
        borderColor: 'secondary.main',
    },
    '& > div': {
        borderColor: 'secondary.main',
    },
}

function SemesterDetails({ semesterNumber }: Props) {
    return (
        <Grid item xs={12}>
            <Accordion square elevation={0} sx={{ backgroundColor: 'inherit' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{`Semester ${semesterNumber}`}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '8px' }}>
                    <Box sx={boxStyles}>
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
