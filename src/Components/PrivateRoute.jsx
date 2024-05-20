import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center my-10">
        {/* Display skeleton while content loads */}
        {/* <Skeleton height={100} width={200} /> */}

        {/* Display skeleton for an image */}
        {/* <Skeleton height={200} width={300} /> */}

        {/* Display skeleton for a list */}
        <ul className="">
          <li>
            <Skeleton width={200} />
          </li>
          <li>
            <Skeleton width={200} />
          </li>
          <li>
            <Skeleton width={200} />
          </li>
        </ul>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </>
  );
};

export default PrivateRoute;
