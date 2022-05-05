import { Dialog, DialogContent, Tab } from '@mui/material'
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box } from '@mui/system'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

interface Props {
    loginDialogOpen: boolean
    setLoginDialogOpen: (value: boolean) => void
}

function LoginDialog({ loginDialogOpen, setLoginDialogOpen }: Props) {
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
                                <Tab label="Sign In" value="sign-in" sx={{ color: 'secondary.main' }} />
                                <Tab label="Sign Up" value="sign-up" sx={{ color: 'secondary.main' }} />
                            </TabList>
                        </Box>
                        <TabPanel value="sign-in" sx={{ p: '10px' }}>
                            <SignIn setTabValue={setTabValue} />
                        </TabPanel>
                        <TabPanel value="sign-up" sx={{ p: '10px' }}>
                            <SignUp setTabValue={setTabValue} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog
