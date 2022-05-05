import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const createNewUserWithEmail = async (email: string, password: string) => {
    const auth = getAuth()
    console.log('create user', email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
}

const signInWithEmail = async (email: string, password: string) => {
    const auth = getAuth()
    console.log('sign in', email, password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
}

export { createNewUserWithEmail, signInWithEmail }
