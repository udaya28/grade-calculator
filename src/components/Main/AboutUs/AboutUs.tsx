import { Grid, Typography } from '@mui/material'
import React from 'react'
import AboutUsImage from '../../../img/about-us.png'

function AboutUs() {
    return (
        // <Grid item xs={12} sx={{ my: '20px' }}>
        <Grid container sx={{ bgcolor: 'primary.main', my: '20px' }} rowSpacing={2}>
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '30px', sm: '35px', md: '40px' },
                                color: 'rgba(255, 255, 255, 1)',
                            }}
                        >
                            ABOUT US
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container columnSpacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={5}>
                        {/* <Grid item xs={12}> */}
                        <Grid container justifyContent="center" sx={{ pb: '30px', pt: '0', px: '40px' }}>
                            <img style={{ maxWidth: '100%', maxHeight: '200px' }} src={AboutUsImage} alt="icon" />
                        </Grid>
                        {/* </Grid> */}
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography
                            sx={{ color: 'rgba(255,255,255,1)', pb: '20px', pt: '0', px: '40px', textAlign: 'justify' }}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculuss. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // </Grid>
    )
}

export default AboutUs
