import firebase from 'firebase/compat/app'; // pulling util library from firebase
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SEND_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);


export const auth = firebase.auth(); // export this out where we need anything related to authentication
export const firestore = firebase.firestore(); // 

export const userDocData = async (userAuth, data) =>{
    if(!userAuth) return ;
    
    const useRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await useRef.get();
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await useRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        } catch (error) {
            console.log("some error occured ",error);
        }
    }

    return useRef;
}

// Google Authentication Utility

// Give access to new google auth provider class from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger select account pop up provide by google when we use Google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: 'select_account' })


// sign in with pop up method recieves many pop up parameter but here we using only sign in with google it can accept sign in with twitter and many
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch((err) => {return});


export default firebase;