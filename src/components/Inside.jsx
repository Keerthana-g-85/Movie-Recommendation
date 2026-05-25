import { useState,useEffect,createContext,useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useParams } from "react-router"
import { DataContext } from '/Users/keerthana/Desktop/Movie/movie-recommendation/src/App.jsx'

import '/Users/keerthana/Desktop/Movie/movie-recommendation/src/style/Inside.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Cast(){
    
    const {data} = useContext(DataContext)
    
    const {id}=useParams();
    const moviedata = data[id]["casts"]
    console.log(moviedata[id].name)
    // console.log(data[id]["casts"][1].name)
    console.log(id);
    return (
        <>

    <Typography className="text">Cast Details:</Typography>

    <Grid container spacing={4}>
        {moviedata.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
                <Card className="cast">
                    <CardMedia component="img" image={movie.profile_path} alt={'Image Not Found'} className="image"/>

                    <CardContent>
                        <Typography className="name">{movie.name}</Typography>

                        <Typography className="text">Character: {movie.character}</Typography>

                        <Typography className="text">Popularity: {movie.popularity}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</>

    )
}