import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};