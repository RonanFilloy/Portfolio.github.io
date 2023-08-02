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
            path='/Portfolio.github.io/'
            element={<Home/>}
          />
          <Route 
            path='/Portfolio.github.io/about'
            element={<About />}
          />
          <Route 
            path='/Portfolio.github.io/skills'
            element={<Skills />}
          />
          <Route 
            path='/Portfolio.github.io/projects'
            element={<Projects />}
          />
          <Route 
            path='/Portfolio.github.io/contact'
            element={
                <Contact />

              }
          />
          <Route 
            index
            path='/Portfolio.github.io/*'
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
