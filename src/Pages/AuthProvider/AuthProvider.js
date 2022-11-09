import React, { createContext, useEffect, useState } from 'react';
import { getAuth,GoogleAuthProvider , createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';




export const AuthContext = createContext({})
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null)
    const [loader, setLoader] = useState(true)

    //sign up with email
    const signUpWithEmail = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in with email
    const signInWithEmail = (email,password) => {
        setLoader(true)

        return signInWithEmailAndPassword(auth,email,password)
    }
    //log out
    const logOut = () => {
        setLoader(true)

        return signOut(auth)
    }

    //sign In With Google
    const signInWithGoogle = () => {
        setLoader(true)

        return signInWithPopup(auth,provider)
    }

    //update profile
    const updateNamePhoto=(Profile)=>{
        setLoader(true)

        return updateProfile(auth.currentUser,Profile)
    }

    //state changed
    useEffect(()=>{
        const unsubsCribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)

        })
        return()=>{
            return unsubsCribe()
        }
    },[])

    const authinfo = {loader,logOut,user, signUpWithEmail,updateNamePhoto,signInWithEmail,signInWithGoogle }
    console.log(user)

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;