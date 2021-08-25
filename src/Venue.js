import React from 'react';
import AddNote from './AddNote';

const Venue = ({selectedVenue, deleteNote, addNote, neighborhoodSelected}) => {
    return (
        <div id='venue'>
            <div className='venue-details'>
                <div className='details'>
                    <h3>{selectedVenue.name}</h3>
                    <p>Category: {selectedVenue.type.name}</p>
                    <p>Neighborhood: <a onClick={() => neighborhoodSelected(selectedVenue.neighborhood.id)}> {selectedVenue.neighborhood.name}</a></p>
                    <img src={selectedVenue.imageUrl} />
                    <div>
                        <a href={selectedVenue.website}>{selectedVenue.website}</a>
                    </div>
                </div>
                <ul >
                    NOTES
                {
                    selectedVenue.notes.map((note) => {
                        return (
                            <li key={note.id} className='notes'>{note.comment} <button onClick={() => deleteNote(note.id)}>X</button></li>
                        );
                    })
                }
                </ul>
                <AddNote selectedVenue={selectedVenue} addNote={addNote}/>
            </div>
          </div>
    );
};

export default Venue;