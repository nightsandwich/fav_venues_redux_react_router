import React from 'react';

const Neighborhood = ({selectedNeighborhood, venueSelected}) => {
    return (
        <div className='list' >
            <h1>{selectedNeighborhood.name}</h1>
            <div >
                {
                selectedNeighborhood.venues.map( venue => { 
                    return (
                    <div key={ venue.id } className='box'>
                        <h3><a onClick={() => venueSelected(venue.id)}>
                            { venue.name }
                        </a></h3>
                        <div>
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Neighborhood;