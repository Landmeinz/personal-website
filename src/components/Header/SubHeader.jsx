
import { useHistory } from 'react-router-dom';

import NavBar from '../NavBar/NavBar.jsx';

// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// --- STYLES --- // 
import {
    sxAboutBody,
    sxHeader,
    sxSubHeader,
    sxProfilePhoto,
    sxSubTextBoldHeader,
    sxSubHeaderContainer,

} from '../App/App.style';


// onClick={() => history.push('/')} sx={{cursor: 'pointer'}

function SubHeader() {

    const history = useHistory();

    return (
        <Box sx={sxSubHeaderContainer}>
            <Typography variant='h3' sx={sxSubHeader}>BIT ABOUT ME</Typography >

            <NavBar />

            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                I like to design and build things.
            </Typography>

            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                Creating experiences in both the digital and physical world.
            </Typography>

            {/* <Typography variant="h3" sx={sxSubTextBoldHeader}>
                My current focus is on developing software, designing and building fluid digital products. I'm utilizing all of the design skills that I've gained over the years along with my experience as a consultant to design and build applications for a variety of clients.
            </Typography> */}

            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                I'm a curious designer who has recently made the transition from the physical world of architecture / lighting / designing spaces / crafting experiences into the digital world of software engineering and developing applications.
            </Typography>
{/* 
            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                I’m most interested in how digital products get designed, the overall process, and most importantly being proud of finding a solution to a specific problem.
            </Typography> */}

            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                It’s crazy to think that every single thing that exists today was designed by a person or a group of people who intentionally made those design decisions.
            </Typography>

            <Typography variant="h3" sx={sxSubTextBoldHeader}>
                I have a “less is more” mindset and want to design and build fluid digital products that are intuitive to use, solve problems, stand the test of time, and make lives better for those who use them.
            </Typography>


            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, mt: 2, color: 'primary.main' }}>
                <KeyboardDoubleArrowDownIcon fontSize='large' />
                <KeyboardDoubleArrowDownIcon fontSize='large' />
                <KeyboardDoubleArrowDownIcon fontSize='large' />
                <KeyboardDoubleArrowDownIcon fontSize='large' />
                <KeyboardDoubleArrowDownIcon fontSize='large' />
            </Box>

        </Box >
    )
}; // Header

export default SubHeader;