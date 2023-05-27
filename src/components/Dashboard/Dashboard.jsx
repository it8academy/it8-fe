import React from 'react';
import logo from '../../assets/logo.png';
import notification from '../../assets/notification.png';
import person from '../../assets/person.png';
import './Dashboardstyle.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { loginUser } from '../../services/auth';
import useAuthStore from '../../pages/Auth/Login/useStore';
// import LightMode from '../Mode/LightMode';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState(false);
  const [mobileIcon, setMobileIcon] = useState(false);
  const { token, authUser, removeAuthUser } = useAuthStore();
  console.log(token);
  console.log(authUser);
  const mobileHandler = () => {
    setMobileIcon((prev) => !prev);
  };

  const handleLogout = async () => {
    setLog(true);
    try {
      const res = await loginUser({ refresh: ' ' });
      removeAuthUser();
      navigate('/');
      toast.success('Successfully logged out');
    } catch (error) {
      removeAuthUser();
      navigate('/');
      toast.success('Successfully logged out');
    }
    setLog(false);
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div onClick={mobileHandler} className="icons">
          {mobileIcon ? (
            <FaTimes className="hamburger" />
          ) : (
            <FaBars className="hamburger" />
          )}
        </div>

        {mobileIcon && (
          <nav className="navshow">
            <div onClick={mobileHandler} className="icon">
              {mobileIcon ? (
                <FaTimes className="hamburg" />
              ) : (
                <FaBars className="hamburger" />
              )}
            </div>
            <ul className=" ">
              <li>
                <Link to="/coursedashboard">Profile</Link>
              </li>
              <li>Notification</li>
              {/* <li className="mode">Switch Mode </li> */}
              {log ? <li>Logout</li> : <li onClick={handleLogout}>Logout</li>}
            </ul>
          </nav>
        )}

        <nav className="main-nav ">
          <ul className="">
            <li>
              <Link to="/coursedashboard">My Dashboard</Link>
            </li>
            <li>
              <Link to="/coursedashboard">My Course</Link>
            </li>
          </ul>
        </nav>

        <div className="person">
          <div>
            <img src={notification} alt="" />
          </div>
          <h2>{authUser?.last_name}</h2>

          <div className="user-li">
            <img src={person} alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="user">
                <ul>
                  <li>
                    <Link to="/coursedashboard">Profile</Link>
                  </li>
                  {/* <li className="mode">Switch Mode </li> */}
                  {log ? (
                    <li>Logout</li>
                  ) : (
                    <li onClick={handleLogout}>Logout</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <CourseDashboard /> */}
    </>
  );
};

export default Dashboard;
