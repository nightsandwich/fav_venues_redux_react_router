
import { connect } from 'react-redux';
import React, { Component } from 'react'
import {newNote} from './store';

class _EditNote extends Component {
    constructor(){
        super();
        this.state = {
            comment: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    // async componentDidMount(){
    //     //console.log(this);
    //     const {data: notes} = await axios.get(`/api/notes/${this.props.venueId}`);
    //     this.setState({notes});
    //     //console.log('state:', this.state)
    // }
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
            
            {
            <form >
                <input name="comment" value={this.state.comment} onChange={this.onChange}/>
                <br/>
                <button onClick={this.onSubmit}>Add Note</button>
            </form>    
            }
            
            </>
        )
    }
}
 const mapStateToProps =  (state, otherProps) => {
     //console.log(otherProps);
    const venueId = otherProps.match.params.id * 1;
    //console.log(venueId);
    return {venueId};
    // const notes = (await axios.get(`/api/notes/${otherProps.match.params.id}`)).data;
    // return {notes};
 }
const EditNote = connect(mapStateToProps, ((dispatch, {history}) => {
    return {
        newNote: (note) => {
            dispatch(newNote(note, history));
        }
    }
}))(_EditNote);

export default EditNote;