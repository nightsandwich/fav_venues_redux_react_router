import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1 style={{textAlign: "center"}}> COOL SPOTS IN BROOKLYN</h1>
        <div id='header' >
            
                <NavLink to='/venues'>All Places</NavLink>
                <br></br>
            <NavLink to='/neighborhoods'>All Neighborhoods</NavLink>
            <br></br>
            <NavLink to='/types'>All Categories</NavLink>
            <br></br>
            <NavLink to='/venues/visited'>Visited</NavLink>
            <br></br>
            <NavLink to='/venues/mustvisit'>Must Visit</NavLink>
            
        </div>
        <hr />
        </>
    );
}

export default Header;


{/* <>
<h1 style={{textAlign: "center"}}>BROOKLYN TOP SPOTS</h1>
<div id='header' >
    <Link to='/venues'>All Venues</Link>
    <Link to='/neighborhoods'>All Neighborhoods</Link>
    <Link to='/types'>All Categories</Link>
    <Link to='/venues/visited'>Visited</Link>
    <Link to='/venues/mustvisit'>Must Visit</Link>
</div>
</> */}