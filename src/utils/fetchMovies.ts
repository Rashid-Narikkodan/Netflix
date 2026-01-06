import tmdb from "../api/tmdb";
import {
  getTrendingMovies,
  getPopularMovies,
  getNowPlayingMovies,
} from "../services/tmdb.service";
import type { FetcherInput } from "../types/fetcher";

export const fetcherMap = {
  trending: ({ options, page = 1 }: FetcherInput) =>
    getTrendingMovies(options?.timeWindow, page),

  popular: ({ page = 1 }: FetcherInput) => getPopularMovies(page),

  nowPlaying: ({ page = 1 }: FetcherInput) => getNowPlayingMovies(page),

  upcoming: ({ page = 1 }: FetcherInput) =>
    tmdb.get("/movie/upcoming", { params: { page } }).then((res) => res.data),

  topRated: ({ page = 1 }: FetcherInput) =>
    tmdb.get("/movie/top_rated", { params: { page } }).then((res) => res.data),

  discover: ({ params = {}, page = 1 }: FetcherInput) =>
    tmdb
      .get("/discover/movie", {
        params: { page, ...params },
      })
      .then((res) => res.data),
};

export type FetcherKey = keyof typeof fetcherMap;
