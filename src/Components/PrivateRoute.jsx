import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center py-6 min-h-screen">
        <span className="loading loading-bars text-pink-800 loading-xs"></span>
        <span className="loading loading-bars text-pink-800 loading-sm"></span>
        <span className="loading loading-bars text-pink-800 loading-md"></span>
        <span className="loading loading-bars text-pink-800 loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login"></Navigate>;
    </>
  );
};

export default PrivateRoute;
