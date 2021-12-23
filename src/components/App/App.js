import { HashRouter as Router, Route, Link } from 'react-router-dom';


// components //
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';

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
  sxType,
  sxHeaderContainer,
} from './App.style.js';


function App() {  

  return (
    <Box>

      <ThemeProvider theme={theme}>
          <Router>
            
            <Box sx={sxHeaderContainer}>
              <Header />
              <NavBar />
            </Box>

            <Route path="/" exact>
              <Home />
            </Route>

            {/* <Route path="/details" >
              <DetailsPage />
            </Route> */}

            <Route path="/about" >
              <About />
            </Route>

          </Router>
      </ThemeProvider>

    </Box>
  );
}

export default App;