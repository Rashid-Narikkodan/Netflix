import HeroBanner from "../../components/movie/hero/HeroBanner";
import RowContainer from "../../components/movie/Movie-List/RowContainer";

const Home = () => {
  return (
    <div className="text-white bg-[#161616]">
      <HeroBanner />
      <div className="relative z-10 bg-[#161616] pt-6">
        <RowContainer />
      </div>
    </div>
  );
};

export default Home;
