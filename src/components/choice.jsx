import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';


import { Grid, Button, Typography } from '@mui/material';

import { DataContext } from '../App.jsx';

export default function Choice() {

    const { choice, setChoice } = useContext(DataContext);
    const [disable, setDisable] = useState(true);
    const [select, setSelect] = useState({
        Horror: false, Comedy: false, Thriller: false, Drama: false,
        Family: false, Romance: false, Fantasy: false, Adventure: false,
        Animation: false, Action: false, SciFi: false, Mystery: false,
    });

    const navigate = useNavigate();

    const gridItems = ['Horror', 'Comedy', 'Thriller', 'Drama', 'Family', 'Romance', 'Fantasy', 'Adventure', 'Animation', 'Action', 'SciFi', 'Mystery'];

    function handleChoices(genre) {
        setSelect((prev) => ({ ...prev, [genre]: !prev[genre] }));
        setChoice((prev) => {
            if (prev.includes(genre)) {
                return prev.filter((data) => data !== genre);
            }
            return [...prev, genre];
        });
    }

    useEffect(() => {
        setDisable(choice.length < 3);
    }, [choice]);

    const heading = {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '30px',
    };

    const gridContainer = {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        gap: '10px',
    };

    const submitBtn = {
        left: '81%',
        width: '130px',
        height: '70px',
        fontFamily: "'Trebuchet MS', 'Verdana', sans-serif",
        fontStyle: 'italic',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        background: 'linear-gradient(135deg, #000000 , #7f1d1d)',
        borderRadius: '16px',
        cursor: 'pointer',
        color: '#f89595',
        boxShadow: '0 8px 20px rgba(255, 0, 0, 0.5)',
        '&.Mui-disabled': {
            background: 'linear-gradient(135deg, #747171 , #595454)',
            color: '#a0a0a0',
            boxShadow: 'none',
            pointerEvents: 'auto',
            cursor: 'not-allowed',
        },
    };

    return (
        <>
            <Typography variant="h4" sx={heading}> Select At Least 3 Genres </Typography>

            <Grid container spacing={4} sx={gridContainer}>
                {gridItems.map((item, id) => (
                    <Grid key={id} md={3} sx={{
                        height: '240px',
                        width: '320px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: select[item]
                            ? 'linear-gradient(135deg, #114118, #09480b)'
                            : 'linear-gradient(135deg, #6b1212, #000000)',
                        borderRadius: '18px',
                        boxShadow: '0 10px 25px rgba(127, 29, 29, 0.6)',
                        transition: 'transform 0.3s ease',
                    }}>
                        <ChildChoice label={item} handleClick={() => handleChoices(item)} />
                    </Grid>
                ))}
            </Grid>

            <Button className="submit-btn" disabled={disable} onClick={() => navigate('/Display')} sx={submitBtn}>
                Submit
            </Button>
        </>
    );
}

function ChildChoice({ handleClick, label }) {
    const childButton = {
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '18px',
        background: 'transparent',
        color: 'white',
        fontSize: '22px',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontFamily: "'Trebuchet MS', 'Verdana', sans-serif",
        fontStyle: 'italic',
        cursor: 'pointer',
    };

    return (
        <Button onClick={handleClick} sx={childButton}> {label}</Button>
    );
}