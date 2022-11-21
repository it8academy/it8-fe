import React from 'react';
import Header from '../../components/Header/Header';
import HeaderHero from '../../components/HeaderHero/HeaderHero';
import Home from '../Home/Home';
import top from '../../assets/top.svg';
import classes from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
     <a href="#top" className={classes.top}>
        <img src={top} alt="top" />
      </a>
      <Header />
      <HeaderHero />
      <Home />
    </>
  );
};

export default LandingPage;
