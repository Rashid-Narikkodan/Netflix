import type { FetcherKey } from "../utils/fetchMovies";

export type RowConfig = {
  title: string;
  fetcher: FetcherKey;
  params?: Record<string, unknown>;
  options?: Record<string, unknown>;
};

export const ROW_CONFIG: RowConfig[] = [
  {
    title: "New on Netflix",
    fetcher: "discover",
    params: {
      with_watch_providers: 8,
      watch_region: "IN",
      sort_by: "primary_release_date.desc",
    },
  },
  {
    title: "Today's Top",
    fetcher: "trending",
    options: { timeWindow: "day" },
  },
  {
    title: "Upcoming",
    fetcher: "upcoming",
  },
  {
    title: "Top Rated",
    fetcher: "topRated",
  },
  {
    title: "Kids",
    fetcher: "discover",
    params: {
      certification_country: "US",
      certification_lte: "G",
    },
  },
  {
    title: "Action",
    fetcher: "discover",
    params: { with_genres: 28 },
  },
  {
    title: "Comedy",
    fetcher: "discover",
    params: { with_genres: 35 },
  },
  {
    title: "Popular",
    fetcher: "popular",
  },
  {
    title: "Now Playing",
    fetcher: "nowPlaying",
  },
];
