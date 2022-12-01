// import Header from '../../components/StackComponent/Header/Header';
import Hero from '../../components/StackComponent/Hero/Hero';
import classes from './BackEnd.module.css';
import hero_image from '../../assets/hero_ui_ux.svg';
import Learning from '../../components/StackComponent/Learning/Learning';
// import Testimony from '../../components/StackComponent/Testimony/Testimony';
import KickStart from '../../components/StackComponent/KickStart/KickStart';
import Footer from '../../components/StackComponent/Footer/Footer';
import { BackEnd_Engineering } from '../../constant/index';
import top from '../../assets/top.svg';
import Header from '../../components/Header/Header';

const BackEnd = () => {
  return (
    <div className={classes.head} id="top">
      <a href="#top" className={classes.top}>
        <img src={top} alt="top" />
      </a>
      <Header />
      <Hero
        title="Backend"
        title2="Engineering"
        text="The backend track is taught by an experienced instructor in the field. You will learn by building real life project and move from zero knowledge of software development to developing confidence in the field by learning and using the various software development techniques and frameworks."
        img={hero_image}
        file="../../../assets/backendDoc.pdf"
      />
      <Learning course={BackEnd_Engineering} />
      {/* <Testimony /> */}
      <KickStart />
      <div  className={classes.footer}>
      <Footer />
      </div>
    </div>
  );
};

export default BackEnd;
