import React from 'react'
import { Grid, Typography } from '@mui/material'
import ContactUsImage from '../../../img/contact-us.png'
import ContactUsForm from './ContactUsForm/ContactUsForm'

function ContactUs() {
    return (
        <Grid container rowSpacing={2} alignItems="center">
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
            <Grid item xs={12} md={7} order={{ xs: 3, md: 2 }}>
                <ContactUsForm />
            </Grid>
            <Grid item xs={12} md={5} order={{ xs: 2, md: 3 }}>
                <Grid container justifyContent="center" alignItems="center" sx={{ pb: '30px', pt: '0', px: '40px' }}>
                    <Grid item>
                        <img style={{ maxWidth: '100%', maxHeight: '200px' }} src={ContactUsImage} alt="icon" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} order={4}>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={12} md={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus esse qlibero
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactUs
