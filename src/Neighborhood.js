import React from 'react';
import {connect} from 'react-redux';
import VenuesListItem from './VenuesListItem';

const _Neighborhood = ({neighborhood, venues}) => {
    if(!neighborhood.id){
        return '...loading neighborhood'
    }
    return (
    <>
        <h1>{!venues.length ? 'ZERO Spots ' : venues.length === 1 ? '1 Spot' : venues.length + ' Spots '} in {neighborhood.name}</h1>
        {!venues.length ? ':( this page is lonely' : ''}
        <VenuesListItem venues={venues}/>
    </>
    );
}
const mapStateToProps = (state, otherProps) => {
    const neighborhood = state.neighborhoods.find(neighborhood => neighborhood.id === otherProps.match.params.id * 1) || {};
    const venues = state.venues.filter(venue => venue.neighborhood.id === otherProps.match.params.id * 1);
    return {neighborhood, venues};
}
const Neighborhood = connect(mapStateToProps)(_Neighborhood);
export default Neighborhood;