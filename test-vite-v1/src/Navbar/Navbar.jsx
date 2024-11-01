import { useState } from 'react'
import viteLogo from '/vite.svg'
import './Navbar.scss';

function NavBar(){
    const resources = ['w3schools.com', 'react.dev', 'udemy.com'];
    return (
        <div className='nav'>
        <ul>
            {resources.map((resource) => {
                return (
                <li key={resource}>
                    <a href={"https://" + resource}> {resource} </a>
                </li>
                    );
            })}
            <li>
                <img src={viteLogo}/>
            </li>
        </ul>
        </div>
    );
}

export default NavBar;