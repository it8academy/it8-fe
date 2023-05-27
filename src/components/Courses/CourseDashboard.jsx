import React from 'react';
import backend from '../../assets/backend image.png';
import './CourseDashboard.css';
import useAuthStore from '../../pages/Auth/Login/useStore';
import { Link } from 'react-router-dom';
const CourseDashboard = () => {
  const { authUser } = useAuthStore();
  return (
    <>
      <div className="wrap">
        <h2 className="welcome"> Welcome Onboard </h2>
        <h2 className="name">
          {authUser?.last_name} {authUser?.first_name}
        </h2>
        <p>We wish you all the best as you begin this new phase of learning</p>
      </div>
      <div className="courses">
        <h1>My Courses</h1>
        <div className="course">
          <div>
            <h2>{authUser?.course}</h2>
            <ul>
              <li>
                {authUser?.course === 'backend engineering' ? (
                  <Link to="/courseoutline">See Overview</Link>
                ) : (
                  ''
                )}
              </li>
              <li>
                {authUser?.course === 'backend engineering' ? (
                  <Link to="/coursedashboard">Start Course</Link>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>
          <img src={backend} alt="" />
        </div>
      </div>
    </>
  );
};

export default CourseDashboard;
