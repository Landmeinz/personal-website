
// --- STYLING FOR WHOLE SITE --- ORGANIZED BY PAGE --- //




// --- SHARED ON ALL PAGES --- // 

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(360, 70%, 50%, .9)',
        },
        secondary: {
            main: 'hsla(220, 50%, 50%, .9)',
        },
        info: {
            main: 'hsla(0, 5%, 10%, .9)'
        }
    },
});

export const sxButton = {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.4,
    m: 1,
}




// --- APP --- //

export const sxType = {
    fontFamily: 'default',
}

export const sxHeaderContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    gap: 1,

    // border: 2,
}





// --- HEADER ---  // 

// box that contains the header; not sure why i took it out of the h1 tag; 
export const sxHeader = {
    fontSize: 60,
    fontWeight: 700,
    mt: 2,

    color: 'primary.main',
}






// --- NAV BUTTONS --- // 

export const sxButtonBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
}





// --- HOME PAGE --- // 

// box properties that holds our movie title and our image together; 
export const sxHomeContainer = {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '80%',

    color: 'info.main',
}; // sxCard






// --- ABOUT PAGE --- //

export const sxAboutContainer = {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '80%',

    color: 'info.main',
}

