import React, {Component} from "react";
import { connect } from "react-redux";
import {newHood} from './store';

class _NewHood extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
    }
    isDisabled(){
        console.log('xxxxxxxx', this.props);
        if(!this.state.name.length || this.props.neighborhoods.filter(neighborhood => {
            if (neighborhood.name === this.state.name) return true;
        }).length) return true;
        else return false;
    }
    onChange(ev){
        this.setState({name: ev.target.value});
    }
    async onSave(ev){
        ev.preventDefault();
      
        try {
            await this.props.newHood(this.state);
            this.state.name = '';
        }
        catch(ex){
            console.log(ex);
        }
    }

    render(){
        return (
            <form className='singleform'>
                <input name='name' onChange={this.onChange} value={this.state.name} />
                <button onClick={this.onSave} isDisabled={this.isDisabled()}>Add Neighborhood</button>
            </form>
        )
    }
}
const NewHood = connect(({neighborhoods}) => ({neighborhoods}), (dispatch, {history})=> {
    return {
        newHood: (neighborhood) => {
            dispatch(newHood(neighborhood, history));
        }
    }
})(_NewHood);

export default NewHood;