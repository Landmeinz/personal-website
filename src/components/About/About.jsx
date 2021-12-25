
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';

// --- STYLES --- // 
import {
    sxAboutContainer,
    sxButton,
} from '../App/App.style';


function About() {

    // INVENTORY grab ALL the genres from the store;
    let allGenres = useSelector(store => store.allGenres);

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Box sx={sxAboutContainer}>
            <Typography variant="h4">Hello, a little about me:</Typography>
            <Typography variant="body1">
                Living life in between the physical and the digital world, my name is Eric Meinzer and I like to design and build things.
            </Typography>

            <Typography variant="body1">
                My current focus is on software engineering, designing and developing fluid digital products.
            </Typography>

            <Typography variant="body1">
                Thanks for stopping by! CONNECT with me on LinkedIn or GitHub
            </Typography>

        </Box>
    )
};

export default About;