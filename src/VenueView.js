import React from 'react';
import Venue from './Venue';
import Venues from './Venues';


const VenueView = ({selectedVenue, deleteNote, venues, venueSelected, neighborhoods, types, neighborhoodSelected }) => {
    return (
        <>
            {
            selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} neighborhoodSelected={neighborhoodSelected} /> : <Venues venues={venues} venueSelected={venueSelected} neighborhoods={neighborhoods} types={types} neighborhoodSelected={neighborhoodSelected}/>
            }
        </>       
    )
}

export default VenueView;