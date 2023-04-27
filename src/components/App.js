import { Route, Routes, Navigate } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { HomePage } from "./HomePage/HomePage";
import { Tweets } from "./Tweets/Tweets";

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<Tweets />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
