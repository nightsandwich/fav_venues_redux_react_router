import React from 'react';
import InsertNew
 from './InsertNew';
const Venues = ({venues, venueSelected, neighborhoods, types}) => {
    return (
    <>
        <div id='venues-container'>
        <h1>VENUES</h1>
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
                                <div className='website'>
                                    <a href ={venue.website}>
                                        Website
                                    </a>
                                </div>
                                <div>[{venue.type.name} in {venue.neighborhood.name}]</div>
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