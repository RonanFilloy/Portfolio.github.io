import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import MyImg from './imgs/FotoPresentacion.jpeg';
import './styles/Home.css';

const words = [
    'Coder',
    'Student',
    'Athlete',
    'Game lover'
];

function Home() {
    const [prevIndex, setPrevIndex] = useState(words.length - 1);
    const [currIndex, setCurrIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const { lightTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        const rotate = () => {
            setCurrIndex(index => (index + 1) % words.length);
            setPrevIndex(index => (index + 1) % words.length);
            setNextIndex(index => (index + 1) % words.length);
        }
        const interval = setInterval(rotate, 3000);
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
                                    <img src={MyImg} alt='me' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
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
                                    {words[prevIndex]}
                                </span>
                                <i className="fas fa-chevron-up"></i>
                                <span className='curr'>
                                    {words[currIndex]}

                                </span>
                                <i className="fas fa-chevron-up"></i>
                                <span className='next'>
                                    {words[nextIndex]}
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