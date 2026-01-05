import type { MovieDetails } from "../../../types/movie";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w780";

const MovieRowCard = ({ movie, onClick }: { movie: MovieDetails, onClick:()=>void }) => {
  return (
    <div
      className="
        relative
        w-85
        shrink-0
        overflow-hidden
        rounded-xl
        bg-neutral-800
        transition-transform
        duration-300
        hover:scale-110
        cursor-pointer
      "
      onClick={onClick}
    >
      {/* Backdrop */}
      <img
        src={
          movie.backdrop_path
            ? `${IMAGE_BASE}${movie.backdrop_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
        className="
          h-50
          w-full
          object-cover
        "
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/80
          via-black/30
          to-transparent
        "
      />

      {/* Title */}
      <div className="absolute bottom-3 left-3 right-3">
        <p
          className="
            text-sm
            font-semibold
            text-white
            line-clamp-2
          "
        >
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default MovieRowCard;
