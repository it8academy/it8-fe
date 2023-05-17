import React from 'react';
import backend from "../../assets/backend image.png"
import './CourseDashboard.css';
const CourseDashboard = () => {
    return (
      <>
        <div className="wrap">
          <h2 className="welcome"> Welcome Onboard </h2>
          <h2 className="name">Kehinde Ifeoluwa</h2>
          <p>
            We wish you all the best as you begin this new phase of learning
          </p>
        </div>
        <div className="courses">
          <h1>My Courses</h1>
          <div className='course'>
            <div>
              <h2>Backend Development</h2>
              <ul>
                <li>See Overview</li>
                <li>Start Course</li>
              </ul>
            </div>
            <img src={backend} alt="" /> 
          </div>
        </div>
      </>
    );
};

export default CourseDashboard;
