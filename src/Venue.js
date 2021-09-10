import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { visited, deleteVenue } from './store';

const _Venue = ({venue, deleteVenue, visited}) => {

    //console.log(venue);
    if(!venue.id) {
        return '...loading venue';
    }
    return (
        <div>
            <div >
                <div id='venue' className={venue.visited ? 'visited' : 'mustvisit'}>
                    <h3>{venue.name} </h3>
                    <div className="info">
                        VISITED? <input type="checkbox" defaultChecked={venue.visited} onClick={()=>visited(venue)}/>
                    </div>
                    <button onClick={()=>deleteVenue(venue.id)}>DELETE VENUE</button>
                    <div className='color'>
                        <img  src={venue.imageUrl ? venue.imageUrl : './stock.png'} />
                    </div>
                    <div className='wrap'>
                        <div>
                            <Link to={`/type/${venue.type.id}`}>#{venue.type.name.toLowerCase().split('').filter(letter => letter !== ' ').join('')}</Link>
                        </div>
                        <div>  
                            <Link to={`/neighborhoods/${venue.neighborhood.id}`}>#{venue.neighborhood.name.toLowerCase().split('').filter(letter => letter !== ' ').join('')}</Link>
                        </div>
                        <div>  
                            <a href={`${venue.website}`}>#website</a>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
    );
};

const Venue =  connect(
    (state, otherProps) => {
        //console.log(otherProps);
        const venue = state.venues.find(venue => venue.id === otherProps.match.params.id * 1) || {};
        return {venue};
    },
    (dispatch, {history}) => (
            {
                deleteVenue: id => dispatch(deleteVenue(id, history)),
                visited: venue => dispatch(visited(venue, history))
            }
    )
)(_Venue);

export default Venue;