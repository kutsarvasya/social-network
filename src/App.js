import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";
import Layout from "./componets/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
      {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
    </Routes>
  );
}

export default App;
