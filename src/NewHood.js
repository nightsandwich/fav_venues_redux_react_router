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
    }
    onChange(ev){
        this.setState({name: ev.target.value});
    }
    async onSave(ev){
        ev.preventDefault();
        const allHoods = this.props.neighborhoods;
        for (const hoods of allHoods){
            if(hoods.name === this.state.name){
                alert('This neighborhood already exists');
                this.setState({name: ''});   
            }
        }
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
            <form>
                <input name='name' onChange={this.onChange} value={this.state.name}/>
                <button onClick={this.onSave}>Add Neighborhood</button>
            </form>
        )
    }
}
const NewHood = connect(state=>state, (dispatch, {history})=> {
    return {
        newHood: (neighborhood) => {
            dispatch(newHood(neighborhood, history));
        }
    }
})(_NewHood);

export default NewHood;