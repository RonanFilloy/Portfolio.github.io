import React, {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import './styles/About.css';

function About() {
    const {lightTheme} = useContext(ThemeContext);

    return (
        <div className={`about ${lightTheme ? 'light-about' : 'dark-about'}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-10'>
                            <div className='card about-title'>
                                <h1>About Me:</h1>
                            </div>
                            <div className='about-languages'>
                                <ul>Fluent in:</ul>
                                <li>Spanish</li>
                                <li>English</li>
                            </div>
                    </div>
                    <div className='col-8'>
                        <div className='about-text'>
                            <p>
                                My name is Ronan Filloy, I'm a self-taught frontend developer from Argentina. I've
                                lived in three different countries, worked for companies in four, and still I seek 
                                new opportunities to grow professionally and as a person. As someone who has recieved 
                                education from more than one country (As a child I went to kinder in Michigan), I was
                                forced to learn to communicate not only in different languages, but also in manners that
                                are clear and concise for people of different cultures from a very early age. As an adult 
                                I managed to translate this into my worklife, working besides people from countrys ranging from Argentina, United States, 
                                all the way to Ukraine. <br/>
                                <br/>
                                Nowadays, I'm looking for opportunities to grow as a frontend developer. I love the freedom web 
                                development gives me to express my creativity and ability to solve problems, as well as bring new
                                ideas to the table. My background working as a recruiter and my focus in growing as a developer have 
                                taught me what both sides of the coin want and need to carry a team to success. <br/>
                                <br/>
                                If this fits what you are looking for in a freontend developer, please feel free to contact me!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About