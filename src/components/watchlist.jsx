import {useState} from 'react'
import Button from '@mui/material/Button';
import '/Users/keerthana/Desktop/Movie/movie-recommendation/src/style/Watchlist.css';
export default function Watch(){

    const[watchlist,setWatchlist] = useState(false)
    const[add , setAdd] = useState(false)

    function handleWatched() {
        if (add){
            setAdd(false)
        }
        else{
            setAdd(true)
        }
    }
    
    function handleWatchlist(){
        if (watchlist){
            setWatchlist(false)
        }
        else{
            setWatchlist(true)
        }
    }
    return(
        <>
            <Button className="watch-btn" onClick={handleWatched}>{add ? 'Completed':'To Watch'}</Button>
            <Button className="watch-btn" onClick={handleWatchlist}> {watchlist ? 'Remove':'+'}</Button>
        </>
    )
}


