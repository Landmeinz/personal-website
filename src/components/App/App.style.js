
// --- STYLING FOR WHOLE SITE --- ORGANIZED BY PAGE --- //




// --- SHARED ON ALL PAGES --- // 

// --- ANIMATIONS --- //

export const trans = {
    time: { duration: 1.8 },
    initial: { rotate: 0, y: 0, opacity: 0 },
    animate: { rotate: 0, y: 0, opacity: 1 },
    // exit:       { rotate: -30 },
}

export const transHeader = {
    time: { duration: 1 },
    initial: { rotate: 20, y: -700, opacity: 0 },
    animate: { rotate: 0, y: 0, opacity: 1 },
    // exit:       { rotate: -30 },
}

import { HlsSharp } from '@mui/icons-material';
// --- STYLES --- //

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(360, 70%, 50%, .99)',
        },
        secondary: {
            main: 'hsla(220, 50%, 50%, .99)',
        },
        info: {
            main: 'hsla(0, 5%, 10%, .99)'
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
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    scroll: 'auto',
    mx: 'auto',
    minWidth: 380,
    p: 2
    // position: 'relative',
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
    // border: '4px solid red',
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
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 50,
}




// --- HEADER ---  // 

// box that contains the header; not sure why i took it out of the h1 tag; 
export const sxHeader = {
    // border: '1px solid gray',
    fontSize: '16vw',
    fontWeight: 700,
    lineHeight: .9,
    // textAlign: 'center',
    color: 'primary.main',
    mt: 10,
    rotate: 5,
    // mx: 'auto',
}

export const sxSubHeaderContainer = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6, 
    maxWidth: 1000, 
}

export const sxSubHeader = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '5vw',
    fontWeight: 500,
    lineHeight: 1.5,
    // textAlign: 'center',
    color: 'primary.main',
    // mt: 8,
    // mx: 'auto',
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
    gap: 4,

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
    color: 'primary.main',


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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 5,
    mb: 20,
    color: 'primary.main',
    borderRadius: 2,
    p: 2,
    // boxShadow: 8,
    // bgcolor: 'lightblue',
    // opacity: '.95',
    // bgcolor: 'lightblue',
    // boxShadow: 4,

}

export const sxHeroText = {

    fontWeight: 500,
    color: 'primary.main',

    // '&:hover': {
    //     transform: 'scale(1.03)',
    //     // boxShadow: 4,
    //     // borderRadius: 5,
    //     cursor: 'pointer',
    //     color: 'primary.main',
    //     // p: 1,
    //     // border: 1,
    //     // borderColor: 'primary.main',
    // }
}

export const sxSubText = {
    fontSize: '1.8vw',
    fontWeight: 300,
    textAlign: 'center',
}

export const sxSubTextBoldHeader = {
    fontSize: '3vw',
    fontWeight: 500,
    textAlign: 'center',
    color: 'primary.main',
    // mb: 6,
}

export const sxSubTextBold = {
    fontWeight: 500,
    textAlign: 'center',
}

export const softwareContent = {
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    gap: 6
}

export const softwareCard = {
    // border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    p: 2,
    width: 700,
    height: 700*.618,

    bgcolor: 'hsla(0, 0%, 15%, 1)',
    borderRadius: 3,
    boxShadow: 5,

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


