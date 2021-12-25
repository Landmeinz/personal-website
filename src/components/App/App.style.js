
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
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 750,
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

export const sxAppContainer = {

    // shared properties
    // border: '1px solid red',
    display: 'flex',
    position: 'relative',
    mx: 'auto',
    mt: 3,

    // desktop sizing
    [theme.breakpoints.only('desktop')]: {
        flexDirection: 'row',
        justifyContent: 'center',
        minWidth: 750,
        maxWidth: '85%',
    },
    // mobile sizing
    [theme.breakpoints.only('mobile')]: {
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 380,
        maxWidth: '95%',
    },
}



export const sxHeaderContainer = {

    // shared properties
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',

    // desktop sizing
    [theme.breakpoints.only('desktop')]: {
        position: 'sticky',
        height: '100%',
        width: 300,
    },

    // mobile sizing
    [theme.breakpoints.only('mobile')]: {
        position: 'static',
        height: '100%',
        width: '100%',
    },
}

export const sxBodyContainer = {
    // border: '1px solid green',
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%'
    // gap: 1,
}




// --- HEADER ---  // 

// box that contains the header; not sure why i took it out of the h1 tag; 
export const sxHeader = {
    // border: '1px solid gray',
    fontSize: 50,
    fontWeight: 700,
    textAlign: 'center',
    color: 'primary.main',
}

export const sxProfilePhoto = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: 150,
    width: 150,
    mx: 'auto',
    mt: 1,
    mb: 4,
    boxShadow: 3,
}


// --- NAV BUTTONS --- // 

export const sxButtonBox = {

    // shared properties
    // border: '1px solid blue',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 1,

    // desktop sizing
    [theme.breakpoints.only('desktop')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    // mobile sizing
    [theme.breakpoints.only('mobile')]: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
}

export const sxNavLink = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // border: 1,
    // borderColor: 'secondary.main',
    height: 50,
    width: 50,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: 2,
    color: 'primary.main',

    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: 4,
        border: 1,
        borderColor: 'primary.main',
    }
}




// --- HOME PAGE --- // 

// box properties that holds our movie title and our image together; 
export const sxHomeContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '95%',
    boxShadow: 2,
    borderRadius: 1,

    color: 'info.main',
}; // sxCard






// --- ABOUT PAGE --- //

export const sxAboutContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '95%',
    boxShadow: 2,
    borderRadius: 1,

    color: 'info.main',
}

