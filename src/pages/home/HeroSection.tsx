import Background from "../../assets/images/netflix-bg.jpg";
import Header from "../../components/layout/Header";
import HeroContent from "../../components/HeroContent";
const HeroSection = () => {
  return (
    <>
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >

      <Header />

      <div className="flex justify-center h-screen items-center">
        <HeroContent />
      </div>

    </section>
        </>
  );
};

export default HeroSection;
