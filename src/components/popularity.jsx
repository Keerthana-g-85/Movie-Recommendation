import { useContext } from 'react';
import { DataContext } from '../App.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Popularity() {
    const { data } = useContext(DataContext);

    const topten = [...data]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10);
    
        const heading = {
        fontSize: '18px',
        fontWeight: 100,
        color: 'white',
        fontFamily: '\'Trebuchet MS\', \'Verdana\', sans-serif',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontStyle: 'italic',
        marginTop: '20px',
        marginBottom: '20px',
    }

    return (
        <>
        <Typography sx={heading} > Top 10 Movie </Typography>
        <Box sx={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                padding: '20px',
                scrollBehavior: 'smooth',
                backgroundColor: '#111',
                '&::-webkit-scrollbar': {
                    height: '8px',
                },}}>
            {topten.map((movie) => (
                <Card
                    key={movie.id}
                    sx={{
                        minWidth: 260,
                        maxWidth: 260,
                        backgroundColor: '#1f1f1f',
                        color: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 8px 20px rgba(229, 9, 20, 0.25)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                        '&:hover': {
                            transform: 'scale(1.04)',
                        },
                    }}>
                    <CardMedia
                        component="img"
                        image={movie.poster_path}
                        alt={movie.original_title}
                        sx={{
                            height: 350,
                            objectFit: 'cover',
                        }}/>

                    <CardContent>
                        <Typography sx={{
                                color: '#d76d73',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '10px',
                            }}>{movie.original_title} </Typography>

                        <Typography sx={{ color: 'white', fontSize: '14px' }}>Genre: {movie.genre}</Typography>

                        <Typography sx={{ color: 'white', fontSize: '14px' }}>Release: {movie.release_date}</Typography>

                        <Typography sx={{ color: 'white', fontSize: '14px' }}>Popularity: {movie.popularity}</Typography>

                        <Typography sx={{ color: 'white', fontSize: '14px' }}>Age: {movie.age}</Typography>

                    </CardContent>
                </Card>
            ))}
        </Box>
        </>
    );
}
