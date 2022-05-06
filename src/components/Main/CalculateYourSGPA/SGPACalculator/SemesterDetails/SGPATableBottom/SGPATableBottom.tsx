import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    displayResult: any
    data: any
}

function SGPATableBottom({ data, displayResult }: Props) {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid
                item
                xs={12}
                sx={{
                    borderWidth: { xs: '1px', sm: '0px' },
                    borderColor: 'secondary.main',
                    borderStyle: 'solid',
                    borderRadius: '10px',
                }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                padding: '10px 16px',
                                fontWeight: 'bold',
                                color: 'primary.main',
                                borderWidth: { xs: '0px', sm: '1px' },
                                borderTopWidth: { xs: '0px', sm: '0px' },
                                borderColor: 'secondary.main',
                                borderStyle: 'solid',
                                borderRadius: '10px',
                                borderTopRightRadius: '0px',
                                borderTopLeftRadius: '0px',
                                textAlign: 'center',
                            }}
                        >
                            {`SGPA ${displayResult(data?.subject || []) || '0.00'}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SGPATableBottom
