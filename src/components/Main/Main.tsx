import React from 'react'
import { Grid, Container, Typography } from '@mui/material'

function Main() {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Typography
                    variant="h1"
                    color="primary"
                    sx={{ pt: '80px', fontWeight: 700, fontSize: { xs: '26px', sm: '30px', md: '34px' } }}
                >
                    Grade Calculator
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                    Lorem ipsum, dolor sit amet consectetur ad ipisicing elit. Neque dolor dolore voluptatibus corpor
                    is, iusto quod assumenda alias quos. Id nobis aspernatur quos delectus possimus exercita tionem
                    ipsa, molestiae omnis voluptas cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque consectetur c umque consequatur vero corporis, repella t ratione iste vel qui inventore unde
                    por ro quibusdam maxime repudiandae perferendis veritatis reprehenderit? Voluptatibus, rem.
                </Typography>
                <Grid item xs={12} md={8}>
                    a
                </Grid>
                <Grid item xs={12} md={4}>
                    b
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main
