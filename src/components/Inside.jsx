import { useState,useEffect,createContext,useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useParams } from "react-router"
import { DataContext } from '../App.jsx'

import '../style/Inside.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { textFieldClasses } from '@mui/material/TextField';


export default function Cast(){
    
    const {data} = useContext(DataContext)
    
    const {id}=useParams();
    const moviedata = data[id]["casts"]
    console.log(moviedata[id].name)
    // console.log(data[id]["casts"][1].name)
    console.log(id);
    const cast = {
        background: 'linear-gradient(135deg, #111111, #f09ae0)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(228, 4, 194, 0.25)',
    };

    const image = {
        width: '150px',
        height: '150px',
        borderRadius: '10%',
        margin: '15px auto',
    };

    const name = {
        color: '#d487a9',
        fontSize: '24px',
        fontWeight: 900,
        fontFamily: 'Trebuchet MS, sans-serif',
        fontStyle: 'italic',
    };

    const text = {
        color: '#d487a9',
        fontSize: '16px',
        marginTop: '10px',
        fontFamily: 'Trebuchet MS, sans-serif',
        fontStyle: 'italic',
    };

    return (
        <>
            <Typography sx={text}>
                Cast Details:
            </Typography>

            <Grid container spacing={4}>
                {moviedata.map((movie) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
                        <Card sx={cast}>
                            <CardMedia
                                component="img"
                                image={movie.profile_path}
                                alt="Image Not Found"
                                sx={image}
                            />

                            <CardContent>
                                <Typography sx={name}>
                                    {movie.name}
                                </Typography>

                                <Typography sx={textFieldClasses}>
                                    Character: {movie.character}
                                </Typography>

                                <Typography sx={text}>
                                    Popularity: {movie.popularity}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}