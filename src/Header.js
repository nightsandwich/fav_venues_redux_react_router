import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1 style={{textAlign: "center"}}>BROOKLYN TOP SPOTS</h1>
        <div id='header' >
            <Link to='/venues'>All Venues</Link>
            <Link to='/neighborhoods'>All Neighborhoods</Link>
            <Link to='/types'>All Categories</Link>
            <Link to='/venues/visited'>Visited</Link>
            <Link to='/venues/mustvisit'>Must Visit</Link>
        </div>
        </>
    );
}

export default Header;