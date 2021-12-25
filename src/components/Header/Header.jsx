
// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


// --- STYLES --- // 
import {
    sxHeader,
    sxProfilePhoto
} from '../App/App.style';


function Header() {

    return (
        <Box>
            <Typography sx={sxHeader} variant="h1">ERIC MEINZER</Typography>
            <CardMedia sx={sxProfilePhoto}
                component="img"
                image="https://i.pinimg.com/originals/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg"
                alt="super handsome photo of Eric"
            />
        </Box>
    )
}; // Header

export default Header;