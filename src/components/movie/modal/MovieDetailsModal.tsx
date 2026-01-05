import { useEffect, useState } from "react";
import type { MovieDetails } from "../../../types/movie";
import { X, Plus, ThumbsUp } from "lucide-react";
import { getRelatedMovies } from "../../../services/tmdb.service";
import Loader from "../../common/Loader";
import RelatedCard from "../cards/RelatedCard";

import '../../../styles/movieRows.css'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export type MovieDetailsProps = {
  movie: MovieDetails;
  onClose?: () => void;
};

const MovieDetailsModal = ({ movie, onClose }: MovieDetailsProps) => {
 const [relatedMovies, setRelatedMovies] = useState<MovieDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open,setOpen] = useState(false)
  const [selectedMovie,setSelectedMovie] = useState<MovieDetails|null>(null)

  useEffect(() => {
    if (!movie) return;

    const fetchRelated = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getRelatedMovies(movie.id);
        setRelatedMovies(data);
      } catch (err: unknown) {
        setError(err instanceof Error && err.message || "Failed to fetch related movies");
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [movie]);


  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6 sm:px-4 md:px-6 lg:px-10"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-xl bg-[#141414] text-white shadow-2xl movie-card"
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
            className="l-to-t f
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
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 mb-3">
            <span className="font-medium text-green-400">
              {movie.vote_average.toFixed(1)} Rating
            </span>

            <span>{releaseYear}</span>

            <span className="border border-zinc-500 px-1 text-xs">
              {movie.adult ? "18+" : "13+"}
            </span>

            <span className="uppercase text-xs">{movie.media_type}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-zinc-300 leading-relaxed line-clamp-3">
            {movie.overview || "No description available."}
          </p>
          {/* meta info end */}
          <div className="mt-5">
              <p className="text-2xl font-semibold">More Like This</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  {loading ? (
    <Loader />
  ) : error ? (
    <div>{error}</div>
  ) : (
    relatedMovies.map((movie) => <RelatedCard key={movie.id} movie={movie} onClick={()=>{
    setOpen(true)
    setSelectedMovie(movie)
  }}/>)
  )}
</div>

          </div>
        </div> 
       { open && selectedMovie &&<MovieDetailsModal movie={selectedMovie} onClose={()=>setOpen(false)}/> }
      </div>
    </div>
  );
};

export default MovieDetailsModal;
