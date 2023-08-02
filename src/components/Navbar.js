import React, {useContext} from 'react';
import useToggle from '../hooks/useToggle';
import { ThemeContext } from '../contexts/ThemeContext';
import {NavLink} from 'react-router-dom';
import Switch from '@mui/material/Switch';
import '../styles/Navbar.css'

function Navbar() {
    const {toggleTheme} = useContext(ThemeContext);

    const [menu, toggleMenu] = useToggle(false); 

    const closeNavbar = () => {
        if(menu) {
            toggleMenu();
        }
    }

    return (
        <div className='navbar' >
            <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink onClick={closeNavbar} to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNavbar} to='/about'>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNavbar} to='/skills'>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNavbar} to='/projects'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNavbar} to='/contact'>
                        Contact
                    </NavLink>
                </li>
                <Switch
                    color='default'
                    onClick={toggleTheme}
                />
            </ul>
            <div className={menu ? 'hamburger active' : 'hamburger'}>
                <i onClick={toggleMenu} className="fa-solid fa-bars fa-2xl"></i>
            </div>
        </div>
    )
}

export default Navbar