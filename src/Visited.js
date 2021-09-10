import React from 'react';
import {connect} from 'react-redux';
import VenuesListItem from './VenuesListItem';

const Visited = ({venues}) => {

    return (
        <>
        <h2>You've Been Here! {!venues.length ? 'Meaning nowhere!' : venues.length === 1 ? venues.length + ' Place!' : venues.length + ' Places!'}</h2>
       <VenuesListItem venues={venues}/>
       </>
    );
};

export default  connect(
    (state) => {
        //console.log(otherProps);
        const venues = state.venues.filter(venue => venue.visited) || {};
        return {venues};
    })(Visited);

