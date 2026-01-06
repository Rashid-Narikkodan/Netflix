import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/home/LandPage";
import Auth from "../pages/auth/auth";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Home from "../pages/home/Home";

import ProtectedRoute from "../components/common/ProtectedRoutes";
import PublicRoute from "../components/common/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public landing page */}

        {/* Public auth routes */}
        <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
