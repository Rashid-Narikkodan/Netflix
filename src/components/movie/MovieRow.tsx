import type { MovieDetails } from "../../types/movie";
import MovieRowCard from "./MovieRowCard";
import '../../styles/movieRows.css'

type Props = {
  row: {
    title: string;
    movies: MovieDetails[];
  };
};

const MovieRow = ({ row }: Props) => {
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
          <MovieRowCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
