import { useContext } from 'react';
import { DataContext } from '../App';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from 'react-router';

import { useSelector } from 'react-redux';

export default function Watchlist() {

    const navigate = useNavigate();

    const { data, watchlist } = useContext(DataContext);

    const { name,email } = useSelector((state) => state.auth);

    const wantMovie = data.filter((movie) => watchlist.includes(movie.id));

    const heading = {
        fontSize: '32px',
        fontWeight: 700,
        color: '#e50914',
        fontFamily: "'Trebuchet MS', 'Verdana', sans-serif",
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: '40px',
    };

    const empty = {
        color: '#d1d1d1',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: "'Segoe UI', sans-serif",
        marginTop: '80px',
    };

    const card = {
        height: '520px',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #1a1a1a, #000000)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(229, 9, 20, 0.25)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        },
    };

    const image = {
        height: '400px',
        objectFit: 'cover',
        borderRadius: '15px',
        padding: '12px',
    };

    const title = {
        color: '#e50914',
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: "'Trebuchet MS', sans-serif",
        textAlign: 'center',
        letterSpacing: '1px',
    };

    const box = {
        backgroundColor: '#111',
        minHeight: '100vh',
        paddingTop: '30px',
        paddingBottom: '40px',
        position: 'relative', 
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
        <Box sx={box}>
            <Container>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Button variant="contained" onClick={() => navigate('/display')} sx={backButton} startIcon={<ArrowBackIcon />}> Back </Button>

                    {name && (
                        <Box sx={{ textAlign: 'right', color: 'white' }}>
                            <Typography variant="body2">{name}</Typography>
                            <Typography variant="body2">{email}</Typography>
                        </Box>
                    )}
                </Box>

                <Typography sx={heading}>My Watchlist</Typography>

                {wantMovie.length === 0 ? (
                    <Typography sx={empty}>Your watchlist is currently empty.</Typography>
                ) : (
                    <Grid container spacing={4}>
                        {wantMovie.map((movie) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
                                <Card sx={card}>
                                    <CardMedia
                                        component="img"
                                        image={movie.poster_path}
                                        alt={movie.original_title}
                                        sx={image} 
                                    />
                                    <CardContent>
                                        <Typography sx={title}>{movie.original_title}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
}