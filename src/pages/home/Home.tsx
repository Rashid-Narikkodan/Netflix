import Background from "../../assets/images/netflix-bg.jpg";
import Header from "../../components/layout/Header";
import HeroContent from "../../components/HeroContent";
import TrendingMovies from "../../components/movie/TrendingCarousel";
import ReasonCardSet from "../../components/movie/ReasonCardSet";

const Home = () => {
  return (
    <>
      <div className="text-white bg-black">
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}>
          <Header />
          <div className="flex justify-center h-screen items-center">
            <HeroContent />
          </div>
          
        </section>
        <section className="px-25">
          <TrendingMovies />
          <ReasonCardSet />
        </section>
      </div>
    </>
  );
};

export default Home;
