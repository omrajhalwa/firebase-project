import {createContext, useContext,useState,useEffect} from "react";
import {initializeApp} from 'firebase/app';

import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
     signInWithPopup,
     onAuthStateChanged,
    } from "firebase/auth"
const FirebaseContext= createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyDv3XfpEhJwqGrhoISEHW0faPmlnFKDdBU",
    authDomain: "bookify-3604c.firebaseapp.com",
    projectId: "bookify-3604c",
    storageBucket: "bookify-3604c.appspot.com",
    messagingSenderId: "225559525676",
    appId: "1:225559525676:web:e1e0ef5b0a0fc7ee6c1489",
    measurementId: "G-DJMW03M3DN"
};


export const useFirebase=()=> useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth= getAuth(firebaseApp);
const googleProvider =new GoogleAuthProvider();


export const FirebaseProvider = (props)=>{
  const [user,setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,user=>{
            console.log("User",user);
            if(user) setUser(user);
            else setUser(null);
        })
    })
    
    const signupUserWithEmailAndPassword=(email,password)=>
        createUserWithEmailAndPassword(firebaseAuth,email,password);
    const siginWithEmailAndPass=(email,password)=>signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
    )

    const siginWithGoogle=()=>signInWithPopup(firebaseAuth,googleProvider);

    const isLoggedIn=user ?true :false;
    return(
        <FirebaseContext.Provider
        value={{siginWithGoogle,signupUserWithEmailAndPassword,siginWithEmailAndPass,isLoggedIn}}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}