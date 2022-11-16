import classes from './Testimony.module.css';
import quote from '../../../assets/quote.svg';
import circle from '../../../assets/circle.svg';

const Testimony = () => {
  return (
    <div className={classes.Testimony}>
      <div className={classes.Test}>
        <img src={quote} alt="quote" />
        <p>
          I've known Grazac for over a year now and having worked with some of
          their successful students, I can boldly say the competency and problem
          solving skills of their students is top-notch and their academy is one
          of the best academy promoting technology skills acquisition here in
          Nigeria
        </p>
        <hr></hr>
        <h4>Adebayo Abayomi</h4>
        <p>Full-stack Developer at Spaceet</p>
      </div>
      <figure>
        <img src={circle} alt="circle" />
      </figure>
    </div>
  );
};

export default Testimony;
