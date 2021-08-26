import React from 'react';
//import InsertNew from './InsertNew';

const Neighborhood = ({selectedNeighborhood, venueSelected, types, neighborhoods}) => {
    return (
    <>
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
    </>
    );
}

export default Neighborhood;
        /*<div id='insert-new'>
        {
        <InsertNew neighborhoods={neighborhoods} types={types}/>
        }
        </div>*/