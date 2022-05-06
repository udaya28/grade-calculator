import React from 'react'
import { Grid, Typography } from '@mui/material'

function ContactUs() {
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '30px', sm: '35px', md: '40px' },
                                color: 'primary.main',
                            }}
                        >
                            CONTACT US
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                hello
            </Grid>
        </Grid>
    )
}

export default ContactUs
