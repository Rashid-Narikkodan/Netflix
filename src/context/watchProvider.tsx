import { useState } from "react";
import { WatchContext } from "./watchContext";

export const WatchProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchingMovieId, setWatchingMovieId] = useState<number | null>(null);

  return (
    <WatchContext.Provider value={{ watchingMovieId, setWatchingMovieId }}>
      {children}
    </WatchContext.Provider>
  );
};
