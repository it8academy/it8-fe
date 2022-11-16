import Header from '../../components/Header/Header';
import Hero from '../../components/StackComponent/Hero/Hero';
import classes from './ProductDesign.module.css';
import hero_image from '../../assets/hero_ui_ux.svg';
import Learning from '../../components/StackComponent/Learning/Learning';
import Testimony from '../../components/StackComponent/Testimony/Testimony';
import KickStart from '../../components/StackComponent/KickStart/KickStart';
import Footer from '../../components/StackComponent/Footer/Footer';
import { ProductLearning } from '../../constant/index';
import top from '../../assets/top.svg';

const ProductDesign = () => {
  return (
    <div className={classes.head} id="top">
      <a href="#top" className={classes.top}>
        <img src={top} alt="top" />
      </a>
      <Header />
      <Hero
        title="Product Design"
        title2="(UI/UX)"
        text="The definition of product design describes the process of imagining,
      creating, and iterating products that solve users’ problems or address
      specific needs in a given market."
        img={hero_image}
      />
      <Learning course={ProductLearning} />
      <Testimony />
      <KickStart />
      <Footer />
    </div>
  );
};

export default ProductDesign;
