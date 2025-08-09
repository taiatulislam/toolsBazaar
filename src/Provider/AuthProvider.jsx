import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    googleLogin,
    user,
    setUser,
    logOut,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
