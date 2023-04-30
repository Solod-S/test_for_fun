import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const authPassed = useSelector((state) => state.auth.user.user);
  return authPassed ? <Navigate to="/tweets" /> : <Outlet />;
};

export default PublicRoute;
