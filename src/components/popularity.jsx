import { useState,useEffect,createContext,useContext } from 'react';
import { DataContext } from '../App.jsx'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export function Popularity(){
     const {data}= useContext(DataContext)
     const moviedata = data
     const topten = moviedata.sort((a,b)=>(b.popularity-a.popularity)).slice(0,10);
     console.log(topten)

     return(
        <>
        <div className="scroll" style={{display: 'flex', gap: '20px', overflow : 'auto',padding: '20px' ,scrollBehavior: 'smooth'}}>
        {topten.map((movie) => (
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
