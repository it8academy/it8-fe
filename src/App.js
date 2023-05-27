import Auth from './layout/Auth/Auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
// import AllCourses from './components/AllCourses/AllCourses';
import ProductDesign from './pages/ProductDesign/ProductDesign';
import ProductMgt from './pages/ProductMgt/ProductMgt';
import FrontEnd from './pages/FrontEnd/FrontEnd';
import BackEnd from './pages/BackEnd/BackEnd';
import Coursedashboard from './pages/Coursedashboard';
import useAuthStore from './pages/Auth/Login/useStore';
import Courseoutline from './pages/Courseoutline';
function App() {
  const { token } = useAuthStore();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <Auth>
            <Login />
          </Auth>
        }
      />
      <Route
        path="/signup"
        element={
          <Auth>
            <SignUp />
          </Auth>
        }
      />
      <Route path="/productDesign" element={<ProductDesign />} />
      <Route path="/productMgt" element={<ProductMgt />} />
      <Route path="/frontEnd" element={<FrontEnd />} />
      <Route path="/backEnd" element={<BackEnd />} />
      {/* <Route
        path="/dashboard/*"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      /> */}
      <Route
        path="/coursedashboard/*"
        element={token ? <Coursedashboard /> : <Navigate to="/login" />}
      />
      <Route path="/courseoutline" element={<Courseoutline />} />
    </Routes>
  );
}

export default App;
