
interface MovieCardProps {
  title: string;
  year: string;
  rating: string;
  genres: string[];
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

const MovieCard = ({
  title,
  year,
  rating,
  genres,
  description,
  imageUrl,
  onClick,
}: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-64 cursor-pointer overflow-hidden rounded-xl bg-[#141414] shadow-lg transition-transform hover:scale-105"
    >
      {/* Movie Image */}
      <div className="relative h-96 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Movie Content */}
      <div className="p-4">
        <h2 className="mb-2 font-serif text-xl font-bold text-white">{title}</h2>

        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="rounded bg-white/20 px-2 py-0.5 text-xs font-medium text-gray-200">
            {year}
          </span>
          <span className="rounded bg-white/20 px-2 py-0.5 text-xs font-medium text-gray-200">
            {rating}
          </span>
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded bg-white/20 px-2 py-0.5 text-xs font-medium text-gray-200"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>

        {/* CTA */}
        {onClick && (
          <button className="mt-3 flex items-center gap-2 rounded-md bg-[#e50914] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#b20710]">
            Get Started
            <span className="text-lg leading-none">&rsaquo;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
