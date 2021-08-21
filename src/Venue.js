import React from 'react';

const Venue = ({selectedVenue}) => {
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
                            <li key={note.id} className='notes'>{note.comment}</li>
                        );
                    })
                }
                </ul>
            </div>
          </div>
    );
};

export default Venue;