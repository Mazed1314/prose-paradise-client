import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <span className="loading loading-bars text-black loading-xs"></span>
        <span className="loading loading-bars text-black loading-sm"></span>
        <span className="loading loading-bars text-black loading-md"></span>
        <span className="loading loading-bars text-black loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
      ;
    </>
  );
};

export default PrivateRoute;
