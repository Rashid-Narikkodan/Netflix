import HeroBanner from "../../components/movie/HeroBanner"
import RowContainer from "../../components/movie/RowContainer"
import Watch from "../watch/Watch"

const Home = () => {
  return (
    <div className="text-white bg-[#161616]">
          <HeroBanner />

          <div className="relative z-10 bg-[#161616] pt-6">
  <RowContainer />
</div>
<Watch />
    </div>
  )
}

export default Home