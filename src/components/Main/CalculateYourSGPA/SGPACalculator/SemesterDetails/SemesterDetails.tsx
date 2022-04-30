import { Box, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { SxProps, Theme } from '@mui/system'
import SubjectDetails from '../SubjectDetails/SubjectDetails'

const boxStyles: SxProps<Theme> = {
    // subject box
    '& > div:first-child > div > div > div:first-child': {
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopLeftRadius: {
            xs: '0px',
            sm: '5px',
        },
    },
    '& > div:last-child > div > div > div:first-child': {
        borderBottomLeftRadius: { xs: '0px', sm: '5px' },
    },

    // credit box
    '& > div:first-child > div > div > div:nth-child(2)': {
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },

    // grade box
    '& > div:last-child > div > div > div:last-child': {
        borderBottomRightRadius: '5px',
    },
    '& > div:first-child > div > div > div:last-child': {
        borderTopRightRadius: '5px',
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },
}

interface Props {
    semesterNumber: number
    currentAccordion: number
    handleAccordionChange: (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
    dispatch: React.Dispatch<any>
}

function SemesterDetails({ semesterNumber, data, currentAccordion, handleAccordionChange, dispatch }: Props) {
    return (
        <Grid item xs={12}>
            <Accordion
                square
                elevation={0}
                sx={{ backgroundColor: 'inherit' }}
                expanded={currentAccordion === semesterNumber}
                onChange={handleAccordionChange(semesterNumber)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{`Semester ${semesterNumber}`}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '8px' }}>
                    {currentAccordion === semesterNumber && (
                        <Box sx={boxStyles}>
                            {data &&
                                data.subject &&
                                data.subject.length &&
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                data.subject.map((subject: any) => (
                                    <SubjectDetails
                                        key={subject.subjectCode}
                                        subject={subject}
                                        semesterNumber={semesterNumber}
                                        dispatch={dispatch}
                                    />
                                ))}

                            {/* {data.map((subject: any) =><SubjectDetails key={subject.subjectCode}/>)} */}
                            {/* <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails />
                        <SubjectDetails /> */}
                        </Box>
                    )}
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default SemesterDetails
