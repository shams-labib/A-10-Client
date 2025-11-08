import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../_firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch {
      setLoading(false);
      throw Error;
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch {
      setLoading(false);
      throw Error;
    }
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscriber;
  }, []);

  const info = {
    createUser,
    signInUser,
    loading,
    signOutUser,
    signInWithGoogle,
    user,
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
