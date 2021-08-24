import React from 'react';
import Venue from '.Venue';
import Venues from '.Venues';
import {selectedVenue, deleteNote, venues, venueSelected} from './App';

const VenueView = () => {
    return (
        <>
        {
        selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} /> : <Venues venues={venues} venueSelected={venueSelected} />
        }
        </>       
    )
}

export default VenueView;