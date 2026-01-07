import { useState, useEffect } from "react";
import WatchListCard from "./WatchListCard";
import MovieDetailsModal from "../movie/MovieDetails/MovieDetailsModal";
import { getWatchlist } from "../../services/db.service";
import { auth } from "../../firebase/auth";
import { getMovieDetails } from "../../services/tmdb.service";
import Loader from "../common/Loader";
import type { MovieDetails } from "../../types/movie";
import Watch from "../../pages/watch/Watch";
import { useWatch } from "../../context/watchContext";
import type { WatchlistItem } from "../../types/watchlist";


const WatchListMovies = () => {
  const [watchList, setWatchList] = useState<WatchlistItem[]|null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [watchMovieId, setWatchMovieId] = useState<number | null>(null);
  const [isLoading, setLoading] = useState(true);
  const {setWatchingMovieId}= useWatch()
  const [trigger,setTrigger]=useState(false)

  useEffect(() => {
  const user = auth.currentUser;
  if (!user) {
    return;
  }

  const fetchWatchList = async () => {
    console.log("Fetching watchlist for UID:", user.uid);
    const movies = await getWatchlist(user.uid);
    console.log("Movies fetched:", movies.length);
    setWatchList(movies);
    setLoading(false);
  };

  fetchWatchList();
}, [trigger]); // ✅ VERY IMPORTANT


  const handleMovieClick = async (item: WatchlistItem) => {
    setLoading(true);

    const details = await getMovieDetails(item.movieId);

    setSelectedMovie(details);
    setLoading(false);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-screen h-screen px-5 mt-30">
      <div className="grid grid-cols-6 gap-4">
        {watchList && watchList.map((movie) => (
          <WatchListCard
            key={movie.movieId}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
            onDelete={()=>setTrigger(!trigger)}
          />
        ))}
      </div>

      {isLoading && <Loader />}

      {selectedMovie && (
        <MovieDetailsModal
        onPlay={()=>setWatchMovieId(selectedMovie.id)}
           movie={selectedMovie}
          onClose={() => {setSelectedMovie(null)}}
        />
      )}
      {watchMovieId && <Watch tmdbId={watchMovieId} onClick={()=>setWatchingMovieId(watchMovieId)} onClose={()=>{setWatchMovieId(null);setWatchingMovieId(null)}} /> }
    </div>
  );
};

export default WatchListMovies;
