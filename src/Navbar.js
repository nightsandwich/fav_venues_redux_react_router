import React from 'react';

const Navbar = ({venueSelected, neighborhoodSelected}) => {
    return (
    <div id='navbar'>
    <section>
        <h4>
        <a onClick={()=>venueSelected('')}>ALL VENUES
        </a>
        </h4>
        <h4>
        <a onClick={()=>neighborhoodSelected('')}>ALL NEIGHBORHOODS
        </a>
        </h4>
        <h4>
        <a onClick={()=>venueSelected('')}>ALL CATEGORIES
        </a>
        </h4>
    </section>
    </div>
    )
}

export default Navbar;
  