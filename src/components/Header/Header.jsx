import classes from './Header.module.css';

import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import HeaderLogo from '../../assets/logo.png';

import { useState } from 'react';

import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <Link to="/" className={classes.logoContainer}>
          <div className={classes.image}>
            <img src={HeaderLogo} alt="logo" />
          </div>
        </Link>
        <div className={classes.navContainer}>
          <Nav toggle={toggle} handleToggle={handleToggle} />
        </div>
        {toggle ? (
          <button onClick={handleToggle} className={classes.hamburger}>
            <FaBars />
          </button>
        ) : (
          <button onClick={handleToggle} className={classes.hamburger}>
            <FaTimes />
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
