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
                                    key={semesterNumber + 1}
                                    semesterNumber={semesterNumber + 1}
                                    data={mainData.semesters?.[semesterNumber + 1]}
                                    currentAccordion={currentAccordion}
                                    handleAccordionChange={handleAccordionChange}
                                    dispatch={dispatch}
                                />
                            ))}
                        {/* {mainData.college === 'None' && (
                    <SemesterDetails
                        semesterNumber={1}
                        key={1}
                        data={null}
                        currentAccordion={currentAccordion}
                        handleAccordionChange={handleAccordionChange}
                    />
                )} */}
                    </Grid>
                )}
        </Grid>
    )
}

export default SGPACalculator
