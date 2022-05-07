import React from 'react'
import { Grid, Typography } from '@mui/material'
import ContactUsImage from '../../../img/contact-us.png'
import ContactUsForm from './ContactUsForm/ContactUsForm'
import MailImage from '../../../img/mail-img.png'
import InstaImage from '../../../img/insta-img.png'
import GitHubImage from '../../../img/github-img.png'
import LinkedInImage from '../../../img/linkedIn-img.png'
import TwitterImage from '../../../img/twitter-img.png'

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
                        <Grid container alignItems="center" justifyContent="center" columnSpacing={3}>
                            <Grid item>
                                <a
                                    href="https://www.linkedin.com/in/udaya28/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        style={{ maxWidth: '25px', maxHeight: '25px' }}
                                        src={LinkedInImage}
                                        alt="icon"
                                    />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://github.com/udaya28" target="_blank" rel="noopener noreferrer">
                                    <img style={{ maxWidth: '25px', maxHeight: '25px' }} src={GitHubImage} alt="icon" />
                                </a>
                            </Grid>
                            <Grid item>
                                <a
                                    href="https://www.instagram.com/udaya_2831/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img style={{ maxWidth: '25px', maxHeight: '25px' }} src={InstaImage} alt="icon" />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://twitter.com/udaya28_" target="_blank" rel="noopener noreferrer">
                                    <img
                                        style={{ maxWidth: '25px', maxHeight: '25px' }}
                                        src={TwitterImage}
                                        alt="icon"
                                    />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="mailto:udaya28vivek31@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img style={{ maxWidth: '25px', maxHeight: '25px' }} src={MailImage} alt="icon" />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12} order={10}>
                    <Typography sx={{textAlign:'center',}}>Copyright @2022</Typography>
            </Grid> */}
        </Grid>
    )
}

export default ContactUs
