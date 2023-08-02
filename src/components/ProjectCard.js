import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {

    const openPreview = () => {
        window.open(props.pageUrl);
    }
    
    const openCode = () => {
        window.open(props.codeUrl);
    }

    return (
        <div className={`project-card ${props.light ? 'light-card' : 'dark-card'}`}>
            <div className='card'>
                <div className='card-body'>
                    <img alt={props.name} src={props.img} style={{height: '100%', width: '100%'}}/>
                    <div className='layer'>
                        <h3>{props.name}</h3>
                        <div className='project-buttons'>
                            <button onClick={openPreview}>Preview</button>
                            <button onClick={openCode}>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard