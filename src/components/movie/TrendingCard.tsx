import type { Movie } from "../../types/movie";

const TrendingCard = ({ card, index }: { card: Movie; index: number }) => {
  const handleClick=()=>{
    
  }
  return (
    <div className="trending-card" onClick={handleClick}>
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

export default TrendingCard;
