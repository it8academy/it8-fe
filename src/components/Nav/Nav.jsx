import classes from './Nav.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
      <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink className={classes.courses}>
          <span>Courses</span>
          <MdOutlineKeyboardArrowDown style={{ fontSize: '16px' }} />
        </NavLink>
        <NavLink to="/tutor">Become a tutor</NavLink>
        <NavLink to="/contact" className={classes.logout}>
          Contact-us
        </NavLink>
      </nav>
      <div className={classes.buttonFlex}>
        <Link to="/login">
          <button className={classes.loginBtn1}>Enrol Now</button>
        </Link>
        <Link to="/signup">
          <button className={classes.loginBtn2}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
