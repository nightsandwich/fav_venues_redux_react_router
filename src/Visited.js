import React from 'react';
import {connect} from 'react-redux';
import VenuesListItem from './VenuesListItem';

const Visited = ({venues}) => {

    return (
       <VenuesListItem venues={venues}/>
    );
};

export default  connect(
    (state) => {
        //console.log(otherProps);
        const venues = state.venues.filter(venue => venue.visited) || {};
        return {venues};
    })(Visited);

