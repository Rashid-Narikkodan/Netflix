import type { MovieDetails } from "../../../types/movie";
import { X, Plus, ThumbsUp } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export type MovieDetailsProps = {
  movie: MovieDetails;
  onClose?: () => void;
};

const MovieDetailsModal = ({ movie, onClose }: MovieDetailsProps) => {
  if (!movie) return null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative h-max max-w-7xl overflow-hidden rounded-xl bg-[#141414] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 hover:bg-black transition"
        >
          <X size={20} />
        </button>

        {/* Backdrop */}
        <div className="relative w-full">
          {movie.backdrop_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          )}

          {/* Gradients */}
               <div
        className="
      pointer-events-none
      absolute bottom-0 left-0 right-0
      h-48
      bg-linear-to-b
      from-transparent
      via-[#050505]/30
      to-[#161616]
    "
      />
      <div
        className="
      pointer-events-none
      absolute bottom-0 left-0 right-0
      backdrop-blur-xs
      bg-[#000000]/10
    "
      />


          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 max-w-xl">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {movie.title}
            </h1>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-zinc-200 transition">
                ▶ Play
              </button>

              <button className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center hover:border-white transition">
                <Plus size={18} />
              </button>

              <button className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center hover:border-white transition">
                <ThumbsUp size={18} />
              </button>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 mb-3">
              <span className="font-medium text-green-400">
                {movie.vote_average.toFixed(1)} Rating
              </span>

              <span>{releaseYear}</span>

              <span className="border border-zinc-500 px-1 text-xs">
                {movie.adult ? "18+" : "13+"}
              </span>

              <span className="uppercase text-xs">
                {movie.media_type}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="h-12 bg-linear-to-t from-[#141414] to-transparent" />
      </div>
    </div>
  );
};

export default MovieDetailsModal;
