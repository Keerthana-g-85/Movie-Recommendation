import { useState,useEffect,createContext,useContext } from 'react';
import Watch from './watchlist.jsx'
import Cast from './Inside.jsx'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useParams } from "react-router"
import { DataContext } from '/Users/keerthana/Desktop/Movie/movie-recommendation/src/App.jsx'
import Recommandation from './Recommandation.jsx'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style/display.css';


export function Display(){

    const {data,choice} = useContext(DataContext)

    const [search,setSearch] = useState('')
    const [debounce,setDebounce] = useState('')
    const [movieid,setMovieid] = useState(null)

    useEffect(()=>{
        const debounceTimer = setTimeout(()=>{
            setDebounce(search)
        },1000);
        return ()=>clearTimeout(debounceTimer)
    },[search])


    const searchBook = data.filter((data) => {
    return data.original_title.toLowerCase().includes(debounce.toLowerCase()) ||
            String(data.popularity).startsWith(debounce) || data.genre.toLowerCase().includes(debounce.toLowerCase()) })

    function handleToGo(movie_id){
        console.log(movie_id)
        setMovieid(movie_id)
    }
    return(
        <>
        
        <input className="search-box" type='text' placeholder="Search...." value={search} onChange={(e)=>setSearch(e.target.value)}/> 
        <Recommandation />
        <Typography className='text'>Movie:</Typography>
        <Grid container spacing={3}>
            {searchBook.map((movie, id) => (
            <Grid size={{ xs: 12, md: 4 }} key={movie.id} className="grid">
            <Card className="card">

                <Link to={`/cast/${id}`} style={{ textDecoration: 'none' }}>
                    <Button className="choice-btn" onClick={() => handleToGo(movie.movie_id)}>
                        <CardMedia
                            component="img"
                            image={movie.poster_path}
                            alt={movie.original_title}
                            className="photo"
                        />
                    </Button>
                </Link>

            <CardContent className="content">
                <Typography className="title">{movie.original_title}</Typography>

                <Typography className="text">Synopsis: {movie.overview}</Typography>

                <Typography className="text">Release Date: {movie.release_date}</Typography>

                <Typography className="text">Popularity: {movie.popularity}</Typography>

                <Typography className="text">Genre: {movie.genre}</Typography>

                <Typography className="text">Age: {movie.age}</Typography>

                <Watch />
            </CardContent>

    </Card>
</Grid>
    ))}
</Grid>
        </>
    )
}
