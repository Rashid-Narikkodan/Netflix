import WatchListMovies from "../../components/watchlist/WatchListMovies"
import ProtectedHeader from "../../components/layout/ProtectedHeader"

const WatchList = () => {
   
  return (
    <div>
    <ProtectedHeader />
     <WatchListMovies/>
    </div>
  )
}

export default WatchList