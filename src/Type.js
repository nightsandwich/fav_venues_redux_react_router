import React from 'react';

const Type = ({selectedType, venueSelected}) => {
    return (
        <div className='list' >
            <h1>{selectedType.name}</h1>
            <div >
                {
                selectedType.venues.map( venue => { 
                    return (
                    <div key={ venue.id } className='box' >
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

export default Type;