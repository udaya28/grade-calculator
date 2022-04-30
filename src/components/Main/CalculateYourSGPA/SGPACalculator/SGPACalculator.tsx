import React, { useState } from 'react'
import { Grid } from '@mui/material'
import SemesterDetails from './SemesterDetails/SemesterDetails'

interface Props {
    mainData: {
        college: string
        regulation: string
        department: string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        semesters: any
    }
}

function SGPACalculator({ mainData }: Props) {
    console.log(mainData)

    const [currentAccordion, setCurrentAccordion] = useState(0)

    const handleAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setCurrentAccordion(isExpanded ? panel : 0)
    }

    return (
        <Grid item xs={12}>
            <Grid
                container
                sx={{
                    p: { xs: '10px', sm: '20px', lg: '30px' },
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                    borderRadius: '5px',
                }}
            >
                {mainData.college !== 'None' &&
                    mainData.semesters &&
                    mainData.semesters &&
                    [1, 2, 3, 4, 5, 6, 7, 8].map((semesterNumber) => (
                        <SemesterDetails
                            key={semesterNumber}
                            semesterNumber={semesterNumber}
                            data={mainData.semesters?.[semesterNumber]}
                            currentAccordion={currentAccordion}
                            handleAccordionChange={handleAccordionChange}
                        />
                    ))}
                {mainData.college === 'None' && (
                    <SemesterDetails
                        semesterNumber={1}
                        key={1}
                        data={null}
                        currentAccordion={currentAccordion}
                        handleAccordionChange={handleAccordionChange}
                    />
                )}
            </Grid>
        </Grid>
    )
}

export default SGPACalculator
