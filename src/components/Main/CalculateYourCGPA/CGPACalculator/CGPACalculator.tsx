import React from 'react'
import { Grid, SxProps } from '@mui/material'
import { Theme } from '@mui/system'
import CGPATableHead from './CGPATableHead/CGPATableHead'
import SGPADetails from './SGPADetails/SGPADetails'
import CGPATableBottom from './CGPATableBottom/CGPATableBottom'

const sxProps: SxProps<Theme> = {
    // border: '1px solid red',

    '& > div > div > div': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
    },

    '& > div > div:last-child > div': {
        borderWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'secondary.main',
    },

    '& > div > div > div:first-of-type': {
        borderWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'secondary.main',
    },
    '& > div:last-child > div > div': {
        borderWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'secondary.main',
    },

    '& > div:first-of-type > div > div:first-of-type': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopLeftRadius: '10px',
    },

    '& > div:first-of-type > div > div:last-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderTopRightRadius: '10px',
    },

    '& > div:last-child > div > div:first-of-type': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderBottomLeftRadius: '10px',
    },
    '& > div:last-child > div > div:last-child': {
        borderWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
        borderBottomRightRadius: '10px',
    },
}

const displayCGPA = (semesterDetails: Array<any>) => {
    const totalCredits = semesterDetails.reduce((acc, curr) => acc + +curr.totalCredits, 0)
    const totalGradePoints = semesterDetails.reduce((acc, curr) => acc + +curr.totalCredits * +curr.SGPA, 0)
    return totalCredits === 0 ? 0 : (totalGradePoints / totalCredits).toFixed(2)
}

interface SemesterDetails {
    semesterNumber: number
    totalCredits: number | string
    SGPA: number | string
}

interface Prop {
    setTotalCredits: any
    setSGPA: any
    semesterDetails: Array<SemesterDetails>
}

function CGPACalculator({ semesterDetails, setTotalCredits, setSGPA }: Prop) {
    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container sx={sxProps}>
                        <CGPATableHead />
                        {semesterDetails &&
                            semesterDetails?.map((semester) => (
                                <SGPADetails
                                    semesterData={semester}
                                    key={semester.semesterNumber}
                                    setTotalCredits={setTotalCredits}
                                    setSGPA={setSGPA}
                                />
                            ))}
                        <CGPATableBottom semesterDetails={semesterDetails} displayCGPA={displayCGPA} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CGPACalculator
