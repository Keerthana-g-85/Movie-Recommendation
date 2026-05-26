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
        function handleChoices(genre){
        setSelect({...select, [genre]:!select[genre]})
        setChoice ((prev)=>{
        if (prev.includes(genre)){
            return prev.filter((data)=>data!=genre)          
        }
        else{
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
            <Grid container spacing={4} className='grid-container' sx={{justifyContent: "center",alignItems: "center",padding: "30px",gap: "10px"}}>  
                { grid.map((item,id)=>{
                    // return <Grid key={id} item md={3} className={` ${select[item] ? 'changeColor': '' } grid-item`}>
            
                    return <Grid key={id} item md={3} sx={{
                                height: "330px",
                                width: "400px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: select[item]
                                    ? "linear-gradient(135deg, #1ca221, #263727)"
                                    : "linear-gradient(135deg, #7f1d1d, #000000)",
                                borderRadius: "18px",
                                boxShadow:
                                    "0 10px 25px rgba(127, 29, 29, 0.6)",
                                transition: "transform 0.3s ease",
                            }}
                        >
                    <ChildChoice  label={item} handleClick={()=>handleChoices(item)} />
                </Grid>
                })}

            </Grid>
                    <Button className='submit-btn' disabled={disable} onClick={()=>{nav('/Display')}} sx={{
                    left: "81%",
                    width: "130px",
                    height: "70px",
                    fontFamily: "'Trebuchet MS', 'Verdana', sans-serif",
                    fontStyle: "italic",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background:
                        "linear-gradient(135deg, #000000 ,  #7f1d1d)",
                    borderRadius: "16px",
                    cursor: "pointer",
                    color: "#f89595",
                    boxShadow: "0 8px 20px rgba(255, 0, 0, 0.5)",

                    "&.Mui-disabled": {
                        background:
                            "linear-gradient(135deg, #747171 ,  #595454)",
                        color: "#a0a0a0",
                        boxShadow: "none",
                        pointerEvents: "auto",
                        cursor: "not-allowed",
                    },}}>Submit</Button>

        </>
    )
}

function ChildChoice({handleClick,label}){
    return(
    <Button className='choice-btn' onClick={handleClick} sx={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "18px",
                background: "transparent",
                color: "#f89595",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Trebuchet MS', 'Verdana', sans-serif",
                fontStyle: "italic",
                cursor: "pointer",
            }}>{label}</Button>
    )
}

