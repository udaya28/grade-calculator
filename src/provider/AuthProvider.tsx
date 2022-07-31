import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

function AuthProvider({ children }: any) {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (data) => {
            if (data) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // console.log('User is signed in', data)
                setUser(data)
                // ...
            } else {
                setUser(null)
                // User is signed out
                // ...
            }
        })
        // return unsubscribe
    }, [])

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider
