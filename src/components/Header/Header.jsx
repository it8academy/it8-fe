import classes from './Header.module.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HeaderLogo from '../../assets/logo.png';
// import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className={classes.header}>
      <a href="/#top" className={classes.top}>
        <img src={HeaderLogo} alt="top" />
      </a>
      <div className={classes.content}>
        <ul className={classes.ul}>
          <li className={classes.fstli}>
            <div className={classes.firstli} onClick={() => setToggle(!toggle)}>
              <h2> Courses</h2>
              {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            {toggle && (
              <ul className={classes.cours}>
                <li>
                  {' '}
                  <Link to="/frontEnd">Front End</Link>
                </li>
                <li>
                  <Link to="/backEnd">Back End</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="contact">
              <NavLink className="contact" to="/#Foot">
                <HashLink className="contact" smooth to="#Foot">
                  <h2>Contact Us</h2>
                </HashLink>
              </NavLink>
            </div>
          </li>
        </ul>
        <div className={classes.buttons}>
          <Link to="/signup">
            <button className={classes.button}>Enrol Now</button>
          </Link>
          <Link to="/login">
            {' '}
            <button className={classes.button2}>Log in</button>
          </Link>
        </div>
      </div>
      <div className={classes.show} onClick={() => setShow(!show)}>
        {show ? (
          <FaTimes className={classes.fabars} />
        ) : (
          <FaBars className={classes.fabars} />
        )}
      </div>
      {show && (
        <div className={classes.content2}>
          <ul className={classes.ul}>
            <li className={classes.fstli}>
              <div
                className={classes.firstli}
                onClick={() => setToggle(!toggle)}>
                <h2> Courses</h2>
                {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
              {toggle && (
                <ul className={classes.cours}>
                  <li>
                    <Link to="/frontEnd">Front End</Link>
                  </li>
                  <li>
                    <Link to="/backEnd">Back End</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className="contact">
                <NavLink className="contact" to="/#Foot">
                  <HashLink className="contact" smooth to="#Foot">
                    <h2>Contact Us</h2>
                  </HashLink>
                </NavLink>
              </div>
            </li>
          </ul>
          <div className={classes.buttons}>
            <Link to="/signup">
              <button className={classes.button}>Enrol Now</button>
            </Link>
            <Link to="/login">
              {' '}
              <button className={classes.button2}>Log in</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
