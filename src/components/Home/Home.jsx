
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'



// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// --- STYLES --- // 
import {
    sxHomeContainer,
    trans,
    sxHeroContent,
    sxHeroText,
    sxSubText,
    sxSubTextBold,
    sxSubTextBoldHeader,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"

// --- PARALLAX --- // 
import { Parallax, Background } from 'react-parallax';


function Home() {

    const [softwareDescriptionStatus, setSoftwareDescriptionStatus] = useState(false)
    const [lightingDescriptionStatus, setLightingDescriptionStatus] = useState(false)
    const [architectureDescriptionStatus, setArchitectureDescriptionStatus] = useState(false)
    const [graphicDescriptionStatus, setGraphicDescriptionStatus] = useState(false)
    const [sketchesDescriptionStatus, setSketchesDescriptionStatus] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [window]);

    const history = useHistory();
    const dispatch = useDispatch();

    // const [thing, setThing] = useState('');

    const handleClick = (direction) => {
        console.log('--- clicked on an item')
        console.log('--- direction:', direction);

        dispatch({ type: 'PAGE_DIRECTION', payload: direction })

        localStorage.setItem('direction', direction);

        history.push('/detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }; // handleClick

    // <Background className="custom-bg">
    //     <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
    // </Background>

    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >
            <Parallax
                // bgImage="images/eric.jpg"
                blur={5}
                strength={-200}
                renderLayer={percentage => (
                    <>
                        <Box sx={{
                            // border: '1px solid red',
                            position: 'fixed',
                            // background: `hsla(250, 20%, 50%, ${percentage * 1})`,
                            opacity: 1 / percentage,
                            bgcolor: 'secondary.main',
                            left: percentage * 70,
                            top: percentage * 250,
                            width: 1400 / percentage,
                            height: percentage * 300,
                            borderRadius: 2,
                            // boxShadow: 'inset 2px 2px 2px white',
                        }}
                        >
                        </Box>
                        {/* <Box sx={{
                            // border: '1px solid red',
                            position: 'fixed',
                            // background: `hsla(250, 20%, 50%, ${percentage * 1})`,
                            opacity: 1 / percentage,
                            bgcolor: 'secondary.main',
                            right: 450 / percentage,
                            top: percentage * 450,
                            width: 400 / percentage,
                            height: percentage * 200,
                            borderRadius: 2,
                            // boxShadow: 'inset 2px 2px 2px white',
                        }}
                        >
                        </Box> */}
                    </>
                )}
            >
                <Box sx={sxHomeContainer} >

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, mt: 8 }}>

                            <Typography variant="h2" sx={sxSubTextBoldHeader}>That's a feature, not a bug.</Typography>

                            <Box>
                                <Typography variant="h4" sx={sxSubText}>As you are about to see, I have a lot of different interests and skills.</Typography>

                                <br />

                                <Typography variant="h4" sx={sxSubTextBold}>Currently I'm focusing on building intuitive digital products.</Typography>
                            </Box>

                        </Box>


                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                            <KeyboardDoubleArrowDownIcon />
                            <Typography variant="h4" sx={sxSubText}>
                                Let me show you around
                            </Typography>
                            <KeyboardDoubleArrowDownIcon />
                        </Box>

                    </Box>


                    {/* SOFTWARE DEVELOPMENT */}
                    <Box sx={sxHeroContent} >

                        <Typography variant="h1" sx={sxHeroText} onClick={() => setSoftwareDescriptionStatus(!softwareDescriptionStatus)}>Software Development</Typography>

                        {softwareDescriptionStatus &&
                            <Box>
                                <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>

                                <Box>
                                    hello
                                </Box>
                            </Box>}
                    </Box>


                    {/* LIGHTING DESIGN */}
                    <Box sx={sxHeroContent} onClick={() => setLightingDescriptionStatus(!lightingDescriptionStatus)}>
                        <Typography variant="h1" sx={sxHeroText}>Lighting Design</Typography>

                        {lightingDescriptionStatus &&
                            <Box>
                                <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>
                            </Box>}
                    </Box>

                    {/* ARCHITECTURE */}
                    <Box sx={sxHeroContent} onClick={() => setArchitectureDescriptionStatus(!architectureDescriptionStatus)}>
                        <Typography variant="h1" sx={sxHeroText}>Architecture</Typography>

                        {architectureDescriptionStatus &&
                            <Box>
                                <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>
                            </Box>}
                    </Box>

                    {/* GRAPHIC DESIGN */}
                    <Box sx={sxHeroContent} onClick={() => setGraphicDescriptionStatus(!graphicDescriptionStatus)}>
                        <Typography variant="h1" sx={sxHeroText}>Graphic Design</Typography>
                        {graphicDescriptionStatus &&
                            <Box>
                                <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>
                            </Box>}
                    </Box>

                    {/* SKETCHES */}
                    <Box sx={sxHeroContent} onClick={() => setSketchesDescriptionStatus(!sketchesDescriptionStatus)}>
                        <Typography variant="h1" sx={sxHeroText}>Sketches</Typography>
                        {sketchesDescriptionStatus &&
                            <Box>
                                <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>
                            </Box>}
                    </Box>

                </Box>
            </Parallax>
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
