import React, { useContext } from 'react';
import SkillsCard from './components/SkillsCard';
import { frontendIcons, backendIcons, miscIcons } from './helpers/iconsHelpers';
import { ThemeContext } from './contexts/ThemeContext';
import { CSSTransition } from 'react-transition-group';
import './styles/Skills.css';

function Skills() {
    const { lightTheme } = useContext(ThemeContext);

    return (
        <div className='page-container'>
            <div className={`skills ${lightTheme ? 'light-skills' : 'dark-skills'}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Frontend:</h1>
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={2000}
                                classNames='skill-group'
                            >
                                <div className='skills-front'>
                                    {frontendIcons.map((icon, index) => (
                                        <SkillsCard key={index} source={icon.source} name={icon.name} />
                                    ))}
                                </div>
                            </CSSTransition>
                        </div>
                        <div className='col-12'>
                            <h1>Backend:</h1>
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={2000}
                                classNames='skill-group'
                            >
                                <div className='skills-back'>
                                    {backendIcons.map((icon, index) => (
                                        <SkillsCard
                                            key={index}
                                            source={icon.source}
                                            name={icon.name}
                                            shorten={icon.shorten}
                                        />
                                    ))}
                                </div>
                            </CSSTransition>
                        </div>
                        <div className='col-12'>
                            <h1>Miscellaneous</h1>
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={2000}
                                classNames='skill-group'
                            >
                                <div className='skills-misc'>
                                    {miscIcons.map((icon, index) => (
                                        <SkillsCard key={index} source={icon.source} name={icon.name} />
                                    ))}
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;