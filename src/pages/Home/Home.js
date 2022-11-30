import classes from './Home.module.css';
import bestImage from '../../assets/Home/bestImage.svg';
import learnPhysically from '../../assets/Home/learnPhysically.svg';
import online from '../../assets/Home/online.svg';
import titor from '../../assets/Home/titor.svg';
import downarrow from '../../assets/Home/downarrow.svg';
import rightarrow from '../../assets/Home/rightarrow.svg';
import Stack from '../../components/Stack/Stack';
import Testimonials from '../../components/Testimonials/Testimonials';
import { Stack_card } from '../../constant/index';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../../constant/staticData';
import KickStart from '../../components/StackComponent/KickStart/KickStart';
import Footer from '../../components/StackComponent/Footer/Footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Home = () => {
  return (
    <div className={classes.head}>
      {/* The why choose us page */}
      {/* <section className={classes.best}>
        <h3>We are the best</h3> <h2>Why Choose Us</h2>
        <div className={classes.sect}>
          <figure>
            <img src={bestImage} alt="bestImage" />
          </figure>
          <div className={classes.texts_first}>
            <div>
              <h3>We are the best</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </p>
            </div>
            <div>
              <h3>We are the best</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </p>
            </div>
          </div>
          <div className={classes.texts_first}>
            <div>
              <h3>We are the best</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </p>
            </div>
            <div>
              <h3>We are the best</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* The section for stack cards */}
      <section className={classes.stack} id="allcourses">
        <h4>Tech Stack</h4> <h2>Available Courses</h2>
        <div className={classes.cards}>
          {Stack_card.map((item) => (
            <Stack
              key={item.id}
              css={item.css}
              word={item.word}
              title={item.title}
              Link={item.link}
            />
          ))}
        </div>
        <a href='#allcourses'>
        <button className={classes.allCourse}>See All Courses</button>
        </a>
      </section>


      {/* The section for modes */}
      <section className={classes.mode}>
        <h4>Modes that suit you</h4>
        <h2>We Have The Learning Mode that suits you</h2>
        <div className={classes.learnmode}>
          <div className={classes.learnPHY}>
            <h2>Learn physically</h2>
            <p>
            Easily learn at the workspace with adequate facilities.
              Interact with colleagues and learn with ease.
            </p>
            <Link to="/signup">
            <button>      
              Get Started
              </button>
              </Link>
          </div>
          <div className={classes.learnIMG}>
            <img src={learnPhysically} alt="learnPhysically" />
          </div>
        </div>
        <div className={`${classes.learnmode2} ${classes.learnmode}`}>
          <div className={classes.learnPHY}>
            <h2>Learn online</h2>
            <p>
            Easily learn in the comfort of your home from anywhere. 
            
            Classes are live and very interactive.
            </p>
            <Link to="/signup">
            <button>
              Get Started
            </button>
              </Link>
          </div>
          <div className={classes.learnIMG}>
            <img src={online} alt="online" />
          </div>
        </div>
      </section>


      {/* The section for FAQ */}
{/*       
      <section className={classes.faq}>
        <h4>Got Questions?</h4> <h2>Frequently Asked Questions</h2>
        <div className={classes.quest}>
          <h5>Would I pay for the tuition fee</h5>
          <img src={downarrow} alt="downarrow" />
        </div>
        <div className={classes.questOpen}>
          <div className={classes.quest1}>
            <h5>Would I pay for the tuition fee</h5>
            <img src={rightarrow} alt="downarrow" />
          </div>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Maecenas vitae
            mattis tellus. Nullam quis imperdiet augue.
          </p>
        </div>
        <div className={classes.quest}>
          <h5>Would I pay for the tuition fee</h5>
          <img src={downarrow} alt="downarrow" />
        </div>
        <div className={classes.quest}>
          <h5>Would I pay for the tuition fee</h5>
          <img src={downarrow} alt="downarrow" />
        </div>
        <div className={classes.quest}>
          <h5>Would I pay for the tuition fee</h5>
          <img src={downarrow} alt="downarrow" />
        </div>
        <div className={classes.quest}>
          <h5>Would I pay for the tuition fee</h5>
          <img src={downarrow} alt="downarrow" />
        </div>
        <h2>Have more questions</h2> <button>Contact Us</button>
      </section> */}



      {/* The section for become a tutor */}
      {/* <div className={classes.tutor}>
        <div className={classes.tutortext}>
          <h4>Earn and Impact</h4> <h2>Learn physically</h2>
          <p>
            What our graduates are saying about iterate keeps us iterating Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit urna.
          </p>
          <button>Get Started</button>
        </div>
        <div className={classes.tutorIMG}>
          <img src={titor} alt="learnPhysically" />
        </div>
      </div> */}



      {/* The section testimony */}
      {/* <section className={classes.testimonies}>
        <div className={classes.testimonies_first}>
          <h4>What Users Are Saying</h4> <h2>Testimonials</h2>
          <p>
            What our graduates are saying about iterate keeps us iterating Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit urna.
          </p>
          <h6>Enrol to join the next ballers</h6> <button>Contact Us</button>
        </div>
        <div className={classes.testimonies_second}>
          <Splide aria-label="My Favorite Images">
          {testimonialsData.map((item) => (
            <SplideSlide key={item.id}>
            <Testimonials
              key={item.id}
              bg_color={item.bg_color}
              date={item.date}
              details={item.details}
              name={item.name}
            />
            </SplideSlide>
          ))}
          </Splide>
        </div>
      </section> */}
      
      <KickStart /> <Footer />
    </div>
  );
};

export default Home;
