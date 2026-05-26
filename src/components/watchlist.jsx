import {useState,useContext} from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { DataContext } from '../App'


import '../style/Watchlist.css';
export default function Watch({movie}){
    const { watchlist, setWatchlist } = useContext(DataContext);
    const[add , setAdd] = useState(false)

    function handleWatched() {
        if (add){
            setAdd(false)
        }
        else{
            setAdd(true)
        }
    }
    
    function handleWatchlist() {
    if (watchlist.includes(movie.id)) {
      setWatchlist(
        watchlist.filter((item) => item !== movie.id)
      );
    } else {
      setWatchlist([...watchlist, movie.id]);
    }
  }

  const button = {
    marginRight: '10px',
    background: 'linear-gradient(135deg, #020202, #3f2424)',
    color: 'rgb(242, 232, 232)',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(255, 0, 0, 0.3)',
  };

  return (
    <>
      <Button sx={button} onClick={handleWatched}>
        {add ? 'Completed' : 'To Watch'}
      </Button>

      <Button sx={button} onClick={handleWatchlist}>
        {watchlist.length> 0 && watchlist.includes(movie.id) ? 'Remove' : '+'}
      </Button>
    </>
  );
}

