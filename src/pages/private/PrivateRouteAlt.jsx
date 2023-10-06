import { useContext } from "react";
import { UserContext } from "../../ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouteAlt = ({children}) => {
  const {userLoaded, user} = useContext(UserContext);

  return (
    userLoaded ? !user ? children : <Navigate to='/' /> : <div className="text-center mt-12 text-primary">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default PrivateRouteAlt;

PrivateRouteAlt.propTypes = {
  children: PropTypes.node
}