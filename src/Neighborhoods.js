import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { loadNeighborhoods } from './store';

class _Neighborhoods extends Component  {
    componentDidMount(){
        this.props.load();
    }

    render() {
        return (
            <div className='list'>
        <h2>NEIGHBORHOODS</h2>
        <div >
            {
                this.props.neighborhoods.map( neighborhood => { 
                    return (
                        <div key={ neighborhood.id } className='box'>
                    <h3><Link to={`/neighborhood/${neighborhood.id}`}>
                        { neighborhood.name } ({neighborhood.venues.length})
                        </Link>
                    </h3>
                    
                </div>
                );
            })
            }
        </div>
        
    </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => ({load: ()=>dispatch(loadNeighborhoods())});

const Neighborhoods = connect(({neighborhoods,venues}) => ({neighborhoods, venues}), mapDispatchToProps)(_Neighborhoods);

export default Neighborhoods;
       /* <div id='insert-new'>
        {
        <InsertNew neighborhoods={neighborhoods} types={types}/>
        }
        </div> */