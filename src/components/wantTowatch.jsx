import { useContext } from 'react';
import { DataContext } from '../App';

export default function WatchlistPage() {
  const { data, watchlist } = useContext(DataContext);

  const wantMovie = data.filter((movie) =>
    watchlist.includes(movie.id)
  );

  return (
    <div>
      <h1>My Watchlist</h1>

      {wantMovie.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.poster_path}
              alt={movie.original_title}
              width="150"
            />
            <h3>{movie.original_title}</h3>
          </div>
        ))
      }
    </div>
  );
}