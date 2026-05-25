import { useState,useEffect,createContext,useContext } from 'react';
import { DataContext } from '../App.jsx'
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import '../style/choice.css'
import Typography from '@mui/material/Typography';

export default function Choice(){
    const { choice, setChoice } = useContext(DataContext);
    const [disable,setDisable] = useState(true);
    const [select,setSelect] = useState({Horror:false , Comedy:false , Thriller:false , Drama:false , Family:false ,
        Romance:false , Fantasy:false , Adventure:false , Animation:false , Action:false , SciFi:false , Mystery:false
    })
const grid = ["Horror", "Comedy","Thriller","Drama","Family","Romance","Fantasy","Adventure","Animation","Action","SciFi","Mystery"];
    let nav=useNavigate()
    function handleChoices(genre){
        setChoice ((prev)=>{
        if (prev.includes(genre)){
            setSelect({...select, [genre]:true})

            return prev.filter((data)=>data!=genre)
            
        }
        else{
            setSelect({...select, [genre]:false})
            return [...prev,genre]
            
        }
        })
        
        }
    
    // useEffect(()=>{
    //     console.log(select)
    // },[select])

        useEffect(()=>{
        if (choice.length >= 3){
        setDisable(false)}
        },[choice])

    return(
        <>
            <Typography>Select Atleast Choices</Typography>
            <Grid container spacing={4} className='grid-container'>  
                { grid.map((item,id)=>{
                    return <Grid key={id} item md={3} className={` ${select[item] ? 'changeColor': '' } grid-item`}>
                    <ChildChoice  label={item} handleClick={()=>handleChoices(item)} />
                </Grid>
                })}

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

