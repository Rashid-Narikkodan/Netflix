export type WatchlistItem = {
  id: string;          // Firestore doc id (string version of movieId)
  movieId: number;
  title: string;
  posterPath: string;
  mediaType: "movie" | "tv";
  addedAt: unknown; // Firestore Timestamp (keep loose unless needed)
};
