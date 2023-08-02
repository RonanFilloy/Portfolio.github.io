import React, {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './styles/Contact.css';

function Contact() {
    const {lightTheme} = useContext(ThemeContext);

    return (
        <div className={`contact ${lightTheme ? 'light-contact' : 'dark-contact'}`}>
            <div className='contact-info'>
                <h1>Contact:</h1>
                <div className='contact-content'>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames='info'
                    >
                        <h2>Ronanfilloy@gmail.com <i className="fas fa-light fa-angles-left" /></h2>
                    </CSSTransition>
                    <hr/>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames='info'
                    >
                        <h2>
                            <Link 
                                to='https://github.com/RonanFilloy'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Github <i className="fas fa-light fa-angles-left"/>
                            </Link>
                        </h2>
                    </CSSTransition>
                    <hr/>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames='info'
                    >
                        <h2>
                            <Link 
                                to='https://www.linkedin.com/in/ronan-filloy-b5266a1a7/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Linkedin <i className="fas fa-light fa-angles-left" />
                            </Link>
                        </h2>
                    </CSSTransition>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default Contact