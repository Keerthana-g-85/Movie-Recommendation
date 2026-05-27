import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getName } from '../redux/userSlice';
import { Box, TextField, Button, Typography, Stack, Container } from '@mui/material';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        dispatch(getName({ name: decoded.name, email: decoded.email }));
        navigate('/choice');
    };

    return (
        <Container component='body' sx={{bgcolor:'black',flexGrow:1}}>
        <Box
            sx={{
                width: 350,
                margin: '100px auto',
                padding: 3,
                boxShadow: 2,
                borderRadius: 2,
                bgcolor: 'white',
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
        Login
            </Typography>

            <TextField
                label="Email"
                fullWidth
                margin="normal"
            />

            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
            />

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate('/choice')}
            >
        Login
            </Button>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => console.log('Login Failed')}
                />
            </Box>
        </Box>
        </Container>
    );
}
