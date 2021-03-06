
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


function About() {

    // INVENTORY grab ALL the genres from the store;
    let allGenres = useSelector(store => store.allGenres);

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
                        Designing Fuels My Inspiration
                    </Typography>

                    <Typography variant="h1" sx={sxHeroText}>
                        Building Awards Me Satisfaction
                    </Typography>
                </Box>


                <Box sx={sxAboutBody}>
                    <Typography variant="body1">
                        Living life in between the physical and the digital world, my name is Eric Meinzer and I like to design and build things. As you can see from this website I have a lot of interests and a variety of skills. 
                    </Typography>

                    <Typography variant="body1">
                        My current focus is on software engineering, designing and developing fluid digital products. I'm utilizing all of the design skills that I've gained over the years along with my experience as a consultant to design and build applications for a variety of clients.
                    </Typography>

                    <Typography variant="body1">
                        Thanks for stopping by! CONNECT with me on LinkedIn or GitHub to the left. 
                    </Typography>
                </Box>

            </Box>

        </motion.div>
    )
};

export default About;