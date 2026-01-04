import tmdb from "../api/tmdb";
import omdbApi from "../api/omdb";

export const searchMovies = async (query:string, page:number=1) => {
  const { data } = await omdbApi.get("", {
    params: {
      s: query,
      type: "movie",
      page,
    },
  });

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};

// Trending movies
export const getTrendingMovies = async (timeWindow = "day", page = 1) =>{
    const res= await tmdb.get(`/trending/movie/${timeWindow}`, {
        params: { page },
    });
    if(res.status !== 200) throw new Error('tmdb fetch failed')
    
        return res.data
}

// Popular movies
export const getPopularMovies = (page = 1) =>
  tmdb.get("/movie/popular", {
    params: { page },
  });

// Now playing
export const getNowPlayingMovies = () =>
  tmdb.get("/movie/now_playing");
