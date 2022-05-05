// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBMK5628PFsr5Gnq8BGvVCf3xxvp9gf6AQ',
    authDomain: 'gradecalculators.firebaseapp.com',
    projectId: 'gradecalculators',
    storageBucket: 'gradecalculators.appspot.com',
    messagingSenderId: '181352571009',
    appId: '1:181352571009:web:d3cf2d144b4507e0006d80',
    measurementId: 'G-BE71ZMCGML',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
console.log('app')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)
console.log('analytics')

// const auth = getAuth(app);
// console.log('auth');

// eslint-disable-next-line import/prefer-default-export
// export { auth };
