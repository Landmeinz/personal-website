
import { HashRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- components --- //
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Detail from '../Detail/Detail.jsx';

// --- MUI --- //
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

// --- STYLES --- // 
import {
  theme,
  sxAppContainer,
  sxHeaderContainer,
  sxBodyContainer
} from './App.style.js';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
// import { motion, AnimatePresence } from "framer-motion"
// import { AnimatePresence } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"

// --- PARALLAX --- // 
import { Parallax, Background } from 'react-parallax';



function App() {


  // const location = useLocation();
  // console.log('this is the location', location.pathname);

  const hello = ' ----- this is hello';


  return (
    <Box sx={{ bgcolor: 'lightblue', height: 'auto', }}>

      {/* <Background>
          <Box sx={{bgImage: "images/hex.jpeg"}}></Box>
        </Background> */}

      <ThemeProvider theme={theme}>
        <Router>

          <Box sx={sxHeaderContainer}>
            <Header />
            <NavBar />
          </Box>
{/* 
          <Parallax
            // bgImage="images/hex.jpeg"
            bgImageStyle={{
              // backgroundRepeat: 'repeat-y',
              // height: 'auto',
              // width: '100%',
              // border: '5px solid yellow',
              // backgroundPosition: 'center',
              // opacity: .5,
            }}

            blur={{ min: -20, max: 15 }}
            strength={100}

            renderLayer={percentage => (
              <Box sx={{
                // border: '2px solid green',
                position: 'absolute',
                background: `hsla(210, 20%, 70%, ${percentage * 1})`,
                left: '1%',
                top: '1%',
                width: percentage * 800,
                height: percentage * 500,
              }}
              >
              </Box>
            )}
          > */}

            <Box sx={sxAppContainer}>

              <Box sx={sxBodyContainer}>

                <AnimatePresence exitBeforeEnter initial={true}>
                  <Switch>

                    <Route path="/" exact>
                      <Home />
                    </Route>

                    <Route path="/detail">
                      <Detail />
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route>

                  </Switch>
                </AnimatePresence>

              </Box>

            </Box>
          {/* </Parallax> */}
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;