
import { useHistory } from 'react-router-dom';

// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

// --- STYLES --- // 
import {
    transHeader,
    sxHeader,
    sxProfilePhoto
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"

// --- PARALLAX --- // 
import { Parallax, Background } from 'react-parallax';


// onClick={() => history.push('/')} sx={{cursor: 'pointer'}

function Header() {

    const history = useHistory();

    return (
        <motion.div
            initial={transHeader.initial}
            animate={transHeader.animate}
            exit={transHeader.exit}
            style={transHeader.style}
            transition={transHeader.time}
        >
            <Box>

                {/* <Parallax
                bgImage="images/Poster_168.svg"
                strength={500}
                blur={0}
            > */}
                <Typography variant='h1' sx={sxHeader}>ERIC <br /> MEINZER</Typography>

                {/* </Parallax> */}
            </Box>
        </motion.div>

    )

}; // Header

export default Header;