import Header from '../../components/Header/Header';
import Hero from '../../components/StackComponent/Hero/Hero';
import classes from './ProductMgt.module.css';
import hero_productManagement from '../../assets/hero_productManagement.svg';
import Learning from '../../components/StackComponent/Learning/Learning';
import Testimony from '../../components/StackComponent/Testimony/Testimony';
import KickStart from '../../components/StackComponent/KickStart/KickStart';
import Footer from '../../components/StackComponent/Footer/Footer';
import { ProductManagement } from '../../constant/index';
import top from '../../assets/top.svg';

const ProductMgt = () => {
  return (
    <div className={classes.head} id="top">
      <a href="#top" className={classes.top}>
        <img src={top} alt="top" />
      </a>
      <Header />
      <Hero
        title="Product"
        title2="Management"
        text="Your understanding of the process of strategically directing a company's product creation, market launch, ongoing support, and product enhancement will be improved by taking a product management course. It simply entails optimizing a product to the best of its ability and modifying a company's product to appeal to its target market and customers."
        img={hero_productManagement}
      />
      <Learning course={ProductManagement} />
      <Testimony />
      <KickStart />
      <div  className={classes.footer}>
      <Footer />
      </div>
    </div>
  );
};

export default ProductMgt;
