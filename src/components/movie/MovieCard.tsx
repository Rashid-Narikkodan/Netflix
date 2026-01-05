import { useEffect } from "react";

type Movie = {
  title: string;
  image: string;
  year: string;
  certification: string;
  type: string;
  genres: string[];
  description: string;
};

type MovieModalProps = {
  movie: Movie | null;
  onClose: () => void;
};

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative w-full max-w-5xl bg-neutral-900 text-white rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 text-2xl text-white/80 hover:text-white"
        >
          ×
        </button>

        {/* TOP IMAGE */}
        <div className="relative h-90">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
          </div>
        </div>

        {/* BOTTOM DETAILS */}
        <div className="p-6 space-y-5">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <span>{movie.year}</span>
            <span className="border px-2 py-0.5 rounded">
              {movie.certification}
            </span>
            <span>{movie.type}</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="bg-neutral-800 px-3 py-1 rounded text-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-300 max-w-3xl">
            {movie.description}
          </p>

          {/* CTA */}
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-sm font-medium"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}
