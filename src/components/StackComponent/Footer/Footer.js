import classes from "./Footer.module.css";
import logo from "../../../assets/logo.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";
import facebook from "../../../assets/facebook.svg";

const Footer = () => {
  return (
    <div className={classes.footer} id="Foot">
      <footer>
        <div className={classes.foot_first}>
          <img src={logo} alt="logo" />
          <figure>
            <a href="https://www.instagram.com/it8academy/">
              <img src={instagram} alt="instagram" />
            </a>
            {/* <a href="https://www.instagram.com/it8academy/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/it8academy/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/it8academy/">
              <img src={facebook} alt="facebook" />
            </a> */}
          </figure>
          <p>Tel : +2348133832003</p>
          <p>Tel : +2348168623014</p>
        </div>
        <div className={classes.courses}>
          <h4>Courses</h4>
          {/* <a href="/productMgt">Product Management</a>

          <a href="/productDesign">Product Design</a> */}

          <a href="/backend">Backend Engineering</a>

          <a href="/frontend">Frontend Engineering</a>

          {/* 
          <p>Mobile Development</p>

          <p>Brand Identity Design</p> */}
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
