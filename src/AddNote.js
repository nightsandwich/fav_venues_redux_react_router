import React from 'react';
import axios from 'axios';

const AddNote = ({addNote, selectedVenue}) => {
    return (
        <div>
            <form method='POST'>
                    <input type='text' name="comment"/>
                    <input onClick = {()=>addNote(selectedVenue.id, req.body)} type="submit" value="Add Note"/>
            </form>    
        </div>
    );
};

export default AddNote;