import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import AOS from 'aos';

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoaded(true);
    });
    return () => unSubscribe();
  }, []);

  const aosSettings = () => {
    return AOS.init({
      duration: 700
    });
  }

  const value = {
    user,
    setUser,
    userLoaded,
    aosSettings
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node
}