
// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// --- STYLES --- // 
import {
    sxHeader
} from '../App/App.style';


function Header() {

    return (
        <Typography sx={sxHeader} variant="h1">ERIC MEINZER</Typography>
    )
}; // Header

export default Header;