import React from 'react';
import logo from '../../assets/it8-logo.png';
import notification from '../../assets/notification.png';
import person from '../../assets/person.png';
import './Dashboardstyle.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import CourseDashboard from '../Courses/CourseDashboard';
// import LightMode from '../Mode/LightMode';

const Dashboard = () => {
  const [mobileIcon, setMobileIcon] = useState(false);
  const mobileHandler = () => {
    setMobileIcon((prev) => !prev);
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
                <Link to="#">Profile</Link>
              </li>
              <li>Notification</li>
              <li className="mode">Switch Mode </li>
              <li>Logout</li>
            </ul>
          </nav>
        )}

        <nav className="main-nav ">
          <ul className="">
            <li>
              <Link to="/dashboard">My Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard">My Course</Link>
            </li>
          </ul>
        </nav>

        <div className="person">
          <img src={notification} alt="" />
          <h2>Kehinde.O</h2>

          <img src={person} alt="" />
        </div>
      </div>
      <CourseDashboard />
    </>
  );
};

export default Dashboard;
