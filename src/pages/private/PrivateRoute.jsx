import { useContext } from "react";
import { UserContext } from "../../ContextProvider";
import PropTypes from "prop-types";
import Login from "./Login";

const PrivateRoute = ({children}) => {
  const {userLoaded, user} = useContext(UserContext);

  return (
    userLoaded ? user ? children : <Login /> : <div className="text-center my-12 text-primary">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node
}