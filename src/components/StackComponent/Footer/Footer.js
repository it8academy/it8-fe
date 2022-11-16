import classes from './Footer.module.css';
import logo from '../../../assets/logo.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';
import linkedin from '../../../assets/linkedin.svg';
import facebook from '../../../assets/facebook.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <footer>
        <div className={classes.foot_first}>
          <img src={logo} alt="logo" />
          <figure>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
          </figure>
          <p>Tel : +2348066778899</p>
          <p>Tel : +2348066778899</p>
        </div>
        <div className={classes.courses}>
          <h4>Courses</h4>
          <a href="/productMgt">Product Management</a>

          <a href="/productDesign">Product Design</a>

          <a href="/frontend">Frontend Engineering</a>

          <p>Backend Engineering</p>

          <p>Mobile Development</p>

          <p>Brand Identity Design</p>
        </div>
        <div className={classes.courses}>
          <h4>Company</h4>
          <p> Hire our Graduate </p>

          <p>Career</p>
        </div>
        <div className={classes.courses}>
          <h4>About Us</h4>
          <p> Our Story</p>

          <p>Resources</p>
        </div>
      </footer>
      <p className={classes.last}>Ⓒ2022, Iterate Academy, All right reserved</p>
    </div>
  );
};

export default Footer;
