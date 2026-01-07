import HeroBanner from "../../components/movie/hero/HeroBanner";
import RowContainer from "../../components/movie/Movie-List/RowContainer";
import Footer from "../../components/layout/Footer";
const Home = () => {
  return (
    <div className="text-white bg-[#161616]">
      <HeroBanner />
      <div className="relative z-10 bg-[#161616] pt-6">
        <RowContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
