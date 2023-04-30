import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authPassed = useSelector((state) => state.auth.user.user);
  return authPassed ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
