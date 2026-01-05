import { ROW_CONFIG } from "../config/row.config";
import { fetcherMap } from "./fetchMovies";
import type { MovieRow } from "../types/row";

export async function fetchRows(): Promise<MovieRow[]> {
  return Promise.all(
    ROW_CONFIG.map(async (row) => {
      const fetcher = fetcherMap[row.fetcher];

      const data = await fetcher(row);

      return {
        title: row.title,
        movies: data.results
      };
    })
  );
}
