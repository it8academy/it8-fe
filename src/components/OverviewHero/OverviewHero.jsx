import React from 'react'
import { Link } from 'react-router-dom';
import "./OverviewHero.css"
import overview from "../../assets/overviewhero.jpg"
const OverviewHero = () => {
  return (
    <div className="main-wrapper">
      <div className="leftdiv">
        <h1>Start your tech journey without delay with us</h1>
        <p>
          Sign up now to begin to access quality tech training at an affordable
          rate.
        </p>
        <div className="btn">
          <Link to="/signup">
            <button>Enrol Now</button>
          </Link>
        </div>
      </div>
      <div className="rightdiv">
        <img src={overview} alt="" />
      </div>
    </div>
  );
}

export default OverviewHero