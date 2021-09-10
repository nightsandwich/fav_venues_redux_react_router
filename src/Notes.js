import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteNote} from './store';

const Notes = (props) => {
   // console.log(notes)
    return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className='notes'>
            NOTES
            <ul>
                {
                    props.notes.map((note) => {
                        return (
                            <li key={note.id} className='notes'>{note.comment} <button onClick={()=> props.handleDelete(note.id, note.venueId)}>X</button></li>
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