import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import VenuesListItem from './VenuesListItem';

const _Type = ({type, venues}) => {
    if(!type.id){
        return '...loading type'
    }
    return (
        <>
        <h1>{venues.length ? venues.length : 'ZERO'} {type.name}-ish {venues.length === 1 ? 'Place' : 'Places'}</h1>
        {!venues.length ? ':( this page is lonely' : ''}
        <VenuesListItem venues={venues} />
        </>
    );
}
const mapStateToProps = (state, otherProps) => {
    const type = state.types.find(type => type.id === otherProps.match.params.id * 1) || {};
    const venues = state.venues.filter(venue => venue.type.id === otherProps.match.params.id * 1)
    return {type, venues};
}
const Type = connect(mapStateToProps)(_Type);

export default Type;