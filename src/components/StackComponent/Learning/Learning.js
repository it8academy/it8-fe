import classes from "./Learning.module.css";

const Learning = ({ course }) => {
  return (
    <div className={classes.Learning}>
      <h2>What you’ll learn</h2>

      {course.map((item) => (
        <div className={classes.words} key={item.id}>
          <h4 className={classes.lead}>
            {item.num}
            <h4>{item.title}</h4>
          </h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Learning;
