import React from 'react';
import Venue from './Venue';
import Venues from './Venues';

const VenueView = ({selectedVenue, deleteNote, venues, venueSelected}) => {
    return (
        <>
        {
        selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} /> : <Venues venues={venues} venueSelected={venueSelected} />
        }
        </>       
    )
}

export default VenueView;