import { useState,useEffect,createContext,useContext } from 'react';
import { DataContext } from '/Users/keerthana/Desktop/Movie/movie-recommendation/src/App.jsx'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '/Users/keerthana/Desktop/Movie/movie-recommendation/src/style/recommandation.css';

export default function Recommandation(){
    const {data,choice}= useContext(DataContext)
    
    const moviedata = data
    const name = moviedata.filter((data) => data.genre.toLowerCase())

    console.log(choice)
    return (
    <>
        <Typography className="text">Recommended For You</Typography>

        <div className="scroll">
            {moviedata
                .filter((movie) =>
                    choice.some((each) =>
                        movie.genre.toLowerCase().includes(each.toLowerCase())))
                .map((movie) => (
                    <Card key={movie.id} className="recommandation-card">
                        <CardMedia component="img" image={movie.poster_path} alt={movie.original_title} className="recommand-photo"/>

                        <CardContent>
                            <Typography className="title">{movie.original_title}</Typography>

                            <Typography className="text">Genre: {movie.genre}</Typography>

                            <Typography className="text">Release: {movie.release_date}</Typography>

                            <Typography className="text">Popularity: {movie.popularity}</Typography>

                            <Typography className="text">Age: {movie.age}</Typography>
                        </CardContent>
                    </Card>
                ))}
        </div>
    </>
)
}