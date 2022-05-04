import React, { useState } from 'react'
import { Grid } from '@mui/material'
import SemesterDetails from './SemesterDetails/SemesterDetails'

interface Props {
    mainData: {
        college: string
        regulation: string
        department: string
        semesters: any
    }
    dispatch: React.Dispatch<any>
}

function SGPACalculator({ mainData, dispatch }: Props) {
    // console.log(mainData)

    const [currentAccordion, setCurrentAccordion] = useState(0)

    const handleAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setCurrentAccordion(isExpanded ? panel : 0)
    }

    return (
        <Grid item xs={12}>
            {mainData &&
                mainData?.college !== 'None' &&
                mainData?.regulation !== '' &&
                mainData?.department !== '' &&
                mainData?.semesters &&
                Object.keys(mainData?.semesters).length !== 0 && (
                    <Grid
                        container
                        sx={{
                            p: { xs: '10px', sm: '20px', lg: '30px' },
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'secondary.main',
                            borderRadius: '10px',
                        }}
                    >
                        {mainData &&
                            mainData?.semesters &&
                            Array.from(Array(Object.keys(mainData.semesters).length).keys()).map((semesterNumber) => (
                                <SemesterDetails
                                    // key={`${mainData.college}-${mainData.regulation}-${mainData.department}-${semesterNumber}`}
                                    key={`${semesterNumber}`}
                                    semesterNumber={semesterNumber + 1}
                                    data={mainData.semesters?.[semesterNumber + 1]}
                                    mainData={mainData}
                                    currentAccordion={currentAccordion}
                                    handleAccordionChange={handleAccordionChange}
                                    dispatch={dispatch}
                                />
                            ))}
                    </Grid>
                )}
        </Grid>
    )
}

export default SGPACalculator
