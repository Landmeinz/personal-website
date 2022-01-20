
import { HashRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';

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



function App() {


  // const location = useLocation();
  // console.log('this is the location', location.pathname);

  // const detailPage = useSelector(store => store.detailPage);

  const hello = ' ----- this is hello';


  return (
    <Box sx={{bgcolor: 'lightblue'}}>

      <ThemeProvider theme={theme}>
        <Router>

          <Box sx={sxAppContainer}>

            <Box sx={sxHeaderContainer}>
              <Header />
              <NavBar />
            </Box>

            <Box sx={sxBodyContainer}>

              <AnimatePresence exitBeforeEnter initial={true}>
                <Switch>

                  <Route path="/" exact>
                    <Home />
                  </Route>

                  <Route path="/detail">
                    <Detail hello={hello}/>
                  </Route>

                  <Route path="/about">
                    <About />
                  </Route>

                </Switch>
              </AnimatePresence>

            </Box>

          </Box>

        </Router>
      </ThemeProvider>

    </Box>
  );
}

export default App;