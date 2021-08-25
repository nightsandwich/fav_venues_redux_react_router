import React from 'react';
import Venue from './Venue';
import Venues from './Venues';


const VenueView = ({selectedVenue, deleteNote, venues, venueSelected, neighborhoods, types, neighborhoodSelected, typeSelected }) => {
    return (
        <>
            {
            selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} neighborhoodSelected={neighborhoodSelected} typeSelected={typeSelected}/> : <Venues venues={venues} venueSelected={venueSelected} neighborhoods={neighborhoods} types={types} neighborhoodSelected={neighborhoodSelected} typeSelected={typeSelected}/>
            }
        </>       
    )
}

export default VenueView;