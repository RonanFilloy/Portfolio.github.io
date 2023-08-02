import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import {CustomThemeProvider} from './contexts/ThemeContext';
import {Routes, Route, useLocation} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './styles/App.css'

const theme = createTheme();

function App() {
  const location = useLocation();

  return (
  <CustomThemeProvider>
    <ThemeProvider theme={theme}>
      <Navbar/>
        <Routes location={location}>
          <Route 
            index
            path='/'
            element={<Home/>}
          />
          <Route 
            path='/about'
            element={<About />}
          />
          <Route 
            path='/skills'
            element={<Skills />}
          />
          <Route 
            path='/projects'
            element={<Projects />}
          />
          <Route 
            path='/contact'
            element={
                <Contact />

              }
          />
          <Route 
            index
            path='*'
            element={
                <Home />

            }
          />
        </Routes>
    </ThemeProvider>
  </CustomThemeProvider> 
  );
}

export default App;
