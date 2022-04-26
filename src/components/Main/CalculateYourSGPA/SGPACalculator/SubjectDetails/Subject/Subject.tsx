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
        opacity: 0.7,
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
    },
    borderStyle: 'solid',
    borderColor: 'secondary.main',
    borderRadius: '5px',
}

interface Props {
    subjectDetails: {
        subject: string
        credit: number
    }
}

function Subject({ subjectDetails }: Props) {
    const [subject, setSubject] = useState(subjectDetails.subject)
    const [credit, setCredit] = useState(subjectDetails.credit)
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
