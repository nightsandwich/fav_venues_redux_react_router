
import { connect } from 'react-redux';
import React, { Component } from 'react'
import {newNote, deleteNote} from './store';

class _EditNote extends Component {
    constructor(){
        super();
        this.state = {
            comment: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    onChange(ev){
        this.setState({comment: ev.target.value});
        //console.log('state', this.state)
    }
    onSubmit(ev){
        ev.preventDefault();
        this.props.newNote({comment: this.state.comment, venueId: this.props.venueId});
        this.state.comment = '';
    }
    render() {
        
        return (
            <>
                <div id='notes'>
                    <h3 style={{textAlign:'center'}}> NOTES</h3>
                    <div className='notes'>
                        <ul className='innernotes'>
                        {
                            this.props.notes.map((note) => {
                            return (
                            <>
                               <li key={note.id} className='notes'>{note.comment}<span><button onClick={() => this.props.handleDelete(note.id, this.props.venueId)}>X</button></span></li>                   
                            </>
                            );
                            })
                        }
                        </ul>  
                        {
                        <form className='addnote'>
                            <input name="comment" value={this.state.comment} onChange={this.onChange}/>
                            <button onClick={this.onSubmit}>ADD NOTE</button>
                        </form>    
                        }
                    </div>

                </div>
            </>
        )
    }
}
 const mapStateToProps =  (state, otherProps) => {
    const venueId = otherProps.match.params.id * 1;
    const notes = state.notes.filter(note => note.venueId === venueId);
    return {venueId, notes};
 };
 const mapDispatchToProps = (dispatch, otherProps) => ({
    handleDelete: (id, venueId)=>dispatch(deleteNote(id, venueId, otherProps.history)),
    newNote: (note) => dispatch(newNote(note, history))
});

const EditNote = connect(mapStateToProps, mapDispatchToProps)(_EditNote);

export default EditNote;