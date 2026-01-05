import type { MovieDetails } from "../../types/movie";
import MovieRowCard from "./cards/MovieRowCard";
import '../../styles/movieRows.css'
import { useState } from "react";
import MovieDetailsModal from "./modal/MovieDetailsModal";

type Props = {
  row: {
    title: string;
    movies: MovieDetails[];
  };
};

const MovieRow = ({ row }: Props) => {

  const [selectedMovie, setSelectedMovie] = useState<MovieDetails|null>(null)

  return (
    <section className="px-6 py-4">
      {/* Row title */}
      <p className="mb-4 text-2xl font-semibold tracking-wide text-white">
        {row.title}
      </p>

      {/* Scroll container */}
      <div
        className="
          flex gap-4 overflow-x-auto
          scrollbar-hide
          scroll-smooth
          rows
        "
      >
        {row.movies.map((movie) => (
          <MovieRowCard key={movie.id} movie={movie} onClick={()=>setSelectedMovie(movie)}/>
        ))}
      </div>
      {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>}

    </section>
  );
};

export default MovieRow;
