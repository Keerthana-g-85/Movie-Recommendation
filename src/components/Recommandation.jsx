import { useContext } from 'react';
import { DataContext } from '../App.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Recommendation() {
    const { data, choice } = useContext(DataContext);

    const text = {
        fontSize: '14px',
        color: 'white',
        fontFamily: '\'Segoe UI\', sans-serif',
        lineHeight: 1.6,
        marginBottom: '8px',
    };

    const title = {
        fontSize: '20px',
        fontWeight: 700,
        color: '#df7d7d',
        fontFamily: '\'Trebuchet MS\', \'Verdana\', sans-serif',
        letterSpacing: '1px',
        textAlign: 'center',
        marginBottom: '12px',
    };

    const card = {
        minWidth: '260px',
        maxWidth: '260px',
        flexShrink: 0,
        backgroundColor: '#1f1f1f',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(229, 9, 20, 0.25)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.04)',
        },
    };

    const image = {
        height: '350px',
        objectFit: 'cover',
    };

    const scroll = {
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        padding: '20px',
        scrollBehavior: 'smooth',
        backgroundColor: '#111',
        '&::-webkit-scrollbar': {
            height: '8px',
        },
    };

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
            <Typography sx={heading} > Recommended For You </Typography>

            <Box sx={scroll}>
                {data
                    .filter((movie) =>
                        choice.some((genre) =>
                            movie.genre.toLowerCase().includes(genre.toLowerCase()),
                        ),
                    )
                    .map((movie) => (
                        <Card key={movie.id} sx={card}>
                            <CardMedia
                                component="img"
                                image={movie.poster_path}
                                alt={movie.original_title}
                                sx={image}/>

                            <CardContent>
                                <Typography sx={title}> {movie.original_title}</Typography>

                                <Typography sx={text}> Genre: {movie.genre}</Typography>

                                <Typography sx={text}> Release: {movie.release_date} </Typography>

                                <Typography sx={text}> Popularity: {movie.popularity} </Typography>

                                <Typography sx={text}> Age: {movie.age} </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </Box>
        </>
    );
}
