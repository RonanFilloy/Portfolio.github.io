import React, {useContext} from 'react';
import ProjectCard from './components/ProjectCard';
import projectsIcons from './helpers/projectsHelpers';
import {ThemeContext} from './contexts/ThemeContext';
import { CSSTransition } from 'react-transition-group';
import './styles/Projects.css'

function Projects() {
    const {lightTheme} = useContext(ThemeContext);

    return (
        <div className={`projects ${lightTheme ? 'light-projects' : 'dark-projects'}`}>
            <div className='container'>
                <div className='row'>
                    <h1>Projects:</h1>
                    <hr/>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={2000}
                        classNames='apps'
                    >
                        <div className='projects-list'>   
                            {projectsIcons.map(icon => (
                                <div className='col-lg-4 col-md-6 col-8' key={icon.name}>
                                    <ProjectCard
                                        img={icon.source}
                                        name={icon.name}
                                        light={lightTheme}
                                        pageUrl={icon.pageUrl}
                                        codeUrl={icon.codeUrl}
                                    />
                                </div>
                            ))}            
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}

export default Projects