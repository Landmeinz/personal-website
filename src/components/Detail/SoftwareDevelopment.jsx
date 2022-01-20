
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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


function SoftwareDevelopment() {


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

            <Box sx={{textAlign: 'center',}}> SoftwareDevelopment

                {/* <Box sx={sxAboutHeroContent}>
                    <Typography variant="h1" sx={sxHeroText}>
                        {pageDirection}
                    </Typography>
                </Box>


                <Box sx={sxAboutBody}>
                    <Typography variant="body1">
                        these are the details I was talking about
                    </Typography>
                    <SoftwareDevelopment />
                    <LightingDesign />
                    <Architecture />
                    <GraphicDesign />
                    <Sketches />
                </Box> */}

            </Box>

        </motion.div>
    )
};

export default SoftwareDevelopment;