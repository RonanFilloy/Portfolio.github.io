import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/SkillsCard.css';

function SkillsCard(props) {
    const {lightTheme} = useContext(ThemeContext);

    return (
        <div className={`skill-icon ${lightTheme ? 'light-icon' : 'dark-icon'} ${props.shorten ? 'shorten' : ''}`}>
            <img src={props.source} alt={props.name}/>
            <div className='icon-text'>{props.name}</div>
        </div>
    )
}

export default SkillsCard