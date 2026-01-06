import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { fetchRows } from "../../utils/fetchRow";
import type { MovieRow as MovieRowType } from "../../types/row";
import Loader from "../common/Loader";

const RowContainer = () => {
  const [rows, setRows] = useState<MovieRowType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRows()
      .then(setRows)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="px-6 py-10 text-sm text-red-500">Failed to load movies</p>
    );
  }

  return (
    <main className="flex flex-col">
      {rows.map((row) => (
        <MovieRow key={row.title} row={row} />
      ))}
    </main>
  );
};

export default RowContainer;
