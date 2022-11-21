import classes from "./Hero.module.css";
import { Link } from "react-router-dom";



const Hero = ({title,title2,text,img,file}) => {
  return (
    <div className={classes.Hero}>
      <div className={classes.text}>
        <h1>{title}</h1>
        <h1>{title2}</h1>
        <p>
          {text}
        </p>
        <div className={classes.buttons}>
        <Link to="/signup">
          <button  className={classes.EnrolBtn}>Enrol Now</button>
        </Link>
        <a href={file} download>
            <button className={classes.DownloadBtn}>Download Brochure</button>
            </a>
        </div>
      </div>
      <figure>
        <img src={img} alt="img" />
      </figure>
    </div>
  );
};

export default Hero;
