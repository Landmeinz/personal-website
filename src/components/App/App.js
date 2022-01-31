
import { HashRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- COMPONENTS --- //
import Header from '../Header/Header.jsx';
import SubHeader from '../Header/SubHeader.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Detail from '../Detail/Detail.jsx';
// -- PAGE COMPONENTS -- //
import SoftwareDevelopment from '../Detail/SoftwareDevelopment.jsx';
import LightingDesign from '../Detail/LightingDesign.jsx';
import Architecture from '../Detail/Architecture.jsx';
import GraphicDesign from '../Detail/GraphicDesign.jsx';
import Sketches from '../Detail/Sketches.jsx';

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
  trans,
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
    <Box sx={{ bgcolor: 'hsla(0, 0%, 10%, 1)' }}>
      {/* <Parallax
        bgImage="images/eric.jpg"
        strength={300}
        blur={{ min: -20, max: 20 }}
        bgImageStyle={{
          maxHeight: '100vh',
        }}
      > */}
      <Parallax
        // bgImage="images/bgline.svg"
        strength={500}
        blur={{ min: -12, max: 15 }}
        blur={2}
        bgImageStyle={{
          maxHeight: '500vw',
        }}
      >

        {/* <Background>
          <Box sx={{bgImage: "images/hex.jpeg"}}></Box>
        </Background> */}

        <ThemeProvider theme={theme}>
          <Router>

            {/* <Box sx={sxHeaderContainer}>
            <Header />
            <NavBar />
          </Box> */}
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
              <AnimatePresence exitBeforeEnter initial={true}>
                <Switch>

                  <Route path="/" exact>
                    {/* <Home /> */}

                    <motion.div
                      initial={trans.initial}
                      animate={trans.animate}
                      exit={trans.exit}
                      style={trans.style}
                      transition={trans.time}
                    >
                      <Box sx={sxBodyContainer}>
                        <Header />
                        <SubHeader />
                        <SoftwareDevelopment />
                        {/* <LightingDesign /> */}
                        {/* <Architecture /> */}
                        {/* <GraphicDesign /> */}
                        {/* <Sketches /> */}
                      </Box>
                    </motion.div>

                  </Route>

                  {/* <Route path="/detail">
                      <Detail />
                    </Route> */}

                  {/* <Route path="/about">
                      <About />
                    </Route> */}

                </Switch>
              </AnimatePresence>

            </Box>


            {/* </Parallax> */}
          </Router>
        </ThemeProvider>
      </Parallax>
      {/* </Parallax> */}
    </Box >
  );
}

export default App;