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
    '& > div:first-of-type > div > div > div:first-of-type': {
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopLeftRadius: {
            xs: '0px',
            sm: '10px',
        },
    },
    '& > div:last-child > div > div > div:first-of-type': {
        borderBottomLeftRadius: { xs: '0px', sm: '10px' },
    },

    // credit box
    '& > div:first-of-type > div > div > div:nth-of-type(2)': {
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },

    // grade box
    '& > div:last-child > div > div > div:last-child': {
        borderBottomRightRadius: '10px',
    },
    '& > div:first-of-type > div > div > div:last-child': {
        borderTopRightRadius: '10px',
        borderTopWidth: {
            xs: '0px',
            sm: '1px',
        },
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },
}

// function roundToTwo(num: number) {
//     return Math.round((num + Number.EPSILON) * 100) / 100
// }

function displayResult(subjects: Array<any>) {
    // console.log(subjects)
    let result = 0

    const totalCredit = subjects.reduce((acc, curr) => acc + curr.credit, 0)
    const totalGradePoints = subjects.reduce((acc, curr) => acc + (curr.grade ? curr.grade : 0) * curr.credit, 0)

    // console.log({ totalCredit, totalGradePoints })

    result = totalGradePoints / totalCredit
    // console.log('totalCredit', totalCredit)
    return result.toFixed(2)
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
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid item>
                            <Typography
                                sx={{ fontWeight: 'bold' }}
                            >{`Semester ${semesterNumber} \u00A0  - \u00A0`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                {`SGPA ${displayResult(data?.subject || []) || '0.00'}`}
                            </Typography>
                        </Grid>
                    </Grid>
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
