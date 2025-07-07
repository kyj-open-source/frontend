import Layout from "components/layout/Layout";
import Home from "pages/Home";
import Jobs from "pages/Jobs";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Layout
        children={
          <div>
            <Routes>
              <Route index element={<Navigate to="/search" replace />} />
              <Route path="/search" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
        }
      />
    </div>
  );
}

export default App;
