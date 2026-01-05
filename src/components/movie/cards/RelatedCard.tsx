import type { MovieDetails } from "../../../types/movie";
import { Plus } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const RelatedCard = ({movie, onClick}:{movie:MovieDetails,onClick:()=>void}) => {

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (

         <div
        className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-xl bg-[#1f1f1f] text-white shadow-2xl movie-card"
        onClick={onClick}
        >
        {/* Backdrop */}
        <div className="relative w-full">
          {movie.backdrop_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          )}
       
        </div>

        {/* Meta Info */}
        <div className="p-3 sm:p-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-300 mb-3">
            <div>
            <span className="border border-zinc-500 px-1 text-xs">
              {movie.adult ? "18+" : "13+"}
            </span>
            <span className="pl-4">{releaseYear}</span>
            </div>
              <button className="h-10 w-10 rounded-full border border-zinc-500 flex items-center justify-center hover:border-white transition">
                <Plus size={18} />
              </button>
          </div>

          {/* Description */}
          <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
            {movie.overview || "No description available."}
          </p>
        </div> 
    </div>   
  )
}

export default RelatedCard