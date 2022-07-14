import { Dialog, DialogContent, Tab } from '@mui/material'
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box } from '@mui/system'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

interface Props {
    loginDialogOpen: boolean
    setLoginDialogOpen: (value: boolean) => void
    setForgotPassDialogOpen: (value: boolean) => void
}

function LoginDialog({ loginDialogOpen, setLoginDialogOpen, setForgotPassDialogOpen }: Props) {
    const [tabValue, setTabValue] = useState('sign-in')
    const handleDialogClose = () => {
        setLoginDialogOpen(false)
    }

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue)
    }

    return (
        <Dialog onClose={handleDialogClose} open={loginDialogOpen} maxWidth="xs">
            <DialogContent>
                <Box>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleTabChange}
                                aria-label="lab API tabs example"
                                sx={{ display: 'flex', justifyContent: 'space-evenly' }}
                                variant="fullWidth"
                            >
                                <Tab
                                    label="Sign In"
                                    value="sign-in"
                                    sx={{ color: '#808080', fontSize: '18px', fontWeight: 700 }}
                                />
                                <Tab
                                    label="Sign Up"
                                    value="sign-up"
                                    sx={{ color: '#808080', fontSize: '18px', fontWeight: 700 }}
                                />
                            </TabList>
                        </Box>
                        <TabPanel value="sign-in" sx={{ p: '10px' }}>
                            <SignIn
                                setTabValue={setTabValue}
                                setLoginDialogOpen={setLoginDialogOpen}
                                setForgotPassDialogOpen={setForgotPassDialogOpen}
                            />
                        </TabPanel>
                        <TabPanel value="sign-up" sx={{ p: '10px' }}>
                            <SignUp setTabValue={setTabValue} setLoginDialogOpen={setLoginDialogOpen} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog
