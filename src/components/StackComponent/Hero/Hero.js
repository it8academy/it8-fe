import classes from "./Hero.module.css";


const Hero = ({title,title2,text,img}) => {
  return (
    <div className={classes.Hero}>
      <div className={classes.text}>
        <h1>{title}</h1>
        <h1>{title2}</h1>
        <p>
          {text}
        </p>
        <div className={classes.buttons}>
            <button>Enroll Now</button>
            <button>Download Brochure</button>
        </div>
      </div>
      <figure>
        <img src={img} alt="img" />
      </figure>
    </div>
  );
};

export default Hero;
