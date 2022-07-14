import React from 'react'
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
    setCurrentAccordion: any
    currentAccordion: number
}

function SGPACalculator({ mainData, dispatch, currentAccordion, setCurrentAccordion }: Props) {
    const handleAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        console.log({ panel, event })
        setCurrentAccordion(isExpanded ? panel : 0)
    }

    const executeScroll = (myRef: any) => {
        myRef.current.scrollIntoView(true)
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
                                    executeScroll={executeScroll}
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
