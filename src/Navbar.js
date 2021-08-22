import React from 'react';

const Navbar = ({venueSelected, neighborhoodSelected}) => {
    return (
    <div id='navbar'>
    <section>
        <div>
            <a onClick={()=>venueSelected('')}>ALL VENUES
            </a>
        </div>     
        <div>
            <a onClick={()=>neighborhoodSelected('')}>ALL NEIGHBORHOODS
            </a>
        </div>
        <div>
            <a onClick={()=>venueSelected('')}>ALL CATEGORIES
            </a>
        </div>
        
        
    </section>
    </div>
    )
}

export default Navbar;
  