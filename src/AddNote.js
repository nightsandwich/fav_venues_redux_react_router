import React from 'react';
import axios from 'axios';

const AddNote = ({addNote, selectedVenue}) => {
    return (
        <div>
        {
            <form method='POST' action={`/api/venues/${selectedVenue.id}/notes`}>
                <input type='text' name="comment" />
                <input onClick = {()=>addNote(selectedVenue.id, comment)} type="submit" value="Add Note"/>
            </form>    
        }
        </div>
    );
};

export default AddNote;