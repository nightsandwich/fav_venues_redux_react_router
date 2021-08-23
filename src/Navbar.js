import React from 'react';

const Navbar = ({venueSelected, neighborhoodSelected}) => {
    return (
    <div id='navbar'>
        <a>
            <div className='nav' onClick={()=>venueSelected('')}>
                ALL VENUES
            </div> 
        </a>
        <a>
            <div className='nav' onClick={()=>venueSelected('')}>
                ALL NEIGHBORHOODS
            </div> 
        </a>
        <a>
            <div className='nav' onClick={()=>venueSelected('')}>
                ALL CATEGORIES
            </div> 
        </a>
    </div>
    )
}

export default Navbar;
  