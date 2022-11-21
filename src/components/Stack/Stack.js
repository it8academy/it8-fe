import ribbon from '../../assets/Home/ribbon.svg';
import rightarrow from '../../assets/Home/rightarrow.svg';
import classes from './Stack.module.css';

const Stack = ({ css, title, word, Link }) => {
  return (
    <div className={`${classes.stack_card} ${classes[css]}`}>
      <img src={ribbon} alt="ribbon" />
      <h3>{title}</h3>
      <p>{word}</p>
      <button>
        <a href={Link}>View Course </a>{' '}
        <img src={rightarrow} alt="rightarrow" />
      </button>
    </div>
  );
};

export default Stack;
