import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signInWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((res) => {
        setUser(res.user);
        return res.user;
      });
  };

  const signOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => setUser(false));

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsuscribe();
  });

  return {
    user,
    signInWithGithub,
    signOut,
  };
}
