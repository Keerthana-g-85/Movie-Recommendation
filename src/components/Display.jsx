import { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router';


import Recommendation from './Recommandation.jsx';
import Popularity from './popularity.jsx';
import Watch from './watchlist.jsx';
import ButtonAppBar from './navigation.jsx';
import { DataContext } from '../App.jsx';


import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Display() {

    const { data } = useContext(DataContext);

    const [search, setSearch] = useState('');
    const [debounce, setDebounce] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebounce(search);
        }, 1000);

        return () => clearTimeout(debounceTimer);
    }, [search]);

    const filteredMovies = data.filter((movie) => {
        const searchMovie =
            movie.original_title.toLowerCase().includes(debounce.toLowerCase()) ||
            String(movie.popularity).startsWith(debounce) ||
            movie.genre.toLowerCase().includes(debounce.toLowerCase());

        const filterGenre =
            filter === '' || movie.genre.toLowerCase().includes(filter.toLowerCase());

        return searchMovie && filterGenre;
    });

    const textStyle = {
        fontSize: '14px',
        color: '#d1d1d1',
        fontFamily: '\'Segoe UI\', sans-serif',
        lineHeight: 1.6,
        marginBottom: '10px',
    };

    const box ={
        backgroundColor: '#111',
        Height: '100vh',
        paddingBottom: '40px',
    };

    const heading ={
        fontSize: '18px',
        fontWeight: 100,
        color: '#f3f0f0',
        fontFamily: '\'Trebuchet MS\', sans-serif',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '30px',
    };

    const card = {
        height: '800px',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #1a1a1a, #000000)',
        borderRadius: '20px',
        boxShadow:'0 10px 25px rgba(229, 9, 20, 0.25)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.02)',
        },
    };

    const image ={
         width: '80%',
        height: '350px',
        objectFit: 'cover',
        borderRadius: '15px',
        margin: '20px auto',
    }

    const title ={
        fontSize: '24px',
        fontWeight: 700,
        color: '#e97177',
        fontFamily:'\'Trebuchet MS\', sans-serif',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: '15px',
    }
    return (
        <Box sx={box} >
            <ButtonAppBar search={search} setSearch={setSearch} setFilter={setFilter}/>

            <Box sx={{ marginBottom: '40px' }}>
                <Popularity />
            </Box>

            <Box sx={{ marginBottom: '40px' }}>
                <Recommendation />
            </Box>

            <Typography sx={heading}> Movies </Typography>

            <Grid container spacing={4} sx={{ padding: '20px' }}>
                {filteredMovies.map((movie, id) => (
                    <Grid size={{ xs: 12, md: 4 }} key={movie.id}>
                        <Card sx={ card }>
                            <Link to={`/cast/${id}`} style={{ textDecoration: 'none' }} >
                                <CardMedia component="img" image={movie.poster_path} alt={movie.original_title} sx={image}/>
                            </Link>

                            <CardContent sx={{ padding: '20px', flexGrow: 1, }} >
                                <Typography sx={title} > {movie.original_title} </Typography>

                                <Typography
                                    sx={{
                                        ...textStyle,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 4,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        minHeight: '90px',
                                    }}>
                                    Synopsis: {movie.overview}
                                </Typography>

                                <Typography sx={textStyle}> Release Date: {movie.release_date}</Typography>

                                <Typography sx={textStyle}> Popularity: {movie.popularity} </Typography>

                                <Typography sx={textStyle}> Genre: {movie.genre}</Typography>

                                <Typography sx={textStyle}> Age: {movie.age} </Typography>

                                <Watch movie={movie} />

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
