
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

// --- STYLES --- // 
import {
    sxAboutContainer,
    sxAboutHeroContent,
    sxHeroContent,
    sxHeroText,
    sxAboutBody,
    softwareContent,
    softwareCard,
    sxHeader,
    sxSubHeader,
    sxSubText,
    sxSubTextBoldHeader,
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

    const creativeCookUrl = 'https://www.google.com/'

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
            <Box sx={sxHeroContent} >

                <Typography variant="h1" sx={sxSubHeader} >Software Development</Typography>

                <Box>
                    <Typography variant="body1" sx={sxSubText}>This section will be about myself any some cool details that makes me great.</Typography>
                </Box>
            </Box>

            <Box sx={softwareContent}>

                <Box sx={softwareCard}>
                    <Typography variant="h3" sx={sxSubTextBoldHeader}>Web App: Creative Cook</Typography>

                </Box>

                {/* <Typography variant="body1">Creative Cook is an application to encourage cooks of all different experience levels to branch out and try new things. The app allows a user to start by selecting an ingredient they would like to work with. Then, the app will suggest ingredients that pair well with the selected ingredient. After selecting a second ingredient, the app will provide suggestions for a third ingredient. The suggestions will pair well with either of the first two ingredients, or in the case of a "super combo", pair will with both of the already selected ingredients. The idea of a flavor trio to build a recipe off of is a long accepted practice in the culinary arts. After establishing a flavor trio, the app will search recipes across thousands of recipes on the internet and make suggestions based on your flavor combo and any health filters you need. The app will provide a basic description of the recipe and a link to the recipe hosted on the original website. This takes much of the work of finding a good recipe out of the process and allows the cook to focus on what they came here for, the food!</Typography>

                    <CardMedia sx={{ border: 1, cursor: 'pointer', }}
                        onClick={() => window.open(creativeCookUrl, '_blank', 'noopener', 'noreferrer')}
                        component="img"
                        image="images/ComboTool.png"
                        alt="Creative Cook"
                    /> */}


                <Box sx={softwareCard}>
                    <Typography variant="h3" sx={sxSubTextBoldHeader}>Mobile Web App: Houseplant Palace</Typography>
                </Box>

                <Box sx={softwareCard}>
                    <Typography variant="h3" sx={sxSubTextBoldHeader}>Feedback Form</Typography>
                </Box>

                {/* <Typography variant="body1">
                        Mobile forward web app created for houseplant lovers, designed and built individually for my Prime solo project.
                        Full-Stack CRUD application designed to document the growth of one’s houseplants by uploading photos as well as store important information about each plant.
                        User’s are  notified in their dashboard when it’s time to water each plant.
                        Designed from the ground up by first creating sketches, wireframes, and entity relationship diagrams.

                    </Typography>

                    <CardMedia onClick={() => handleClick('Houseplant Palace')} sx={{ border: 1 }}
                        component="img"
                        image="images/hp1.jpg"
                        alt="Houseplant Palace"
                    /> */}



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