import { useState,useEffect,createContext,useContext } from 'react';
import { DataContext } from '../App.jsx'
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import '../style/choice.css';
import Typography from '@mui/material/Typography';

export default function Choice(){
    const { choice, setChoice } = useContext(DataContext);
    const [disable,setDisable] = useState(true);

    let nav=useNavigate()

    function handleChoices(genre){
        setChoice ((prev)=>{
        if (prev.includes(genre)){
            return prev.filter((data)=>data!=genre)
        }
        else{
            return [...prev,genre]
        }
        })
        }

        useEffect(()=>{
        if (choice.length >= 3){
        setDisable(false)}
        },[choice])

    return(
        <>
            <Typography>Select Atleast Choices</Typography>
            <Grid container spacing={4} className="grid-container">  

                <Grid item md={3} className="grid-item">
                    <ChildChoice  label="Horror" handleClick={()=>handleChoices('Horror')}/>
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Comedy" handleClick={() => handleChoices('Comedy')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Thriller" handleClick={() => handleChoices('Thriller')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Drama" handleClick={() => handleChoices('Drama')} />
                </Grid> 

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Family" handleClick={() => handleChoices('Family')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Romance" handleClick={() => handleChoices('Romance')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Fantasy" handleClick={() => handleChoices('Fantasy')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Adventure" handleClick={() => handleChoices('Adventure')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Animation" handleClick={() => handleChoices('Animation')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Action" handleClick={() => handleChoices('Action')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Sci-Fi" handleClick={() => handleChoices('Sci-Fi')} />
                </Grid>

                <Grid item md={3} className="grid-item">
                    <ChildChoice label="Mystery" handleClick={() => handleChoices('Mystery')} />
                </Grid>
            </Grid>
            <Button className='submit-btn' disabled={disable} onClick={()=>{nav('/Display')}}>Submit</Button>

        </>
    )
}

function ChildChoice({handleClick,label}){
    return(
    <Button className='choice-btn' onClick={handleClick} >{label}</Button>
    )
}

