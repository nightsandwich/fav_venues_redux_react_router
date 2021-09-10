import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteNote} from './store';

const Notes = (props) => {
   // console.log(notes)
    return (
    <div id='notes'>
    
            <h3 style={{textAlign:'center'}}>     NOTES</h3>
        <div className='notes'>
            <ul className='innernotes'>
                {
                    props.notes.map((note) => {
                        return (
                            <>
                                <li key={note.id} className='notes'>{note.comment}<span><button onClick={() => props.handleDelete(note.id, note.venueId)}>X</button></span></li>
                                
                                
                                
                            </>
                        );
                    })
                }
            </ul>  
        </div>
   
    </div>
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