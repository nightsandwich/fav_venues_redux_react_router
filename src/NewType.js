import React, {Component} from "react";
import { connect } from "react-redux";
import {newType} from './store';

class _NewType extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onChange(ev){
        this.setState({name: ev.target.value});
    }
    // isDisabled(){
    //     if(!this.state.name.length || this.props.types.filter(type => {
    //         if (type.name === this.state.name) return true;
    //     }).length) return true;
    //     else return false;
    // }
    async onSave(ev){
        ev.preventDefault();
        try {
            await this.props.newType(this.state);
            this.state.name = '';
        }
        catch(ex){
            console.log(ex);
        }
    }
    render(){
        const isDisabled = this.state.name.length === 0 || this.props.types.find(type => type.name === this.state.name);

        return (
            <form className='singleform'>
                <input name='name' onChange={this.onChange} value={this.state.name} />
                <button onClick={this.onSave} isDisabled={isDisabled}>Add Category</button>
            </form>
        )
    }
}
const NewType = connect(({types}) => ({types}), (dispatch, {history})=> {
    return {
        newType: (category) => {
            dispatch(newType(category, history));
        }
    }
})(_NewType);

export default NewType;