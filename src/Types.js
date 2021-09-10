import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { loadTypes } from './store';

class _Types extends Component {
    componentDidMount(){
        this.props.load();
    }
    render(){
        return (
            <div className='list'>
                <h2>CATEGORIES</h2>
                <div >
                    {
                    this.props.types.map( type => { 
                        return (
                        <div key={ type.id } className='box'>
                            <h3><Link to={`/type/${type.id}`}>
                                { type.name } ({type.venues.length})
                            </Link></h3>
                        </div>
                        );
                    })
                    }
                </div>
            </div>
        );
     }
}
const mapDispatchToProps = (dispatch) => ({load: ()=>dispatch(loadTypes())});
const Types = connect(({types,venues}) => ({types, venues}), mapDispatchToProps)(_Types);

export default Types;