import React from 'react';

const Venues = ({venues, venueSelected}) => {
    return (
        <div >
            <h1>FAVORITE SPOTS IN BROOKLYN</h1>
            <div id='venue-flex'>
                {
                venues.map( venue => { 
                    return (
                    <div key={ venue.id } className='venue-info'>
                        <h3>
                            <a onClick={() => venueSelected(venue.id)}>
                                { venue.name }
                            </a>
                        </h3>
                        <div>
                        <a onClick={() => venueSelected(venue.id)}> 
                            <img src={ venue.imageUrl}></img>
                        </a>
                        </div>
                        <div className='website'>
                            <a href ={venue.website}>
                                Website
                            </a>
                            <p>{venue.description}</p>
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Venues;