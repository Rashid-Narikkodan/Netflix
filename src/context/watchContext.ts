import { createContext, useContext } from "react";

type WatchContextType = {
  watchingMovieId: number | null;
  setWatchingMovieId: (id: number | null) => void;
};

export const WatchContext = createContext<WatchContextType>({
  watchingMovieId: null,
  setWatchingMovieId: () => {},
});

export const useWatch = () => useContext(WatchContext);
