import { Trash } from "lucide-react";
import type { WatchlistItem } from "../../types/watchlist";
import { removeFromWatchlist } from "../../services/db.service";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // smaller for grid

const WatchListCard = ({
  movie,
  onClick,
  onDelete
}: {
  movie: WatchlistItem;
  onClick: () => void;
  onDelete: () => void;
}) => {


  return (
    <div
      className="relative w-full rounded-lg overflow-hidden bg-[#1f1f1f] text-white cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      {/* Poster Image */}
      <div className="relative w-full h-60 sm:h-80">
        {movie.posterPath ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.posterPath}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-zinc-800 flex items-center justify-center text-zinc-400">
            No Image
          </div>
        )}
      </div>

      {/* Title & Action */}
      <div className="p-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold line-clamp-2">{movie.title}</h3>
        <button onClick={(e)=>{e.stopPropagation(); removeFromWatchlist(Number(movie.id)); onDelete?.()}} className="h-8 w-8 rounded-full border border-zinc-500 flex items-center justify-center hover:border-white transition">
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default WatchListCard;
