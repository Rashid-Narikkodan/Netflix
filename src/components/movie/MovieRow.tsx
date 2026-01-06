import type { MovieDetails } from "../../types/movie";
import MovieRowCard from "./cards/MovieRowCard";
import "../../styles/movieRows.css";
import { useState } from "react";
import MovieDetailsModal from "./modal/MovieDetailsModal";
import Watch from "../../pages/watch/Watch";
import { useWatch } from "../../context/watchContext";
type Props = {
  row: {
    title: string;
    movies: MovieDetails[];
  };
};

const MovieRow = ({ row }: Props) => {
  const [detailsMovie, setDetailsMovie] = useState<MovieDetails | null>(null);
  const [watchMovie, setWatchMovie] = useState<MovieDetails | null>(null);
  const { setWatchingMovieId } = useWatch();

  return (
    <section className="px-6 py-4">
      <p className="mb-4 text-2xl font-semibold tracking-wide text-white">
        {row.title}
      </p>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth rows">
        {row.movies.map((movie) => (
          <MovieRowCard
            key={movie.id}
            movie={movie}
            onClick={() => setDetailsMovie(movie)}
          />
        ))}
      </div>

      {detailsMovie && (
        <MovieDetailsModal
          movie={detailsMovie}
          onClose={() => setDetailsMovie(null)}
          onPlay={() => {
            setWatchMovie(detailsMovie);
            setDetailsMovie(null);
          }}
        />
      )}

      {watchMovie && (
        <Watch
          tmdbId={watchMovie.id}
          onClose={() => {
            setWatchMovie(null);
            setWatchingMovieId(null);
          }}
          onClick={() => setWatchingMovieId(watchMovie.id)}
        />
      )}
    </section>
  );
};
export default MovieRow;
