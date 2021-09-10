import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteNote} from './store';

const Notes = (props) => {
   // console.log(notes)
    return (
    <>
    
        <div className='notes'>
            <h3>NOTES</h3>
            <ul>
                {
                    props.notes.map((note) => {
                        return (
                            <>
                                <li key={note.id} className='notes'>{note.comment}</li>
                                <button onClick={() => props.handleDelete(note.id, note.venueId)}>x</button>
                            </>
                        );
                    })
                }
            </ul>  
        </div>
   
    </>
    );
};


const mapStateToProps = (state, otherProps) => {
    const notes = state.notes.filter(note => note.venueId === otherProps.match.params.id*1);
    return {notes};
}
const mapDispatchToProps = (dispatch, otherProps) => ({
    handleDelete: (id, venueId)=>dispatch(deleteNote(id, venueId, otherProps.history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);