import { memo } from "react";
import type { MovieDetails } from "../../../types/movie";

const TrendingCard = ({ card, index, onClick }: { card: MovieDetails; index: number, onClick:()=>void }) => {
  return (
    <div className="trending-card" onClick={()=>onClick()}>
      {card.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${card.poster_path}`}
          alt={card.title}
          className="trending-img"
        />
      )}
      <span className="trending-index">{index}</span>
    </div>
  );
};

export default memo(TrendingCard);
