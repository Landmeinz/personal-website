
// --- STYLING FOR WHOLE SITE --- ORGANIZED BY PAGE --- //




// --- SHARED ON ALL PAGES --- // 

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(360, 70%, 50%, .9)',
        },
        secondary: {
            main: 'hsla(360, 50%, 50%, .9)',
        },
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'light',

    // border: 1,

    fontSize: 40,
    fontWeight: 700,
    mr: 4,
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

export const sxContainerBox = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

// box properties that holds our movie title and our image together; 
export const sxCard = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    m: .5,
    width: '25%',
    mx: 'auto',
}; // sxCard

// box properties that holds our movie title info;
export const sxHomeHeader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > :not(style)': {
        height: 35,
        p: .5,
    },
}; // sxHeader





// --- ABOUT PAGE --- //

export const sxAboutContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 56,
    m: 1,
    gap: 1,
}

