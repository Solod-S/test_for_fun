import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import PrivateRoute from "../service/routes/PrivateRoute";
import PublicRoute from "../service/routes/PublicRoute";

import { SharedLayout } from "./shared/SharedLayout/SharedLayout";
const TweetsPage = lazy(() => import("../pages/TweetsPage/TweetsPage"));
const TweetPage = lazy(() => import("../pages/TweetPage/TweetPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="userpage" element={<UserPage />} />
            <Route path="tweets" element={<TweetsPage />} />
            <Route path="tweets/:tweetId" element={<TweetPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="authentication" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
