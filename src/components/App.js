import { Route, Routes, Navigate } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "../pages/HomePage/HomePage";
import TweetsPage from "../pages/TweetsPage/TweetsPage";

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route index element={<TweetsPage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
