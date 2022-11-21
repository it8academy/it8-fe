// import Header from '../../components/StackComponent/Header/Header';
import Hero from "../../components/StackComponent/Hero/Hero";
import classes from "./FrontEnd.module.css";
import frontend from "../../assets/frontend.svg";
import Learning from "../../components/StackComponent/Learning/Learning";
import Testimony from "../../components/StackComponent/Testimony/Testimony";
import KickStart from "../../components/StackComponent/KickStart/KickStart";
import Footer from "../../components/StackComponent/Footer/Footer";
import { FrontEnd_Engineering } from "../../constant/index";
import top from "../../assets/top.svg";
import Header from "../../components/Header/Header";

const FrontEnd = () => {
  return (
    <div className={classes.head} id="top">
      <a href="#top" className={classes.top}>
        <img src={top} alt="top" />
      </a>
      <Header />
      <Hero
        title="Frontend"
        title2="Engineering"
        text="Start your journey as a Frontend Developer. You’ll learn all you need to know to become a Frontend Developer and build exciting portfolios while learning the fundmentals of HTML, CSS, JavaScript and React."
        img={frontend}
        file="../../../assets/frontEndDoc.pdf"
      />
      <Learning course={FrontEnd_Engineering} />
      <Testimony />
      <KickStart />
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default FrontEnd;
