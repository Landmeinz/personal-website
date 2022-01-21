
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// -- PAGE COMPONENTS -- //
import SoftwareDevelopment from './SoftwareDevelopment.jsx';
import LightingDesign from './LightingDesign.jsx';
import Architecture from './Architecture.jsx';
import GraphicDesign from './GraphicDesign.jsx';
import Sketches from './Sketches.jsx';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// --- STYLES --- // 
import {
    sxAboutContainer,
    sxAboutHeroContent,
    sxHeroContent,
    sxHeroText,
    sxAboutBody,
    sxButton,
    trans,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"


function Detail() {


    // console.log('--- localStorage', window.localStorage.getItem('direction'));
    const localStorage = window.localStorage.getItem('direction');

    useEffect(() => {
        dispatch({ type: 'PAGE_DIRECTION', payload: localStorage });
    }, [dispatch]);

    const pageDirection = useSelector(store => store.pageDirection);
    // const localStorage = useSelector(store => store.localStorage);

    const dispatch = useDispatch();
    const history = useHistory();

    // our transition properties are located in app.style.js
    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >

            {/* <Box sx={sxAboutContainer}>
                <Typography variant="h4">Hey - Hi - Hello - Howdy</Typography>
            </Box> */}

            <Box sx={sxAboutContainer}>

                <Box sx={sxAboutHeroContent}>
                    <Typography variant="h1" sx={sxHeroText}>
                        {pageDirection}
                    </Typography>
                </Box>


                <Box sx={sxAboutBody}>
                    
                    {pageDirection === 'Software Development' ?
                        <SoftwareDevelopment /> : <></>}

                    {pageDirection === 'Lighting Design' ?
                        <LightingDesign /> : <></>}

                    {pageDirection === 'Architecture' ?
                        <Architecture /> : <></>}

                    {pageDirection === 'Graphic Design' ?
                        <GraphicDesign /> : <></>}

                    {pageDirection === 'Sketches' ?
                        <Sketches /> : <></>}
                </Box>

            </Box>

        </motion.div>
    )
};

export default Detail;