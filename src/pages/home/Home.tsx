import Background from "../../assets/images/netflix-bg.jpg";
import Header from "../../components/layout/Header";
import HeroContent from "../../components/HeroContent";
import TrendingMovies from "../../components/movie/TrendingCarousel";
import ReasonCardSet from "../../components/ReasonCardSet";
import FAQAccordion from "../../components/FAQAccordion";
import { FAQS } from "../../utils/FAQs";


const Home = () => {
  return (
      <div className="text-white bg-black min-h-1000">

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
        </section>

      </div>
  );
};

export default Home;
