
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
            <Typography variant="body1">This section will be about myself any some cool details that makes me great.</Typography>

            <Button variant="contained" sx={sxButton} type="submit">
                <SaveOutlinedIcon fontSize='large' />WHAT'S UP MY KITTY KATS</Button>
        </Box>

    )
}; // About

export default About;