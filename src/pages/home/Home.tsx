import Background from "../../assets/images/netflix-bg.jpg";
import Header from "../../components/layout/Header";
import HeroContent from "../../components/HeroContent";
import TrendingMovies from "../../components/movie/TrendingCarousel";
import ReasonCardSet from "../../components/ReasonCardSet";
import FAQAccordion from "../../components/FAQAccordion";
import { FAQS } from "../../utils/FAQs";
import Footer from "../../components/layout/Footer";


const Home = () => {
  return (
      <div className="text-white bg-black">

        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}>
          <Header />
          <div className="flex justify-center h-screen items-center">
            <HeroContent />
          </div>
        </section>

        <section className="md:px-25 ">
          <TrendingMovies />
          <ReasonCardSet />
          <FAQAccordion items={FAQS}/>
          <Footer />
        </section>

      </div>
  );
};

export default Home;
