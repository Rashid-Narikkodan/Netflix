import { useEffect, useState } from "react";
import { getRandomMovie } from "../../services/movieService";
import ProtectedHeader from "../layout/ProtectedHeader";
import type { MovieDetails } from "../../types/movie";
import HeroContent from "./HeroContent";

const HeroBanner = () => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const m = await getRandomMovie();
      console.log(m);
      setMovie(m);
    };
    fetchMovie();
  }, []);

  const backgroundImage = `https://image.tmdb.org/t/p/w1280${
    movie ? movie.backdrop_path : ""
  }`;

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <ProtectedHeader />
      <HeroContent movie={movie} />
      
    </div>
  );
};

export default HeroBanner;
