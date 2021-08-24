import React from 'react';
import Venue from './Venue';
import Venues from './Venues';
import InsertNew from './InsertNew';

const VenueView = ({selectedVenue, deleteNote, venues, venueSelected, neighborhoods, types}) => {
    return (
        <>
            {
            selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} /> : <Venues venues={venues} venueSelected={venueSelected} neighborhoods={neighborhoods} types={types}/>
            }
        </>       
    )
}

export default VenueView;