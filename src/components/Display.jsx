import { useState,useEffect,createContext,useContext } from 'react';
import React , {lazy , Suspense} from 'react';
import Watch from './watchlist.jsx'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useParams } from "react-router"
import { DataContext } from '../App.jsx'
import Recommandation from './Recommandation.jsx'
import {Popularity} from './popularity.jsx'
import ButtonAppBar from './navigation.jsx'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style/display.css';

export function Display(){

    const {data,choice} = useContext(DataContext)

    const [search,setSearch] = useState('')
    const [debounce,setDebounce] = useState('')
    const [filter,setFilter] = useState('')

    useEffect(()=>{
        const debounceTimer = setTimeout(()=>{
            setDebounce(search)
        },1000);

        const returnFunc =  ()=>{
            console.log('Clearing timeout')
        }

        return returnFunc;
    },[search])

    const FilteredBooks= data.filter((data) => {
    const searchBook = data.original_title.toLowerCase().includes(debounce.toLowerCase()) ||
            String(data.popularity).startsWith(debounce) || data.genre.toLowerCase().includes(debounce.toLowerCase());
    const FilterGenre =  data.genre.toLowerCase().includes(filter.toLowerCase());

    return searchBook && FilterGenre
})


    return(
        <>
        <ButtonAppBar search={search} setSearch={setSearch} setFilter={setFilter}/>
        {/* <input className="search-box" type='text' placeholder="Search...." value={search} onChange={(e)=>setSearch(e.target.value)}/>  */}
        <Popularity/>
        <Recommandation />
        <Typography
                sx={{
                    fontSize: '15px',
                    color: '#f5d0d0',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: 1.6,
                    marginBottom: '10px',
                    textAlign: 'justify',
                }} > Movie:
            </Typography>
        <Grid container spacing={3}>
                {FilteredBooks.map((movie, id) => (
                    <Grid size={{ xs: 12, md: 4 }} key={movie.id}>
                        <Card
                            sx={{
                                height: '850px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                background:
                                    'linear-gradient(135deg, #201515, #770404)',
                                borderRadius: '30px',
                                boxShadow:
                                    '0 10px 25px rgba(255, 0, 0, 0.25)',
                            }}>
                                
                            <Link
                                to={`/cast/${id}`}
                                style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    image={movie.poster_path}
                                    alt={movie.original_title}
                                    sx={{
                                        width: '50%',
                                        height: '300px',
                                        borderRadius: '15px',
                                        margin: '20px',
                                    }}/>
                            </Link>

                            <CardContent sx={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    flexGrow: 1,
                                }}>
                            < Typography sx={{
                                        fontSize: '28px',
                                        fontWeight: 700,
                                        color: '#ff9b9b',
                                        fontFamily: 'Trebuchet MS, sans-serif',
                                        marginBottom: '15px',
                                        textAlign: 'center',
                                    }}> {movie.original_title}</Typography>

                            <Typography sx={{
                                        fontSize: '15px',
                                        color: '#f5d0d0',
                                        fontFamily: 'Arial, sans-serif',
                                        lineHeight: 1.6,
                                        marginBottom: '10px',
                                        textAlign: 'justify',
                                    }}> Synopsis: {movie.overview} </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        color: '#f5d0d0',
                                        fontFamily: 'Arial, sans-serif',
                                        lineHeight: 1.6,
                                        marginBottom: '10px',
                                        textAlign: 'justify',}}>Release Date: {movie.release_date}</Typography>

                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        color: '#f5d0d0',
                                        fontFamily: 'Arial, sans-serif',
                                        lineHeight: 1.6,
                                        marginBottom: '10px',
                                        textAlign: 'justify',
                                    }}>Popularity: {movie.popularity}</Typography>

                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        color: '#f5d0d0',
                                        fontFamily: 'Arial, sans-serif',
                                        lineHeight: 1.6,
                                        marginBottom: '10px',
                                        textAlign: 'justify',
                                    }}>Genre: {movie.genre}</Typography>

                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        color: '#f5d0d0',
                                        fontFamily: 'Arial, sans-serif',
                                        lineHeight: 1.6,
                                        marginBottom: '10px',
                                        textAlign: 'justify',
                                    }}>Age: {movie.age}</Typography>

                <Watch movie={movie} />
            </CardContent>

            </Card>
            </Grid>
            ))}
            </Grid>
        
        </>
    )
}
