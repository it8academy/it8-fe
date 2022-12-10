import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import signupImage from "../../assets/signupImage.jpg";

const Auth = ({ props, children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.darkBg}>
        <div className={styles.darkBg_content}>
          <Link to="/" className={styles.logoContainer}>
            <div className={styles.image}>
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div> {children}</div>
        </div>
      </div>
      <div className={styles.AuthBg}>
        <img src={signupImage} alt="logo" />
      </div>
    </main>
  );
};

export default Auth;
