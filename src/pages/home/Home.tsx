import Header from "../../components/layout/Header";
import Background from "../../assets/images/netflix-bg.jpg";
import HeroContent from "../../components/HeroContent";
const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}>

      <Header />
      <div className="flex justify-center h-screen items-center">
        <HeroContent />
      </div>

    </div>
  );
};

export default Home;
