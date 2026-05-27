import { useContext } from 'react';
import { useParams , useNavigate } from 'react-router';
import { DataContext } from '../App.jsx';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

export default function Cast() {
    const { data } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const moviedata = data[id]?.casts;

    const cast = {
        height: '350px',
        background: 'linear-gradient(135deg, #1a1a1a, #000000)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(229, 9, 20, 0.25)',
        transition: 'transform 0.3s ease',

        '&:hover': {
            transform: 'scale(1.03)',
        },
    };

    const image = {
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        margin: '20px auto',
        objectFit: 'cover',
        border: '3px solid #eee7e7',
    };

    const name = {
        color: '#e99fa3',
        fontSize: '22px',
        fontWeight: 700,
        fontFamily: "'Trebuchet MS', sans-serif",
        textAlign: 'center',
        marginBottom: '10px',
    };

    const text = {
        color: '#d1d1d1',
        fontSize: '15px',
        marginTop: '8px',
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: 'center',
    };

    const backButton = {
        color: '#2b0101',     
        borderColor: '#ff0000',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '10px 20px',
        backgroundColor: '#ffffff', 
        marginBottom: '20px',
        zIndex: 9999,
        '&:hover': {
            backgroundColor: '#cccccc',
        },
    };

    return (
        <Box sx={{ backgroundColor: '#111', minHeight: '100vh', padding: '30px',}}>

            <Button variant="contained" onClick={() => navigate('/display')} sx={backButton} startIcon={<ArrowBackIcon />}> Back </Button>

            <Typography
                sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#fcd3d5',
                    fontFamily: "'Trebuchet MS', sans-serif",
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    marginBottom: '30px',
                }}>
                Cast Details
            </Typography>

            <Grid container spacing={4}>
                {moviedata.map((movie) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
                        <Card sx={cast}>
                            <CardMedia
                                component="img"
                                image={movie.profile_path}
                                alt={movie.name}
                                sx={image}/>

                            <CardContent>
                                <Typography sx={name}>{movie.name}</Typography>

                                <Typography sx={text}>Character: {movie.character}</Typography>

                                <Typography sx={text}>Popularity: {movie.popularity}</Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}