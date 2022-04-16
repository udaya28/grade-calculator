import React, { useState } from 'react'
import { Grid } from '@mui/material'
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
        opacity: 0.8,
    },
}

const boxStyles: SxProps<Theme> = {
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
}

function Subject() {
    const [subject, setSubject] = useState('')
    const [credit, setCredit] = useState('')
    const [grade, setGrade] = useState('')

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

    const gradeProps = {
        removeBorder,
        grade,
        setGrade,
    }

    return (
        <Grid container sx={boxStyles}>
            <SubjectBox {...subjectProps} />
            <CreditBox {...creditProps} />
            <GradeBox {...gradeProps} />
        </Grid>
    )
}

export default Subject
