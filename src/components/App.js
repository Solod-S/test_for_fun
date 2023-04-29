import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../redux/auth/authOperation";

import { SharedLayout } from "./shared/SharedLayout/SharedLayout";
import TweetsPage from "../pages/TweetsPage/TweetsPage";
import TweetPage from "../pages/TweetPage/TweetPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<TweetsPage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="tweets/:tweetId" element={<TweetPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
