import React from 'react';
import {connect} from 'react-redux';
import VenuesListItem from './VenuesListItem';

const MustVisit = ({venues}) => {

    return (
        <>
        <h2>You Should Go To {!venues.length ? "...you've already been everywhere. Maybe stay in and read a book" : venues.length === 1 ? 'This 1 Place!' : 'These ' + venues.length + ' Places!'}! </h2>
       <VenuesListItem venues={venues}/>
       </>
    );
};

export default  connect(
    (state) => {
        //console.log(otherProps);
        const venues = state.venues.filter(venue => !venue.visited) || {};
        return {venues};
    })(MustVisit);

