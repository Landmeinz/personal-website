
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- //
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

// --- STYLES --- // 
import {
    sxButtonBox,
    sxButton,
} from '../App/App.style';


function NavBar() {

    const history = useHistory();

    // BUTTON to go back to the movie list or to the add movie form; 
    function handleClick(pageDirection) {

        switch (pageDirection) {
            case 'home':
                console.log('CLICKED on movie list button');
                history.push('/')
                break;

            case 'about':
                console.log('CLICKED on about button');
                history.push('/about')
                break;

            default:
                break;
        }

    }; // handleClick


    return (
        <Box sx={sxButtonBox}>

            <Button variant="outlined" sx={sxButton}
                onClick={() => handleClick('home')}
            ><LocalMoviesOutlinedIcon fontSize='large' />HOME</Button>

            <Button variant="outlined" sx={sxButton}
                onClick={() => handleClick('about')}
            ><LibraryAddCheckOutlinedIcon fontSize='large' />WHO?</Button>

        </Box>
    )
}; // NavBar

export default NavBar;