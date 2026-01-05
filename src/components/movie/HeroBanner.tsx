import { useEffect, useState } from "react";
import { getRandomMovie } from "../../services/tmdb.service";
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

      {/* Blur layer */}
      <div
        className="
      pointer-events-none
      absolute bottom-0 left-0 right-0
      backdrop-blur-xs
      bg-[#000000]/10
    "
      />
    </div>
  );
};

export default HeroBanner;
