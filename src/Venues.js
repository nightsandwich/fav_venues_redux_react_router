import React from 'react';

const Venues = ({venues, venueSelected}) => {
    return (
        <div >
            <h1>FAVORITE BROOKLYN ESTABLISHMENTS</h1>
            <div className='venues-container'>
                {
                venues.map( venue => { 
                    return (
                    <div key={ venue.id } className='venue-info'>
                        <h3><a onClick={() => venueSelected(venue.id)}>
                            { venue.name }
                        </a></h3>
                        <p>Category: {venue.type.name}</p>
                        <p>Neighborhood: {venue.neighborhood.name}</p>
                        <div>
                        <a onClick={() => venueSelected(venue.id)}> 
                            <img src={ venue.imageUrl}></img>
                        </a>
                        </div>
                        <div>
                            {venue.notes.length} {venue.notes.length === 1 ? 'Note' : 'Notes'} 
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