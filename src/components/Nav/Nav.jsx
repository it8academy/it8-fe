import classes from './Nav.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { useState } from 'react';

const Nav = ({ toggle, handleToggle }) => {
  // const { isLoggedIn, setIsLoggedIn, user } = useContextState();
  // const navigate = useNavigate();
  const [click, setclick] = useState(true);


  const handleClick = () => {
    setclick(!click);
  };

  const [open , setOpen] = useState(false)

const showCourse = () => setOpen(!open);

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     setIsLoggedIn(false);
  //     navigate('/');
  //     toast.success('Logged out successfully');
  //   } catch (error) {
  //     toast.error('couldnt log out');
  //   }
  // };

  return (
    <div className={toggle ? classes.navDesktop : classes.navMobile}>

      {/* Nav Items */}
      <nav className={classes.nav}>

        <NavLink  onClick={showCourse} className={classes.coursesItem}>
          <span>Courses</span>
          <MdOutlineKeyboardArrowDown style={{ fontSize: '16px' }} />

          {
              open && (<div className={classes.course}>
              <Link to="/frontEnd">Front End </Link>
              <Link to="/backEnd">Back End</Link>
              </div>
            )}

        </NavLink>
        <NavLink to="#Foot" onClick={handleToggle}><HashLink smooth to="#Foot">Contact Us</HashLink></NavLink>
        {/* <NavLink to="/contact" className={classes.logout}>
          Contact-us
        </NavLink> */}
      </nav>

      {/* Buttons */}

      <div className={classes.buttonFlex}>
        <Link to="/signup">
          <button className={classes.loginBtn1}>Enrol Now</button>
        </Link>
        <Link to="/login">
          <button className={classes.loginBtn2}>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
