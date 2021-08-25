import React from 'react';


const Navbar = ({venueSelected, neighborhoodSelected, typeSelected}) => {
    return (
    <>
        <a>
            <div className='nav' onClick={()=>venueSelected('')}>
                ALL VENUES
            </div> 
        </a>
        <a>
            <div className='nav' onClick={()=>neighborhoodSelected('')}>
                ALL NEIGHBORHOODS
            </div> 
        </a>
        <a>
            <div className='nav' onClick={()=>typeSelected('')}>
                ALL CATEGORIES
            </div> 
        </a>
    </>
    )
}

export default Navbar;
  