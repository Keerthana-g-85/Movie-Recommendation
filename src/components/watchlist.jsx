import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { DataContext } from '../App';

export default function Watch({ movie }) {
    const { watchlist, setWatchlist } = useContext(DataContext);
    const [add, setAdd] = useState(false);

    const inWatchlist = watchlist.includes(movie.id);

    function handleWatched() {
        if (add) {
            setAdd(false);
        } else {
            setAdd(true);
        }
    }

    function handleWatchlist() {
        if (watchlist.includes(movie.id)) {
            setWatchlist(
                watchlist.filter((item) => item !== movie.id),
            );
        } else {
            setWatchlist([...watchlist, movie.id]);
        }
    }

    const button = {
        marginRight: '10px',
        background: 'linear-gradient(135deg, #410609, #7a0008)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(229, 9, 20, 0.35)',
        textTransform: 'none',
        fontWeight: 600,
        fontFamily: '\'Trebuchet MS\', \'Verdana\', sans-serif',
        letterSpacing: '1px',
        padding: '8px 16px',
        transition: 'all 0.3s ease',

        '&:hover': {
            background: 'linear-gradient(135deg, #3e0408, #490d11)',
            transform: 'scale(1.05)',
            boxShadow: '0 8px 20px rgba(229, 9, 20, 0.5)',
        },
    };

    const secondaryButton = {
        background: 'linear-gradient(135deg, #410609, #7a0008)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
        minWidth: '120px',
        fontWeight: 700,
        fontFamily: '\'Trebuchet MS\', \'Verdana\', sans-serif',
        transition: 'all 0.3s ease',

        '&:hover': {
            background: 'linear-gradient(135deg, #333, #111)',
            transform: 'scale(1.05)',
        },
    };

    return (
        <>
            <Button sx={button} onClick={handleWatched}> {add ? 'Completed' : 'To Watch'} </Button>

            <Button
                sx={secondaryButton}
                onClick={handleWatchlist}
                startIcon={
                    inWatchlist ? <DeleteIcon /> : <BookmarkAddIcon />
                } > {inWatchlist ? 'Remove' : 'Add'}
            </Button>
        </>
    );
}
