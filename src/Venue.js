import React from 'react';
import AddNote from './AddNote';

const Venue = ({selectedVenue, deleteNote, addNote}) => {
    return (
        <div>
            <div className='venue-info venue-details'>
                <h3>{selectedVenue.name}</h3>
                <p>Category: {selectedVenue.type.name}</p>
                <p>Neighborhood: {selectedVenue.neighborhood.name}</p>
                <img src={selectedVenue.imageUrl} />
                <div>
                    <a href={selectedVenue.website}>{selectedVenue.website}</a>
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