import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movieService";
import TrendingCard from "./TrendingCard";
import type { Movie } from "../../types/movie";
import "../../styles/trending.css";

const TrendingMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <p className="px-4 text-gray-400">Loading...</p>;
  if (error) return <p className="px-4 text-red-500">{error}</p>;

  return (
    <section className="px-4 py-6 md:px-8">
      <h2 className="mb-4 p-5 text-3xl font-semibold text-white sm:text-xl md:text-3xl">
        Trending Now
      </h2>

      <div className="trending-carousel">
        {movies.map((movie, idx) => (
          <TrendingCard key={movie.id} card={movie} index={idx + 1} />
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
