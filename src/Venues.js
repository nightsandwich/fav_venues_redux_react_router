import React from 'react';
import InsertNew
 from './InsertNew';
const Venues = ({venues, venueSelected, neighborhoods, types, neighborhoodSelected, typeSelected}) => {
    return (
    <>
        <div id='venues-container'>
        <h1>SPOTS</h1>
            <div id='venue-flex'>
                {
                venues.map( venue => { 
                    return (
                            <div key={ venue.id } className='venue-info'>
                                <div>
                                    <a onClick={() => venueSelected(venue.id)}>
                                        { venue.name }
                                    </a>
                                </div>
                                <div>
                                <a onClick={() => venueSelected(venue.id)}> 
                                    <img src={ venue.imageUrl}></img>
                                </a>
                                </div>
                
                                <div>[<a onClick={()=> typeSelected(venue.type.id)}>{venue.type.name}</a> in <a onClick={()=> neighborhoodSelected(venue.neighborhood.id)}>{venue.neighborhood.name}</a>]</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        <div id='insert-new'>
        {
        <InsertNew neighborhoods={neighborhoods} types={types}/>
        }
        </div>
    </>
    );
}

export default Venues;