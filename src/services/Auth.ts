import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'

const createNewUserWithEmail = async (email: string, password: string) => {
    const auth = getAuth()
    // // console.log('create user', email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
}

const signInWithEmail = async (email: string, password: string) => {
    const auth = getAuth()
    // console.log('sign in', email, password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
}
const sendPasswordReset = async (email: string) => {
    const auth = getAuth()
    // console.log('send password reset', email)
    const userCredential = await sendPasswordResetEmail(auth, email)
    return userCredential
}

export { createNewUserWithEmail, signInWithEmail, sendPasswordReset }
