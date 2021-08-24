import React from 'react';
import axios from 'axios';

const AddNote = ({addNote, selectedVenue}) => {
    return (
        <div id='add-note'>
        {
            <form method='POST' action={`/api/venues/${selectedVenue.id}/notes`}>
                <input onClick = {()=>addNote(selectedVenue.id, comment)} type="submit" value="Add Note"/>
                <br></br>
                <input type='text' name="comment" />
            </form>    
        }
        </div>
    );
};

export default AddNote;