import React, { useState } from 'react'
import { Grid, SelectChangeEvent } from '@mui/material'
import { SxProps, Theme } from '@mui/system'
import SubjectBox from './SubjectBox/SubjectBox'
import CreditBox from './CreditBox/CreditBox'
import GradeBox from './GradeBox/GradeBox'

const removeBorder: SxProps<Theme> = {
    '&&&:before': {
        borderBottom: 'none',
    },
    '&&:after': {
        borderBottom: 'none',
    },
    height: '100%',
    color: 'secondary.main',
    '& div:focus': { backgroundColor: 'inherit' },
    '& .MuiSvgIcon-root': {
        color: 'secondary.main',
        opacity: 0.9,
    },
    '& > input::placeholder': {
        color: 'secondary.main',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.5,
        opacity: 0.7,
    },
}

const boxStyles: SxProps<Theme> = {
    '& > div': {
        padding: { xs: '8px 12px', sm: '10px 16px' },
    },
    '& div, li': {
        textAlign: 'center',
    },
    my: { xs: '10px', sm: 0, md: 0, lg: 0, xl: 0 },
    borderWidth: {
        xs: '1px',
        sm: '0px',
    },
    borderStyle: 'solid',
    borderColor: 'secondary.main',
    borderRadius: '10px',
}

interface Props {
    subjectDetails: {
        subject: string
        credit: number
        grade: number
    }
    semesterNumber: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: React.Dispatch<any>
}

function Subject({ subjectDetails, semesterNumber, dispatch }: Props) {
    const [subject, setSubject] = useState(subjectDetails.subject)
    const [credit, setCredit] = useState(subjectDetails.credit)
    const [grade, setGrade] = useState(subjectDetails.grade)

    const subjectProps = {
        removeBorder,
        subject,
        setSubject,
    }

    const creditProps = {
        removeBorder,
        credit,
        setCredit,
    }

    const handleGradeChange = (event: SelectChangeEvent<string>) => {
        console.log(event)
        dispatch({
            type: 'UPDATE_GRADE_DETAILS',
            payload: {
                grade: event.target.value,
                subjectName: subject,
                semesterNumber,
            },
        })
        setGrade(Number.parseInt(event.target.value, 10))
    }

    const gradeProps = {
        removeBorder,
        grade,
        handleGradeChange,
    }

    // const

    return (
        <Grid container sx={boxStyles}>
            <SubjectBox {...subjectProps} />
            <CreditBox {...creditProps} />
            <GradeBox {...gradeProps} />
        </Grid>
    )
}

export default Subject
