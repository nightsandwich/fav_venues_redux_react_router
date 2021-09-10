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
    async onSave(ev){
        ev.preventDefault();
        const allTypes = this.props.types;
        for (const types of allTypes){
            if(types.name === this.state.name){
                alert('This category already exists');
                this.setState({name: ''});   
            }
        }
        try {
            await this.props.newType(this.state);
            this.state.name = '';
        }
        catch(ex){
            console.log(ex);
        }
    }

    render(){
        return (
            <form>
                <input name='name' onChange={this.onChange} value={this.state.name}/>
                <button onClick={this.onSave}>Add Category</button>
            </form>
        )
    }
}
const NewType = connect(state=>state, (dispatch, {history})=> {
    return {
        newType: (type) => {
            dispatch(newType(type, history));
        }
    }
})(_NewType);

export default NewType;