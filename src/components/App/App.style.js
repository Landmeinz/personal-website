
// --- STYLING FOR WHOLE SITE --- ORGANIZED BY PAGE --- //




// --- SHARED ON ALL PAGES --- // 

// --- ANIMATIONS --- //

export const trans = {
    time: { duration: .45 },
    initial: { rotate: 0, y: 0, opacity: 0 },
    animate: { rotate: 0, y: 0, opacity: 1 },
    // exit:       { rotate: -30 },
}

// --- STYLES --- //

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
    // border: '2px solid blue',
    display: 'flex',
    position: 'relative',
    mx: 'auto',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 380,
    maxWidth: '95%',
    // mt: 3,
    // bgcolor: 'darkblue',

    // desktop sizing
    // [theme.breakpoints.only('desktop')]: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     minWidth: 750,
    //     maxWidth: '85%',
    // },
    // mobile sizing
    //     [theme.breakpoints.only('mobile')]: {
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         minWidth: 380,
    //         maxWidth: '95%',
    //     },
}



export const sxHeaderContainer = {

    // shared properties
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    bgcolor: 'lightblue',
    py: 1,

    position: 'sticky',
    top: 0,
    zIndex: 1000,

    boxShadow: 8,

    // height: 100,
    // zIndex: 1000,

    // borderRadius: 2,
    // width: '100%',
    // borderBottom: '1px solid gray',


    // // desktop sizing
    // [theme.breakpoints.only('desktop')]: {
    //     position: 'sticky',
    //     top: 30,
    //     height: '100%',
    //     width: 300,
    // },

    // // mobile sizing
    // [theme.breakpoints.only('mobile')]: {
    //     position: 'static',
    //     height: '100%',
    //     width: '100%',
    // },
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
    fontSize: 42,
    fontWeight: 700,
    lineHeight: .9,
    textAlign: 'center',
    color: 'primary.main',
    cursor: 'pointer',
}

export const sxProfilePhoto = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: '50%',
    // height: 145,
    // width: 145,
    // mx: 'auto',
    // mt: 2,
    // mb: 3,
    // boxSdow: 3,
}


// --- NAV BUTTONS --- // 

export const sxButtonBox = {

    // shared properties
    // border: '1px solid blue',

    display: 'flex',
    flexDirection: 'row',
    gap: 1,

    // justifyContent: 'center',
    // alignItems: 'center',

    // // desktop sizing
    // [theme.breakpoints.only('desktop')]: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // },
    // // mobile sizing
    // [theme.breakpoints.only('mobile')]: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
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
    bgcolor: 'lightblue',

    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 4,
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
    width: '90%',
    borderRadius: 1,
    p: 2,
    gap: 100,

    color: 'info.main',

};


export const sxHeroContent = {
    // border: '1px solid gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    width: '80%',
    gap: 10,
    mb: 2,
    color: 'info.main',
    borderRadius: 2,
    p: 2,
    boxShadow: 8,
    bgcolor: 'lightblue',
    opacity: '.95',
    // bgcolor: 'lightblue',
    // boxShadow: 4,

}

export const sxHeroText = {

    fontWeight: 500,
    // color: 'info.main',
    '&:hover': {
        transform: 'scale(1.03)',
        // boxShadow: 4,
        // borderRadius: 5,
        cursor: 'pointer',
        color: 'primary.main',
        // p: 1,
        // border: 1,
        // borderColor: 'primary.main',
    }
}

export const sxSubText = {
    fontWeight: 300,
    textAlign: 'center',
}

export const sxSubTextBoldHeader = {
    fontWeight: 500,
    textAlign: 'center',
    // mb: 6,
}

export const sxSubTextBold = {
    fontWeight: 500,
    textAlign: 'center',
}



// --- ABOUT PAGE --- //

export const sxAboutContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '90%',
    minHeight: '94vh',
    borderRadius: 1,
    p: 2,
    gap: 10,

    color: 'info.main',
}

export const sxAboutHeroContent = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    width: '100%',
    gap: 10,
    mb: 2,
}


export const sxAboutBody = {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    width: '100%',
    gap: 10,
    mb: 2,
}


