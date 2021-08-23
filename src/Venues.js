import React from 'react';

const Venues = ({venues, venueSelected}) => {
    return (
        <div >
            <h1>FAVORITE BROOKLYN ESTABLISHMENTS</h1>
            <div id='venues-container'>
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