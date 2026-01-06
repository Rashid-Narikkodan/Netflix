import { useEffect, useState } from "react";
import type { MovieDetails } from "../../../types/movie";
import { X, Plus, ThumbsUp } from "lucide-react";
import { getRelatedMovies } from "../../../services/tmdb.service";
import Loader from "../../common/Loader";
import RelatedCard from "../cards/RelatedCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const MovieDetailsModal = ({
  movie,
  onClose,
  onPlay,
}: {
  movie: MovieDetails;
  onClose?: () => void;
  onPlay: () => void;
}) => {
  const [activeMovie, setActiveMovie] = useState<MovieDetails>(movie);
  const [relatedMovies, setRelatedMovies] = useState<MovieDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** Sync when parent movie changes */
  useEffect(() => {
    setActiveMovie(movie);
  }, [movie]);

  /** Fetch related movies */
  useEffect(() => {
    const fetchRelated = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getRelatedMovies(activeMovie.id);
        setRelatedMovies(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch related movies"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [activeMovie.id]);

  const releaseYear = activeMovie.release_date
    ? new Date(activeMovie.release_date).getFullYear()
    : "N/A";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-xl bg-[#141414] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 hover:bg-black"
        >
          <X size={20} />
        </button>

        {/* Backdrop */}
        <div className="relative">
          {activeMovie.backdrop_path && (
            <img
              src={`${IMAGE_BASE_URL}${activeMovie.backdrop_path}`}
              alt={activeMovie.title}
              className="w-full object-cover"
            />
          )}

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent to-[#141414]" />

          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 max-w-xl">
            <h1 className="text-4xl font-extrabold mb-4">
              {activeMovie.title}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={onPlay}
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-zinc-200"
              >
                ▶ Play
              </button>

              <button className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center">
                <Plus size={18} />
              </button>

              <button className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center">
                <ThumbsUp size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="p-6">
          <div className="flex gap-3 text-sm text-zinc-300 mb-3">
            <span className="text-green-400 font-medium">
              {activeMovie.vote_average.toFixed(1)} Rating
            </span>
            <span>{releaseYear}</span>
            <span className="border border-zinc-500 px-1 text-xs">
              {activeMovie.adult ? "18+" : "13+"}
            </span>
          </div>

          <p className="text-lg text-zinc-300 mb-6">
            {activeMovie.overview || "No description available."}
          </p>

          {/* Related */}
          <p className="text-2xl font-semibold mb-4">More Like This</p>

          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedMovies.map((movie) => (
                <RelatedCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => setActiveMovie(movie)}
                />
              ))}VideoPl
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
