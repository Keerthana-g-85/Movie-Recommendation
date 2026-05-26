import { useContext } from 'react';
import { DataContext } from '../App';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Watchlist() {
  const { data, watchlist } = useContext(DataContext);

  // Filter the full data list based on the watchlist IDs
  const wantMovie = data.filter((movie) => watchlist.includes(movie.id));

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ color: '#ff9b9b', mb: 4, textAlign: 'center' }}>
        My Watchlist
      </Typography>

      {wantMovie.length === 0 ? (
        <Typography sx={{ color: '#f5d0d0', textAlign: 'center' }}>
          Your watchlist is currently empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {wantMovie.map((movie) => (
            <Grid size={{ xs: 12, md: 4 }} key={movie.id}>
              <Card
                sx={{
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #201515, #770404)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 20px rgba(255, 0, 0, 0.3)',
                }}
              >
                <CardMedia
                  component="img"
                  image={movie.poster_path}
                  alt={movie.original_title}
                  sx={{ height: '300px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#ff9b9b', textAlign: 'center' }}>
                    {movie.original_title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}