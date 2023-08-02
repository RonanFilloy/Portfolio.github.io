import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import MyImg from './imgs/FotoPresentacion.jpeg';
import './styles/Home.css';

const words = [
    'Coder',
    'Student',
    'Athlete',
    'Game lover'
];

function Home() {
    const [currindex, setCurrIndex] = useState(0);
    const {lightTheme} = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        const rotateCurr = () => {
            setCurrIndex(prevIndex => (prevIndex + 1) % words.length);
        }
        const interval = setInterval(rotateCurr, 4000);
        return () => clearInterval(interval);
    }, [])

    const navigateAbout = () => {
        navigate('/about')
    }
    
    const navigateProjects = () => {
        navigate('/projects')
    }

    return (
        <div className={`home ${lightTheme ? 'light-home' : 'dark-home'}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-6 col-10'>
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={1000}
                            classNames='presentation-card'
                        >
                            <div className='home-card card'>
                                <div className='card-head'>
                                    <img src={MyImg} alt='me' style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                                </div>
                                <div className='description card-body'>
                                    <h4 className='text-secondary'>Frontend developer</h4>
                                    <p>
                                        Invested in the continuous development of my coding and people skills, I am a frontend developer
                                        with a commitment to generate impact wherever I go. Having a background in recruiting, I
                                        strive thanks to my ability to communicate and understand the needs of my colleagues and clients,
                                        and I seek to apply this knowledge wherever my journey takes me. 
                                    </p>
                                </div>
                                <div className='buttons card-footer'>
                                    <button onClick={navigateAbout}>About Me</button>
                                    <button onClick={navigateProjects}>Projects</button>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className='col-xl-9 col-8'>
                        <div className='cover'>
                            <h1>Ronan Filloy</h1>
                            <div className='fading-adj'>
                                <span className='prev'>
                                    {words[(currindex - 1 + words.length) % words.length]}
                                </span>
                                <i className="fas fa-chevron-up"></i>
                                <span className='curr'>
                                    {words[currindex]}
                                    
                                </span>
                                <i className="fas fa-chevron-up"></i>
                                <span className='next'>
                                    {words[(currindex + 1) % words.length]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home