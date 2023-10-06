import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(true);

  const value = {
    user,
    setUser,
    userLoaded
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