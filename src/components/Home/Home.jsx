
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'



// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// --- STYLES --- // 
import {
    sxHomeContainer,
    trans,
    sxHeroContent,
    sxHeroText,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"


function Home() {

    const history = useHistory();
    const dispatch = useDispatch();

    // const [thing, setThing] = useState('');

    const handleClick = (direction) => {
        console.log('--- clicked on an item')
        console.log('--- direction:', direction);

        dispatch({ type: 'PAGE_DIRECTION', payload: direction })
        
        localStorage.setItem('direction', direction);

        history.push('/detail')
     
    }; // handleClick

    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >
            <Box sx={sxHomeContainer} >

                <Box sx={sxHeroContent} onClick={() => handleClick('Software Development')}>
                    <Typography variant="h1" sx={sxHeroText}>Software Development</Typography>
                    {/* <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography> */}
                </Box>

                <Box sx={sxHeroContent} onClick={() => handleClick('Lighting Design')}>
                    <Typography variant="h1" sx={sxHeroText}>Lighting Design</Typography>
                    {/* <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography> */}
                </Box>

                <Box sx={sxHeroContent} onClick={() => handleClick('Architecture')}>
                    <Typography variant="h1" sx={sxHeroText}>Architecture</Typography>
                    {/* <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography> */}
                </Box>

                <Box sx={sxHeroContent} onClick={() => handleClick('Graphic Design')}>
                    <Typography variant="h1" sx={sxHeroText}>Graphic Design</Typography>
                    {/* <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography> */}
                </Box>

                <Box sx={sxHeroContent} onClick={() => handleClick('Sketches')}>
                    <Typography variant="h1" sx={sxHeroText}>Sketches</Typography>
                    {/* <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography> */}
                </Box>

            </Box>
        </motion.div>
    );
}

export default Home;



    // const history = useHistory();
    // const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);


    // // on page load fetch all the movies from our database;
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);



    // // BUTTONS to go back to the movie list or to the add movie form;
    // function handleClick(input, movie) {

    //     switch (input) {
    //         case 'dispatch':
    //             console.log('CLICKED on the image');
    //             console.log('this is the current image from handleClick', movie);
    //             dispatch({
    //                 type: 'SET_SELECTED_MOVIE',
    //                 payload: movie
    //             });

    //             axios({
    //                 method: 'GET',
    //                 url: `/api/genre/${movie.id}`
    //             })
    //                 .then(response => {
    //                     console.log('GET /api/genre response', response);
    //                     dispatch({
    //                         type: 'SET_GENRES',
    //                         payload: response.data
    //                     })
    //                 })
    //                 .catch(error => {
    //                     console.log('GET /api/genre ERROR', error);
    //                 });

    //             history.push('/details');
    //             break;

    //         default:
    //             break;
    //     }; // switch

    // }; // handleClick
