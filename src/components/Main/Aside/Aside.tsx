import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import AsideImage from '../../../img/aside.png'

function Aside() {
    return (
        <>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <img style={{ maxWidth: '100%' }} src={AsideImage} alt="icon" />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: '20px' }} elevation={2}>
                    <Grid container alignItems="flex-start" justifyContent="flex-start" rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                color="primary"
                                sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '22px', md: '26px' } }}
                            >
                                How to use grade calculator
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
                                Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. Neque dolor dolore
                                voluptatibus corpor is, iusto quod assumenda alias quos.
                            </Typography>
                        </Grid> */}
                        {/* <Grid item xs={12}>
                            <iframe
                                width="100%"
                                height="250"
                                src="https://www.youtube.com/embed/9BvBRXkJA58"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Grid> */}

                        {/* <Grid>
                            <Typography
                                variant="h5"
                                color="scondary"
                                sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '22px', md: '26px' } }}
                            >
                                Step by Step Tutorial
                            </Typography>
                        </Grid> */}
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight: 700 }}>
                                Step by step instructions
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: '28px' }}>
                                1. Log in into the app by entering your mail-id and password. <br />
                                2. Select your college/university, regulation and department from the drop down menu.{' '}
                                <br />
                                3. Click the down arrow of the respective semester. <br />
                                4. Select your grades of the subjects in the respective drop down list boxes. <br />
                                5. Your SGPA will be calculated and displayed automatically. <br />
                                6. Click the save button at the bottom of the app to save your entries. <br />
                                {/* 1. Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. <br />
                                2. Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. <br />
                                3. Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. <br />
                                4. Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. <br />
                                5. Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. <br /> */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default Aside
