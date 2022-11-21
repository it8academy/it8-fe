import React from 'react';
import classes from './HeaderHero.module.css';
import heroImage from '../../assets/hero_img.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
const HeaderHero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.leftDiv}>
          <h1>Start your tech journey without delay with us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>
          <div className={classes.btn}>
          <Link to="/signup">
            <Button>Enrol Now</Button>
            </Link>
          </div>
        </div>
        <div className={classes.rightDiv}>
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
