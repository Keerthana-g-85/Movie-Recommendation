import { useState,useEffect,createContext,useContext } from 'react';
import { DataContext } from '../App.jsx'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import '../style/recommandation.css';

export default function Recommandation(){
    const {data,choice}= useContext(DataContext)
    
    const moviedata = data
    const name = moviedata.filter((data) => data.genre.toLowerCase())

    const textStyle = {
        fontSize: '15px',
        color: '#f5d0d0',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
        marginBottom: '10px',
        textAlign: 'justify',
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 700,
        color: '#ff9b9b',
        fontFamily: 'Trebuchet MS, sans-serif',
        marginBottom: '15px',
        textAlign: 'center',
    };

    const cardStyle = {
        minWidth: '250px',
        maxWidth: '280px',
        height: '500px',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #111111, #2b0000)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(255, 0, 0, 0.25)',
    };

    const imageStyle = {
        width: '75%',
        height: '200px',
        borderRadius: '15px',
        margin: '20px auto 0 auto',
    };

    const scrollStyle = {
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        padding: '20px',
        scrollBehavior: 'smooth',
    };

    return (
        <>
            <Typography sx={textStyle}>
                Recommended For You
            </Typography>

            <Box sx={scrollStyle}>
                {data
                    .filter((movie) =>
                        choice.some((each) =>
                            movie.genre.toLowerCase().includes(each.toLowerCase())
                        )
                    )
                    .map((movie) => (
                        <Card key={movie.id} sx={cardStyle}>
                            <CardMedia
                                component="img"
                                image={movie.poster_path}
                                alt={movie.original_title}
                                sx={imageStyle}
                            />

                            <CardContent>
                                <Typography sx={titleStyle}>
                                    {movie.original_title}
                                </Typography>

                                <Typography sx={textStyle}>
                                    Genre: {movie.genre}
                                </Typography>

                                <Typography sx={textStyle}>
                                    Release: {movie.release_date}
                                </Typography>

                                <Typography sx={textStyle}>
                                    Popularity: {movie.popularity}
                                </Typography>

                                <Typography sx={textStyle}>
                                    Age: {movie.age}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </Box>
        </>
    );
}