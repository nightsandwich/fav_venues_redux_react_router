import React from 'react';
import AddNote from './AddNote';

const Venue = ({selectedVenue, deleteNote, addNote, neighborhoodSelected, typeSelected}) => {
    return (
        <div id='venue'>
            <div className='venue-details'>
                <div className='details'>
                    <h3>{selectedVenue.name}</h3>
                    <p>Category: <a onClick={() => typeSelected(selectedVenue.type.id)}>{selectedVenue.type.name}</a></p>
                    <p>Neighborhood: <a onClick={() => neighborhoodSelected(selectedVenue.neighborhood.id)}> {selectedVenue.neighborhood.name}</a></p>
                    <img src={selectedVenue.imageUrl ? selectedVenue.imageUrl : './stock.png'} />
                    <div className='website'>
                        <a href={selectedVenue.website}>Take Me To The Website!</a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='break'></div>
                    {selectedVenue.notes.length ? 'NOTES' : ''}
                <div className='break'></div>   
                <ul className='notes'>
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