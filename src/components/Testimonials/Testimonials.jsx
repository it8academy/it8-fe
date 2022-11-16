import classes from './Testimonials.module.css';

{
  /* <div className={classes.grey}>
  <h5>October, 2022.</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
    ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
    quis imperdiet augue. Maecenas vitae mattis tellus. Nullam quis imperdiet
    augue.
  </p>
  <h5>Abayomi Akindele</h5>
</div>; */
}
const Testimonials = ({ bg_color, name, details, date }) => {
  return (
    <div className={`${classes.testimonial_card} ${classes[bg_color]}`}>
      <h5>October, 2022.</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Maecenas vitae mattis tellus.
        Nullam quis imperdiet augue.
      </p>
      <h5>Abayomi Akindele</h5>
      {/* <h3>{title}</h3>
      <p>{word}</p>
      <button>
        <a href="/productMgt">View Course </a>{' '}
        <img src={rightarrow} alt="rightarrow" />
      </button> */}
    </div>
  );
};

export default Testimonials;
